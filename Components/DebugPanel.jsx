import React from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'
import * as store from '../lib/localStorage'
import {keyGenerator} from '../lib/generators.js'
import { DEBUG_QUEST } from '../constants.js';
import { QUEST_KEY_PREFIX } from '../constants.js';

const DebugPanel = ({ navigation }) => {
    
    async function storeQuest() {
        const debugQuest = DEBUG_QUEST
        debugQuest.id = keyGenerator(QUEST_KEY_PREFIX)
        debugQuest.name = 'DEBUG QUEST ' + Math.floor(Math.random() * 1001)
        console.log("DEBUG STORE QUEST", debugQuest);
        await store.storeQuest(DEBUG_QUEST)
    }

    async function getAll() {
        const quests = await store.getAllQuests()
        console.log("DEBUG GET ALL: ", quests);
    }

    function killStorage() {
        console.log("DEBUG CLEAR ALL DATA")
        store.clearAllData()
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Button
                    onPress={storeQuest}
                    title="Store Quest"
                    style={styles.button}
                />
                <Button
                    onPress={getAll}
                    title="Get all"
                    style={styles.button}
                />
                <Button
                    onPress={killStorage}
                    title="Clear Quests"
                    style={styles.button}
                />
            </View>
        </View>
    )
};
export default DebugPanel;