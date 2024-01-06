import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import styles from '../styles'
import { useContext } from 'react';
import { QuestContext } from '../QuestContext.js';
import { DEBUG_QUEST } from '../constants.js';
import QuestCard from './QuestCard.jsx';
const QuestJournal = (navigation) => {
    
    const [quests, setQuests] = useState([DEBUG_QUEST])

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Text style={styles.text}>Quest Journal</Text>
                    {
                        quests.map((quest, index) => {
                            return (
                                <QuestCard key={index} quest={quest}/>
                            )
                        })
                    }
            </View>
        </View>
    )
};
export default QuestJournal;
