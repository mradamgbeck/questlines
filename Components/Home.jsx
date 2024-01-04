import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles'

const Home = () => {
  return (
    <View>
      <View>
        <Text style={styles.text}>Current Quest Name</Text>
        <Text style={styles.text}>Current Quest Stage</Text>
        <Text style={styles.text}>Journal</Text>
      </View>
    </View>
  )
};
export default Home;