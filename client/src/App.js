import React from 'react';
import pic from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Main from './Main';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <br /><br />
          <img src ={pic} alt="pic" height={100} width={500} />
          <br /><br />
        </header>
        <div>
        <br /><br />
          <a
            className="App-link"
            href="https://www.facebook.com/zachary.godwin.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
        </div>
        <div>
          <a
            className="App-link"
            href="https://github.com/zngodwin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git Hub
          </a>
        </div>
        <div>
          <Link to="/otherpage">Other Page</Link>
        </div>
        <br /><br />
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
        <br /><br />
        
        <span>Email:&nbsp;<a href="mailto:zavissolutions@gmail.com">zavissolutions@gmail.com</a></span>
        <br /><br />

      </div>
    </Router>
  );
}
//hello
export default App;
