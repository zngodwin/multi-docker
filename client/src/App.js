import React, { useState } from "react";
import pic from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import TestPage from './TestPage';
import Main from './Main';
import Video from './Components/Video'

//import Accordion from "./Components/Widgets/Accordion";

import Search from "./Components/Widgets/Search";
import Dropdown from "./Components/Widgets/Dropdown";
import Translate from "./Components/Widgets/Translate";
import Routes from "./Components/Widgets/Routes";
import Header from "./Components/Widgets/Header";
import GoogleAuth from "./apis/GoogleAuth";
import Accordion from "./Components/Widgets/Accordion"

//IMPORTANT ROUTE AND ROUTE(S) are not the smae ROUTE is BroswerRouter
//Routes is custom router 

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <Router>
      <div className="App">

        <header className="App-header">
        <br />
          <img src ={pic} alt="pic" height={100} width={500} />
          <br />
        </header>
        
        <div classname='ui container'>
          <Header />
          <br/>
          <Route path="/search" exact component={Search}/>
          <Routes path="/dropdown">
            <Dropdown 
              label="Select a color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Routes>
          <Route exact path="/translate" component={Translate}/>
          <Route exact path="/about" component={Accordion}/>
      
          </div>

        <div>
        <br />
          <Link to="/about">About Us</Link>
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
        <div>
          <Link to="/testpage">Test Page</Link>
        </div>
        
        <br />
        <GoogleAuth/>
        <br />
        <br />

        <div>
          <Route exact path="/" component={Main} />
          <Route path="/otherpage" component={OtherPage} />
          <Route path="/testpage" component={TestPage} />
        </div>
        <br />
        <span>Email:&nbsp;<a href="mailto:zavissolutions@gmail.com">zavissolutions@gmail.com</a></span>
        <br />
        <div>
        <Route exact path="/" component={Video} />
        </div>
        <br />
       


      </div>
    </Router>
  );
}

export default App;
