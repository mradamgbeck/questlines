import React, {useEffect} from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'
import * as store from '../lib/localStorage'
import { useQuestsState } from '../state/QuestState.js';

const Home = ({ navigation }) => {
  let state = useQuestsState()
  useEffect(() => {
      updateState()
  }, []);
  async function updateState() {
      state.set(await store.getAllQuests())
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.card}>
        <Button
          onPress={() => navigation.navigate('DebugPanel', { state: state })}
          title="Debug Panel"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate('CreateQuest')}
          title="Create Quest"
          style={styles.button}
        />
        <Button
          onPress={() => navigation.navigate('QuestJournal')}
          title="Quest Journal"
          style={styles.button}
        />
      </View>
    </View>
  )


};
export default Home;