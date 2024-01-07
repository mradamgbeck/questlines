import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import CreateQuest from './screens/CreateQuest'
import QuestJournal from './screens/QuestJournal';
import DebugPanel from './screens/DebugPanel';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'QuestLines' }}
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
