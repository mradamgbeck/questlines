import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import styles from '../styles'
import * as store from '../lib/localStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DisplayQuests = ({ propQuests }) => {
    const [quests, setQuests] = useState(propQuests ? propQuests : []);
    const killStorage = () => {
        store.clearAllData()
    }
    const getAll = () => {
        const newQuests = store.getAllQuests();
        setQuests({newQuests})
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
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
                <Button
                    onPress={getAll}
                    title="Get all"
                    style={styles.button}
                />
                <Button
                    onPress={killStorage}
                    title="Kill all"
                    style={styles.button}
                />
            </View>
        </View>
    )
};
export default DisplayQuests;
