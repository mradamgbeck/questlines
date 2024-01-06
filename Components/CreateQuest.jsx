import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, Button, ScrollView } from 'react-native';
import styles from '../styles'
import { keyGenerator } from '../lib/generators.js'
import * as store from '../lib/localStorage.js'
import { QUEST_KEY_PREFIX } from '../constants.js';
import { useQuestsState } from '../state/QuestState.js';
import QuestCard from './QuestCard.jsx';

const CreateQuest = ({ navigation }) => {
    let state = useQuestsState()
    useEffect(() => {
        updateState()
    }, []);
    async function updateState() {
        state.set(await store.getAllQuests())
    }
    const [name, setName] = useState('');
    const [newStageName, setNewStageName] = useState('');
    const [stages, setStages] = useState([]);

    const addStage = () => {
        setStages([...stages, { name: newStageName }])
        setNewStageName('')
    }

    const saveQuest = async () => {
        const id = keyGenerator(QUEST_KEY_PREFIX)
        const quest = { id: id, timeStamp: Date.now(), name: name, stages: stages }
        await store.storeQuest(quest)
        setNewStageName('')
        setName('')
        setStages([])
        updateState()
    }

    const renderQuestCard = (name, stages) => {
        if (name) {
            const quest = { name: name, stages: stages }
            return <QuestCard quest={quest} />
        } else
            return
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Text style={styles.header}>Quest Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Find the Holy Grail"
                    placeholderTextColor='white'
                    onChangeText={newName => setName(newName)}
                    defaultValue={name}
                />
                <Text style={styles.header}>Stage Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Bang coconuts together"
                    placeholderTextColor='white'
                    onChangeText={newStageName => setNewStageName(newStageName)}
                    defaultValue={newStageName}
                />
                <Button
                    onPress={addStage}
                    title="Add Stage"
                    color={styles.buttonColor}
                    disabled={newStageName.length === 0}
                />
                <Button
                    onPress={saveQuest}
                    title="Save Quest"
                    color={styles.buttonColor}
                    disabled={name.length === 0 || stages.length === 0}
                />

            </View>
            {renderQuestCard(name, stages)}
        </View>
    )
};
export default CreateQuest;