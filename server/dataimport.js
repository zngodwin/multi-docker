const fs = require("fs");
//const Pool = require("pg").Pool;
const { Pool } = require("pg");
const fastcsv = require("fast-csv");
const keys = require("./keys");

let stream = fs.createReadStream("data.csv");
let csvData = [];
let csvStream = fastcsv
.parse()
.on("data", function(data) {
csvData.push(data);
})
.on("end", function() {
// remove the first line: header
csvData.shift();

// create a new connection to the database

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

const query =
    "INSERT INTO terms (id, acronym, definition) VALUES ($1, $2, $3)";

pgClient.connect((err, client, done) => {
    if (err) throw err;

    try {
    csvData.forEach(row => {
        client.query(query, row, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            console.log("inserted " + res.rowCount + " row:", row);
        }
        });
    });
    } finally {
    done();
    }
});
});

stream.pipe(csvStream);
console.log('loading data ');