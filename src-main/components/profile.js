import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Profiletext, MyButton} from './common';
import {connect} from 'react-redux';
import {changeProfile, updateProfile} from '../actions';

class Profile extends Component {
  onChangeName(profile) {
    this.props.updateProfile(profile);
  }

  onChangeSurname(profile) {
    this.props.updateProfile(profile);
  }

  updateProfile() {
    this.props.updateProfile(this.props.profile);
  }

  render() {
    return (
      <View>
        <Profiletext
          placeholder="Name..."
          onChangeText={this.onChangeName.bind(this)}
        />
        <Profiletext
          placeholder="Surname..."
          onChangeText={this.onChangeSurname.bind(this)}
        />
        <Profiletext
          placeholder="Birthday..."
          onChangeText={this.onChangeSurname.bind(this)}
        />
        <MyButton
          spinner={false}
          title="UPDATE"
          onPress={this.updateProfile.bind(this)}
          color="#E87B79"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {profile} = state.profileForm;
  return {
    profile,
  };
};

export default connect(
  mapStateToProps,
  {
    changeProfile,
    updateProfile,
  },
)(Profile);
