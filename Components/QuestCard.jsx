import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles'

const QuestCard = ({ quest }) => {
    return (
        <View style={styles.questCard}>
            <Text style={styles.header}>{quest.name}</Text>
            {quest.stages.map((stage, index) => {
                return <Text key={index} style={styles.text}>{stage.name}</Text>
            })}
        </View>
    )
};
export default QuestCard;
