import React, { Component } from 'react';
import { View } from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { emailChanged } from './../../actions';
import { TextField } from 'react-native-material-textfield';

class EmailTextInput extends Component {

  constructor(props) {
      super(props)
      this.state = {
        email: "",
        emailError: '',
        emailFlag: 0,
      }
  }

  componentWillMount () {
      // Populate the text inputs if you already have values for them
      if ( this.props.email != '') {
        this.validateInput('email', this.props.email);
      }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  // Validate the form inputs


validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(text) === false)
  {
    this.setState({ emailError: 'Please enter a valid email address'});
  }else{
    this.setState({ emailError: '' });
  }
  }

  // Display form validation errors if needed
  // renderFormError(inputName) {

  //   if (inputName == 'email') {
  //     if (this.state.emailError !='') {
  //       return (<RkText rkType='danger'>{this.state.emailError}</RkText>);
  //     }
  //   }
  // }


  render() {
    let { email } = this.state;
    let { emailError } = this.state;

    return (
      <View style={{display: 'flex',
      flexWrap: 'wrap',marginHorizontal:45,alignContent:'center'}}>
      <TextField
        label='Email'
        value={this.props.email}
        error={emailError}
        errorColor='red'
        style= {{width:5,height:20,textColor:'black',inputContainerPadding:5,lineWidth:0.5,
        activeLineWidth:5}}
        onChangeText={ (email) => this.onEmailChange( email ) }
        onBlur = {() => { this.validate(this.props.email) }}
      />
       
      </View>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  emailPwdContainer: {
    alignItems: 'center',
    marginHorizontal: 20
  }
}));


const mapStateToProps = ({ auth }) => {
  const { email } = auth;
  return { email };
};

export default connect(mapStateToProps, {
  emailChanged
})(EmailTextInput);
