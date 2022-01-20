import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Menu extends Component {
  render() {
    return (
      <View>
        <View style={styles.buttonWrapper}>
          <Button color="#757a80" title="Storage" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button color="#757a80" title="Map" />
        </View>
        <View style={styles.buttonWrapper}>
          <Button color="#757a80" title="Profile" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonWrapper: {
    height: 180,
    backgroundColor: '#E87B79',
  },
});
export default Menu;
