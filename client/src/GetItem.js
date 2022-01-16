import React from 'react';
import axios from 'axios';


class GetItem extends React.Component{
    state = {term: []};

    onInputChange = (event) => {
        event.preventDefault();
        this.setState({ term: event.target.value });
        console.log(this.state.term);
      };

    //will change DNS to this.state.term later
    fetchTerm = async (event) => {
    const term = await axios.get('/api/terms/all', {
        params: {
        term: event.state.term
        //term: 'DNS'
        }
    });

    this.props.fetchTerm(this.state.term)
    };
  
    //still need to do this on submit this is wired to component did mount
    //so path gets created and there is default value

    render(){
        return (
        <div className='get-item ui segment'>
            <form onSubmit={this.fetchTerm} className='ui form'/>
        </div>
        )
    }
};

export default GetItem; 