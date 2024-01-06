import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'
import * as store from '../lib/localStorage'
import { keyGenerator } from '../lib/generators.js'
import { DEBUG_QUEST, QUEST_KEY_PREFIX } from '../constants.js';
import { useQuestsState } from '../state/QuestState.js';
const DebugPanel = ({ navigation }) => {
    let state = useQuestsState()
    useEffect(() => {
        updateState(state);
    }, [])

    async function updateState() {
        state.set(await store.getAllQuests());
    }

    async function storeQuest() {
        const debugQuest = DEBUG_QUEST
        debugQuest.id = keyGenerator(QUEST_KEY_PREFIX)
        debugQuest.name = 'DEBUG QUEST ' + Math.floor(Math.random() * 1001)
        debugQuest.timeStamp = Date.now(),
            console.log("DEBUG STORE QUEST", debugQuest);
        await store.storeQuest(DEBUG_QUEST)
        updateState()
    }

    async function getAll() {
        const quests = await store.getAllQuests()
        console.log("DEBUG GET ALL: ", quests);
    }

    function killStorage() {
        console.log("DEBUG CLEAR ALL DATA")
        store.clearAllData()
        updateState()
    }

    function printState() {
        console.log("CURRENT STATE: ", state.get())
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Button
                    onPress={storeQuest}
                    title="Store Quest"
                    color={styles.buttonColor}
                />
                <Button
                    onPress={getAll}
                    title="Get all"
                    color={styles.buttonColor}
                />
                <Button
                    onPress={killStorage}
                    title="Clear Quests"
                    color={styles.buttonColor}
                />
                <Button
                    onPress={printState}
                    title="Print State"
                    color={styles.buttonColor}
                />
            </View>
        </View>
    )
};
export default DebugPanel;

