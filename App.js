import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home'
import CreateQuest from './Components/CreateQuest'
import QuestJournal from './Components/QuestJournal';
import DebugPanel from './Components/DebugPanel';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='CreateQuest'
          component={CreateQuest}
          options={{ title: 'Create a Quest' }}
        />
        <Stack.Screen
          name='QuestJournal'
          component={QuestJournal}
          options={{ title: 'Quest Journal' }}
          initialParams={{ questState: [] }}
        />
        <Stack.Screen
          name='DebugPanel'
          component={DebugPanel}
          options={{ title: 'Debug Panel' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
