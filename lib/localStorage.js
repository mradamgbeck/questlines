import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeQuest(quest) {
    try {
        const quests = await getAllQuests()
        console.log(`Adding quest ${JSON.stringify(quest)} to quests: `, quests.length)
        quests.push(quest)
        let newQuests = JSON.stringify(quests)
        console.log("NEW QUESTS: ", newQuests)
        await AsyncStorage.mergeItem('quests', newQuests);
    } catch (e) {
        console.error('Error storing data.', e)
    }
}

export async function getQuest(key) {
    try {
        const quests = await getAllQuests()
        if (quests !== null && quests.length > 0) {
            const quest = quests.filter((quest) => {
                quest.id === key
            })
            console.log("FOUND QUEST: ", quest)
            return quest
        }
        return
    } catch (e) {
        console.error(`Error fetching quest: ${key}`, e)
    }
};

export async function getAllQuests() {
    try {
        const quests = await AsyncStorage.getItem('quests')
        if (quests) {
            console.log('QUESTS RETREIVED: ', quests)
            try {
                const parsed = JSON.parse(quests)
                console.log("PARSED: ", parsed)
                return parsed
            } catch (e) {
                console.error('Error parsing quests: ', e)
            }
            return
        } else {
            console.error('NO QUESTS TO RETREIVE')
            return []
        }
    } catch (e) {
        console.error('Error fetching quests: ', e)
    }
};

export function clearQuests() {
    try {
        AsyncStorage.removeItem('quests');
    } catch (e) {
        console.error('Error clearing data.', e)
    }
};

export function clearAllData() {
    AsyncStorage.clear()
}
