import React, {Component} from 'react';
import {FirebaseAuth} from 'react-firebaseui';
import fire from './../fire';

class Login extends Component{
  constructor(props){
    super(props);
    this.uiConfig={
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        fire.auth.GoogleAuthProvider.PROVIDER_ID,
        fire.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
  }
  render(){
    return <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={fire.auth()}/>
  }
}

export default Login;