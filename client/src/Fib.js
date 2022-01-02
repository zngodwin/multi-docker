import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ' f(x) = f(x) - 1 + f(x) - 2',
    term: ''
  };


  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
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

  onInputChange = (event) => {
    this.setState({ index: event.target.value })
    //will wire this up later
    this.setState({ term: event.target.value })
    console.log(this.state.term);
  };

  handleSubmit = async (event) => {
    //event.preventDefault();
    this.setState({term: this.state.term})

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
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
            <label>Enter your index: </label>
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
      </div>
    );
  }
}

export default Fib;
