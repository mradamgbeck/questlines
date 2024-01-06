import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles'
import QuestCard from './QuestCard.jsx';
import { useQuestsState } from '../state/QuestState.js';

const QuestJournal = (navigation) => {
    let state = useQuestsState()
    const [quests, setQuests] = useState(state.get())
    return (
        <View style={styles.appContainer}>
            <ScrollView style={styles.scrollView}>
                {
                    quests.map((quest, index) => {
                        return (
                            <QuestCard key={index} quest={quest} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
};
export default QuestJournal;
