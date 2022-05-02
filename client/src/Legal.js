import React from 'react';
import { Link } from 'react-router-dom';
import { Field, formValues, reduxForm } from 'redux-form' 

class Legal extends React.Component {
  
  renderError({ error, touched}){
    if (touched && error ){
      return(
        <div className="ui error memssage"> 
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}` 
    //onChange={formProps.input.onChange}
    //value={formProps.input.value}
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input}/>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues){
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <Link to="/home"> Go back home</Link>
        <br/>
        <br/>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form container">
          <Field 
            name="fName" 
            component={this.renderInput} 
            label='First Name' 
            placeholder="First Name" 
          />
          
          <Field 
            name="lName" 
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

//when property in validate matches title in Field redux-from passes it to component
const validate = (formValues) => {
  const errors = {};

  if (!formValues.fName){
    errors.fName = "You must enter in your first name";
  }
  if (!formValues.lName){
    errors.lName = 'You must enter your last name';
  }
  return errors;
};

export default reduxForm({
  form: 'legal',
  validate
})(Legal);
