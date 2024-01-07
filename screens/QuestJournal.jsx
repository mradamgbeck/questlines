import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles'
import QuestCard from '../components/QuestCard.jsx';
import { useQuestsState } from '../state/QuestState.js';

const QuestJournal = ({navigation}) => {
    let state = useQuestsState()
    const [quests, setQuests] = useState(state.get())
    const renderQuests = (quests) => {
        if (quests && quests.length > 0) {
            return quests.map((quest, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.touchableOpactity} onPress={
                        () => navigation.navigate('EditQuest', { quest: quest })}>
                        <QuestCard quest={quest} />
                    </TouchableOpacity>
                )
            })
        } else {
            return <Text style={styles.text}>Nothing to report! All Done.</Text>
        }
    }
    return (
        <View style={styles.appContainer}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
                {
                    renderQuests(quests)
                }
            </ScrollView>
        </View>
    )
};
export default QuestJournal;
