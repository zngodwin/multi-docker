import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    term: ''
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
    //this.fetchTerm();
  }

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
  //will change DNS to this.state.term later
  async fetchTerm(index) {
    const term = await axios.get('/api/terms/all', {
      params: {
        term: index
      }
    });
    console.log('send', index);
    
    console.log(term.request);
    console.log('received', term.data);
    return term.data
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
    
    await axios.post('/api/values', {
      index: this.state.index, 
    })
  };
  
  
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
            <label>Enter your index or word: </label>
            <input
              value={this.state.index}
              onChange={this.onInputChange}
            />
            <button>Submit</button>
          </div>
        </form>

        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderValues()}

        <h3>Acronym Lookup</h3>
      </div>
    );
  }
}

export default Fib;
