import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles'
import * as store from '../utils/localStorage'
import { useQuestsState } from '../state/QuestState.js';

const HomeScreen = ({ navigation }) => {
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
          onPress={() => navigation.navigate('DebugPanel')}
          title="Debug Panel"
          color={styles.buttonColor}
        />
        <Button
          onPress={() => navigation.navigate('CreateQuest')}
          title="Create Quest"
          color={styles.buttonColor}
        />
        <Button
          onPress={() => navigation.navigate('QuestJournal')}
          title="Quest Journal"
          color={styles.buttonColor}
        />
      </View>
    </View>
  )


};
export default HomeScreen;