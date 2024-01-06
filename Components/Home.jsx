import React from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'
import * as store from '../lib/localStorage'

const Home = ({ navigation }) => {
  async function getQuests() {
    return await store.getAllQuests();
  }
  const initQuests = getQuests()
  console.log("InitQuests: ", initQuests)
  return (
    <View style={styles.appContainer}>
      <View style={styles.card}>
        <Button
          onPress={() => navigation.navigate('DebugPanel')}
          title="Debug Panel"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate('CreateQuest')}
          title="Create Quest"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate('QuestJournal', { initQuests: initQuests })}
          title="Quest Journal"
          style={styles.button}
        />
      </View>
    </View>
  )

 
};
export default Home;