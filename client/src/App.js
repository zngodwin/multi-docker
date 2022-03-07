import React, { useState } from "react";
import pic from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Main from './Main';
import Video from './Components/Video'


import Accordion from "./Components/Widgets/Accordion";
import Search from "./Components/Widgets/Search";
import Dropdown from "./Components/Widgets/Dropdown";
import Translate from "./Components/Widgets/Translate";
import Routes from "./Components/Widgets/Routes";
import Header from "./Components/Widgets/Header";

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
        <br /><br />
          <img src ={pic} alt="pic" height={100} width={500} />
          <br /><br />
        </header>

        <div className="widget">
          <Header/>
         
          <Routes path="/list">
            <Search />
          </Routes>
          <Routes path="/dropdown">
            <Dropdown 
              label="Select a color"
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          </Routes>
          <Routes path="/translate">
            <Translate />
          </Routes> 
          </div>

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
        <div>
        <Route exact path="/" component={Video} />
        </div>

      </div>
    </Router>
  );
}

export default App;
