import React from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'

const Home = ({ navigation }) => {
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
          onPress={() => navigation.navigate('QuestJournal')}
          title="Quest Journal"
          style={styles.button}
        />
      </View>
    </View>
  )


};
export default Home;