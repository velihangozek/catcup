import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import firebase from 'firebase';
import {Input, MyButton} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {
  onButtonClicked() {
    const {email, password} = this.props;
    this.props.loginUser(email, password);
  }

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  render() {
    const {error, loading} = this.props;

    const errorMsg = error ? (
      <Text style={styles.errorText}>{error}</Text>
    ) : null;

    return (
      <View style={styles.loginContainer}>
        <View>
          <Image
            style={styles.imageContainer}
            source={{
              uri: 'https://i.imgyukle.com/2020/05/27/yhJ3tH.png',
            }}
            resizeMode="center"
          />
        </View>
        <View>
          <Input
            text="Email"
            inputPlaceHolder="Enter Email"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </View>
        <View>
          <Input
            text="Password"
            inputPlaceHolder="Enter Password"
            onChangeText={this.onPasswordChanged.bind(this)}
            secureTextEntry
            value={this.props.password}
          />
        </View>
        {errorMsg}
        <MyButton
          spinner={loading}
          title="Login"
          onPress={this.onButtonClicked.bind(this)}
          color="#757a80"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 40,
    backgroundColor: '#E87B79',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: 350,
    height: 350,
    padding: 130,
  },
  errorText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => {
  const {email, password, loading, error} = state.auth;
  return {
    email,
    password,
    loading,
    error,
  };
};

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginForm);
