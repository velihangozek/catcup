import firebase from 'firebase';
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Menu from './components/menu';

const RouterComp = () => {
  return (
    <Router titleStyle={{color: '#E87B79'}}>
      <Scene key="root" hideNavBar={true}>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            hideNavBar={true}
          />
        </Scene>
        <Scene key="main" initial>
          <Scene
            key="menu"
            component={Menu}
            title="Menu"
            onRight={() => {
              firebase.auth().signOut();
              Actions.auth();
            }}
            rightTitle="Logout"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComp;
