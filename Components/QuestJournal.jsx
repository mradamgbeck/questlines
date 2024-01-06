import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import styles from '../styles'
import { useContext } from 'react';
import { QuestContext } from '../QuestContext.js';

const QuestJournal = (navigation) => {
    
    const [quests, setQuests] = useContext(QuestContext)

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Text style={styles.text}>Quest Journal</Text>
                <ScrollView>
                    {
                        quests.map((quest, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.text}>{quest.id}</Text>
                                    <Text style={styles.text}>{quest.name}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>

            </View>
        </View>
    )
};
export default QuestJournal;
