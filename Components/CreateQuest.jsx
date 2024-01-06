import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, Button, ScrollView } from 'react-native';
import styles from '../styles'
import { keyGenerator } from '../lib/generators.js'
import * as store from '../lib/localStorage.js'
import { QUEST_KEY_PREFIX } from '../constants.js';
import { useQuestsState } from '../state/QuestState.js';

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
        const quest = { id: id, name: name, stages: stages }
        await store.storeQuest(quest)
        setNewStageName('')
        setName('')
        setStages([])
        updateState()
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                <Text style={styles.text}>Quest Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Find the Holy Grail"
                    placeholderTextColor='white'
                    onChangeText={newName => setName(newName)}
                    defaultValue={name}
                />
                <Text style={styles.text}>Stage Name</Text>
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
                    style={styles.button}
                />
                <Button
                    onPress={saveQuest}
                    title="Save Quest"
                    style={styles.button}
                />

            </View>
            <View style={styles.card}>
                <Text style={styles.text}>{name}</Text>
                <ScrollView>
                    {stages.map((stage, index) => {
                        return <Text key={index} style={styles.text}>{stage.name}</Text>
                    })}
                </ScrollView>
            </View>
        </View>
    )
};
export default CreateQuest;