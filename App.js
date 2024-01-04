import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import CreateQuest from './Components/CreateQuest'
import * as store from './lib/localStorage'
import DisplayQuests from './Components/DisplayQuests';
export default function App() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    const initialState = store.getAllQuests()
    setQuests(initialState)
  }, [])

  const questStateHandler = (newQuest) => {
    setQuests[{ ...quests, newQuest }]
  }
  return (
    <View style={styles.appContainer}>
      <CreateQuest questStateHandler={questStateHandler}></CreateQuest>
      <DisplayQuests quests={quests}></DisplayQuests>
      <StatusBar style="auto" />
    </View>
  );
}
