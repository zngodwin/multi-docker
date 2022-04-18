import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form' 

class Legal extends React.Component {
  renderInput({ input, label }) {
    //onChange={formProps.input.onChange}
    //value={formProps.input.value}
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues)
  }

  render() {
    return (
      <div>
        <Link to="/home"> Go back home</Link>
        <br/>
        <br/>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form container">
          <Field 
            name="First Name" 
            component={this.renderInput} 
            label='First Name' 
            placeholder="First Name" 
          />
          
          <Field 
            name="Last Name" 
            component={this.renderInput} 
            label="Last Name"
            placeholder='Last Name'
          />
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" className="hidden"/>
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  };
}

export default reduxForm({
  form: 'legal'
})(Legal);
