import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeQuest(dataAsString) {
    try {
        const quests = await AsyncStorage.getItem('quests');
        if (quests) {
            console.log('GOT QUESTS', quests[0])
            await AsyncStorage.mergeItem('quests', JSON.stringify(quests.push(dataAsString)));
            printAllKeys();
        } else {
            await AsyncStorage.setItem('quests', JSON.stringify([dataAsString]))
            printAllKeys();
        }
    } catch (e) {
        console.log('Error storing data.', e)
    }
}

export async function getQuest(key) {
    try {
        const quests = await AsyncStorage.getItem('quests');
        if (quests !== null) {
            quests = JSON.parse(quests)
            const quest = quests.filter((quest) => {
                quest.id === key
            })
            printAllKeys();
            return quest
        }
    } catch (e) {
        console.log(`Error fetching quest: ${key}`, e)
    }
};

export async function getAllQuests() {
    try {
        const quests = await AsyncStorage.getItem('quests');
        if (quests) {
            console.log('quests key is not null', quests)
            printAllKeys();
            return JSON.parse(quests)
        } else {
            console.log('quests key is null')
            const defaultQuests = [{ id: 0, name: 'default' }];
            printAllKeys();
            return defaultQuests
        }
    } catch (e) {
        console.log('Error fetching quests: ', e)
    }
};

export async function clearQuests() {
    try {
        const value = await AsyncStorage.removeItem('quests');
        printAllKeys();
    } catch (e) {
        console.log('Error clearing data.', e)
    }
};

export async function clearAllData() {
    await AsyncStorage.clear()
    printAllKeys();
}

function printAllKeys() {
    console.log('ALL KEYS: ', AsyncStorage.getAllKeys());
}