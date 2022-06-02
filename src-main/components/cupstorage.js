import * as React from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

export default function App() {
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={100}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}>
        {({remainingTime, animatedColor}) => (
          <Animated.Text
            style={{...styles.remainingTime, color: animatedColor}}>
            {remainingTime}%
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E87B79',
    padding: 8,
  },
  remainingTime: {
    fontSize: 65,
  },
});
