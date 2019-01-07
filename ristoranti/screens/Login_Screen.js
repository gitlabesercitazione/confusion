import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Login from './../components/Login/Login';
import { facebookSignin } from '../actions';
import NavigatorService from './../utils/navigator';

class Login_Screen extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;

    console.log('Login_Screen:Line 15: Rendering Login_Screen');
      return (
          <Login
            emailPwdBtnStr='Accedi'
            fbBtnStr='Facebook Signin'
            showEmailPwdOption={true}
            onNavString1='Non hai un account?'
            onNavString2=' Registrati ora'
            onNavPress={ () => { NavigatorService.navigate('profile_screen'); } }
            onForgotPassword={ () => {  NavigatorService.reset('reset_screen'); } }
          />
      )
  }
}

export default connect(null, {
  facebookSignin
})(Login_Screen);
