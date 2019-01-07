import React, { Component } from 'react';
import { View } from 'react-native';
import {
  RkText,
  RkButton,
  RkStyleSheet
} from 'react-native-ui-kitten';
class ForgotPwdButton extends Component {

  _renderForgotPassword() {

    if ( this.props.emailPwdBtnStr == 'Accedi') {
      let android_forgot_pwd = { marginBottom: 10} ;
      return (
        <View style={{...styles.textRow,...android_forgot_pwd}}>
          <RkButton
              rkType='clear'
              onPress={ () => { this.props.onForgotPassword() } }>
              <RkText rkType='primary3'>
                {'Recupera password'}
              </RkText>
          </RkButton>
        </View>

      );
    }
  }

  render() {
    return (
      <View>
        {this._renderForgotPassword()}
      </View>
    );
  }


}

let styles = RkStyleSheet.create(theme => ({
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  }
}));

export default ForgotPwdButton;
