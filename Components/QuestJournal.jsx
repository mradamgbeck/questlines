import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles'
import QuestCard from './QuestCard.jsx';
import * as store from '../lib/localStorage'
import { useQuestsState } from '../state/QuestState.js';

const QuestJournal = (navigation) => {
    let state = useQuestsState()
    // useEffect(() => {
    //     updateState()
    // }, []);
    // async function updateState() {
    //     state.set(await store.getAllQuests())
    // }
    const [quests, setQuests] = useState(state.get())
    console.log("JOURNAL QUESTS -------------------------", quests)
    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Text style={styles.text}>Quest Journal</Text>
                {
                    quests.map((quest, index) => {
                        return (
                            <QuestCard key={index} quest={quest} />
                        )
                    })
                }
            </View>
        </View>
    )
};
export default QuestJournal;
