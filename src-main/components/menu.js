import React, {Component} from 'react';
import {View, Button, StyleSheet, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
class Menu extends Component {
  render() {
    return (
      <View>
        <View style={styles.buttonWrapper}>
          <Button
            color="#757a80"
            title="STORAGE"
            onPress={() => Actions.Storage()}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer}
              source={{
                uri: 'https://i.imgyukle.com/2020/05/28/yiLMuU.png',
              }}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button color="#757a80" title="MAP" onPress={() => Actions.Map()} />
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer}
              source={{
                uri: 'https://i.imgyukle.com/2020/05/28/yigWeA.png',
              }}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            color="#757a80"
            title="PROFILE"
            onPress={() => Actions.Profile()}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageContainer}
              source={{
                uri: 'https://i.imgyukle.com/2020/05/28/yih5D8.png',
              }}
              resizeMode="center"
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            color="#757a80"
            title="STATISTICS"
            onPress={() => Actions.Statistics()}
          />
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
  imageContainer: {
    width: 400,
    alignSelf: 'center',
    height: 120,
    paddingTop: 10,
  },
});
export default Menu;
