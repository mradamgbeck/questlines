import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles'

const Journal = () => {
  return (
    <View>
      <View>
        <Text style={styles.text}>Create New Questline</Text>
      </View>
      <Text style={styles.text}>Quests</Text>
      <ScrollView>
        <View>
            <Text style={styles.text}>Eat Trash</Text>
            <Text style={styles.text}>Buy a House</Text>
            <Text style={styles.text}>Punch the Neighbor</Text>
        </View>
      </ScrollView>
    </View>
  )
};
export default Journal;