//var format = require('pg-format');
const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INTEGER)")
    .catch((err) => console.error(err));
});

const query = "CREATE TABLE IF NOT EXISTS terms (id INTEGER, acronym VARCHAR, definition TEXT)"

pgClient.connect((err, client, done) => {
  if (err) throw err;
  client.query(query, (err, res) => {
    done();
    if (err){
      console.log(err.stack);
    } else {
      for (let row of res.rows) {
        console.log(row);
      }
    }
  });
});

// Redis Client Setup
const redis = require("redis");
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const redisPublisher = redisClient.duplicate();

// Express route handlers

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");

  res.send(values.rows);
});

app.get("/values/current", async (req, res) => {
  redisClient.hgetall("values", (err, values) => {
    res.send(values);
  });
});

app.post("/values", async (req, res) => {
  const index = req.body.index;

  if (parseInt(index) > 40) {
    return res.status(422).send("Index too high");
  }

  redisClient.hset("values", index, "Nothing yet!");
  redisPublisher.publish("insert", index);
  pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

  res.send({ working: true });
});

//import data into postgres 
const dataimport = require('./dataimport');

app.get("/terms/all", async (req, res) => {
  let param = req.query.term;
  //const terms = await pgClient.query("SELECT acronym, definition FROM terms WHERE acronym=$1", [param]);
  const terms = await pgClient.query("SELECT acronym, definition FROM terms WHERE acronym=$1", [param]);

  /*
  sql = "SELECT acronym, definition FROM terms WHERE acronym = $1";
  
  const terms = await pgClient.query((sql, param),
    (err, res) => {
      if (err){
        console.log(err.stack);
    } else {
        for (let row of res.rows) {
          console.log(row);
            }
          }
       })
    */
    console.log("received", param);
   
    console.log(terms);
    res.send(terms.rows);
  }
);

app.listen(5000, (err) => {
  console.log("Listening");
});
