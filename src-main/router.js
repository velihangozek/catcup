import firebase from 'firebase';
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Menu from './components/menu';
import cupstorage from './components/cupstorage';
import map from './components/map';
import profile from './components/profile';
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
            title="MENU"
            onRight={() => {
              firebase.auth().signOut();
              Actions.auth();
            }}
            rightTitle="Logout"
            initial
          />
          <Scene
            key="Storage"
            component={cupstorage}
            title="STORAGE OF THE CUP"
          />
          <Scene key="Profile" component={profile} title="PROFILE" />
          <Scene key="Map" component={map} title="MAP" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComp;
