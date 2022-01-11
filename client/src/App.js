import React from 'react';
import pic from './me.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <br /><br />
          <img src ={pic} alt="pic" height={250} width={200} />
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
            Zachary Godwin
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
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
        <br /><br />
        
        <span>Email:&nbsp;<a href="mailto:zgodwin1@gmail.com">zgodwin1@gmail.com</a></span>
        <br /><br />

      </div>
    </Router>
  );
}

export default App;
