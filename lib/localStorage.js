import AsyncStorage from '@react-native-async-storage/async-storage';
import { QUEST_KEY_PREFIX } from '../constants';

export async function storeQuest(quest) {
    try {
        if (await keyExists(quest.id)) {
            console.log(`Updating quest ${quest.id}`)
            await AsyncStorage.mergeItem(quest.id, JSON.stringify(quest));
        } else {
            console.log(`Adding quest ${quest.id}`)
            await AsyncStorage.setItem(quest.id, JSON.stringify(quest));
        }
    } catch (e) {
        console.error('Error storing data.', e)
    }
}

export async function getQuest(key) {
    try {
        if (await keyExists(key)) {
            console.log(`Getting quest :${key}`)
            return await AsyncStorage.getItem(key)
        } else {
            console.log(`Quest ${key} not found.`)
            return
        }
    } catch (e) {
        console.error(`Error fetching quest: ${key}`, e)
    }
};

export async function getAllQuests() {
    let quests = []
    try {
        const questKeys = await getQuestKeys();
        quests = questKeys.map(async (key) => {
            return await getQuest(key)
        })
        return await Promise.all(quests)
    } catch (e) {
        console.error('Error fetching quests: ', e)
    }
};

export async function clearQuests() {
    try {
        const questKeys = await getQuestKeys();
        quests = await questKeys.map(async (key) => {
            console.log(`Clearing Quest: ${key}`)
            await AsyncStorage.removeItem(key)
        })
    } catch (e) {
        console.error('Error clearing data.', e)
    }
};

export function clearAllData() {
    console.log(`Clearing all data`)
    AsyncStorage.clear()
}

async function keyExists(key) {
    const allKeys = await AsyncStorage.getAllKeys()
    const exists = allKeys.includes(key)
    console.log(`key: ${key} ${exists ? 'exists' : 'does not exist'} in key list`)
    return exists
}

async function getQuestKeys() {
    const allKeys = await AsyncStorage.getAllKeys();
    console.log('All Keys: ', allKeys)
    const questKeys = allKeys.filter((key) => {
        return key.includes(QUEST_KEY_PREFIX);
    });
    console.log('Quest Keys: ', questKeys)
    return questKeys;
}