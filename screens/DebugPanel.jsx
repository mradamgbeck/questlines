import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import styles from '../styles'
import * as store from '../utils/localStorage'
import {  DEBUG_QUEST } from '../utils/generators.js'
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
        const debugQuest = DEBUG_QUEST()
        console.log("DEBUG STORE QUEST", debugQuest);
        await store.storeQuest(debugQuest)
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

