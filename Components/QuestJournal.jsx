import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles'
import QuestCard from './QuestCard.jsx';
import * as store from '../lib/localStorage.js'

const QuestJournal = (navigation) => {
    const [quests, setQuests] = useState([])
    useEffect(() => {
        const getQuests = async () => {
            setQuests(await store.getAllQuests())
        }
        getQuests()
    }, [quests]);
    console.log("JOURNAL QUEST STATE ------------------ ", quests)
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
