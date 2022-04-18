import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form' 

class TestPage extends React.Component {
    renderInput({ input, label }) {
      //onChange={formProps.input.onChange}
      //value={formProps.input.value}
      return (
        <div className="field">
          <label>{label}</label>
          <input {...input}/>
        </div>
      )
    }
    onSubmit(formValues){
      console.log(formValues);
    }

    render() {
      return (
        <div>
          <Link to="/home"> Go back home</Link>
          <br/>
          This Is A Test Page
          <br/>
          <br/>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
            <Field name="title" component={this.renderInput} label='Enter Title' />
            <Field 
              name="description" 
              component={this.renderInput} 
              label="Enter Description"
            />
            <button className="ui button primary">Submit</button>
          </form>
        </div>
      );
    };
};

export default reduxForm({
    form: 'testPage'
  })(TestPage);