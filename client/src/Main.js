import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: 'Database Lookup',
    term: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
    //this.fetchTerm();
  }
  //get from redis
  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  async fetchTerm(index) {
    const term = await axios.get('/api/terms/all', {
      params: {
        term: index
      }
    });
    console.log('send', index);
    console.log('received', term.data);
    this.setState({ term: term.data });

  };
  
  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ index: event.target.value });
    this.setState({ term: event.target.value });
    //console.log(this.state.index);
  }; 

  handleSubmit = async (event) => {
    //DO NOT REMOVE event.preventDefault or wont work
    event.preventDefault();
    this.fetchTerm(this.state.index);
    
    //post to redis
    await axios.post('/api/values', {
      index: this.state.index, 
    })
  };

  renderTerm(){
    
    try{
      if(typeof this.state.term === 'object'){
        console.log(this.state.term[0].acronym);
        return <div> {this.state.term[0].acronym} : {this.state.term[0].definition}</div>
      } else 
      {
        //pass 
      }
    }
    catch(err){
      console.log(err);
    }
    return [''];
  
  }
  
  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }
  
  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
   
    return entries;
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className ='ui form'>
          <div className='field'>
            <label>Search: </label>
            <input
              value={this.state.index}
              onChange={this.onInputChange}
            />
            <button>Submit</button>
          </div>
        </form>

        <h3>Index:</h3>
        {this.renderValues()}

        <h3>Searh Result</h3>
        {this.renderTerm()}
      
      </div>
    );
  }
}

export default Main;
