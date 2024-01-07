import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles'
import { useRoute } from '@react-navigation/native';
import CheckBox from 'react-native-check-box'
import * as store from '../utils/localStorage.js'
import { useQuestsState } from '../state/QuestState.js';
import * as _ from 'lodash'
import { forceOnlyActiveQuest, makeFirstStageActive } from '../utils/questUtils.js';
const EditQuest = ({ navigation }) => {
    let state = useQuestsState()
    useEffect(() => {
        updateState()
    }, []);
    async function updateState(newQuests) {
        state.set(await store.getAllQuests())
    }

    const [isEditing, setIsEditing] = useState(false)
    const initQuest = useRoute().params.quest
    const [quest, setQuest] = useState(initQuest)

    const handleClickEdit = async () => {
        if (isEditing) {
            let newQuest = _.cloneDeep(quest)
            const stagesWithNames = newQuest.stages.filter((stage) => {
                return (stage.name)
            })
            newQuest.stages = stagesWithNames
            newQuest = makeFirstStageActive(newQuest)
            console.log(newQuest)
            setQuest(newQuest)
            await store.storeQuest(newQuest)
            updateState()
        }
        setIsEditing(!isEditing)
    }

    const addStage = () => {
        let newQuest = _.cloneDeep(quest)
        newQuest.stages.push({ name: null, isComplete: false, order: newQuest.stages.length })
        setQuest(newQuest)
    }

    const nonEditableCard =
        <View style={styles.card}>
            <Text style={styles.header}>{quest.name}</Text>
            {quest.stages.map((stage, index) => {
                return <Text key={index} style={styles.text}>{stage.name}</Text>
            })}
            <CheckBox
                onClick={() => { }}
                isChecked={quest.isActive}
                leftText={"Active Quest"}
                leftTextStyle={styles.text}
                disabled={!isEditing} />
            <CheckBox
                onClick={() => { }}
                isChecked={quest.isComplete}
                leftText={"Quest Complete"}
                leftTextStyle={styles.text}
                disabled={!isEditing} />
        </View>

    const editableCard =
        <View style={styles.card}>
            <TextInput
                style={styles.textInput}
                onChangeText={(name) => {
                    let newQuest = { ...quest }
                    newQuest.name = name
                    setQuest(newQuest)
                }}
                defaultValue={quest.name}
            />
            {quest.stages.map((stage, index) => {
                return <TextInput key={index}
                    style={styles.textInput}
                    onChangeText={(newName) => {
                        let newQuest = _.cloneDeep(quest)
                        newQuest.stages[index].name = newName
                        setQuest(newQuest)
                    }}
                    defaultValue={stage.name}
                />
            })}
            <CheckBox
                onClick={() => {
                    let newQuest = _.cloneDeep(quest)
                    newQuest.isActive = !newQuest.isActive
                    setQuest(newQuest)
                }}
                isChecked={quest.isActive}
                leftText={"Active Quest"}
                leftTextStyle={styles.text}
                disabled={!isEditing} />
            <CheckBox
                onClick={() => {
                    let newQuest = _.cloneDeep(quest)
                    newQuest.isComplete = !newQuest.isComplete
                    setQuest(newQuest)
                }}
                isChecked={quest.isComplete}
                leftText={"Quest Complete"}
                leftTextStyle={styles.text}
                disabled={!isEditing} />
            <Button
                onPress={addStage}
                title={'Add Stage'}
                color={styles.buttonColor}
            />
        </View>

    const renderCard = () => {
        return (isEditing ? editableCard : nonEditableCard)
    }

    return (
        <View style={styles.appContainer}>
            {renderCard()}
            <Button
                onPress={handleClickEdit}
                title={`${isEditing ? 'Save Quest' : 'Edit Quest'}`}
                color={styles.buttonColor}
                disabled={isEditing && !quest.name}
            />
        </View>
    )
};
export default EditQuest;