import uuid from 'react-native-uuid';
import { EMPTY_QUEST, QUEST_KEY_PREFIX } from '../constants';

export function keyGenerator(prefix) {
    return prefix + uuid.v4()
}

export const DEBUG_QUEST = () => {
    let quest = EMPTY_QUEST
    quest.id = keyGenerator(QUEST_KEY_PREFIX)
    quest.name = 'DEBUG QUEST ' + Math.floor(Math.random() * 1001)
    quest.stages = [
        { name: 'DEBUG STAGE 1', isComplete: false, order: 0 },
        { name: 'DEBUG STAGE 2', isComplete: false, order: 1 },
        { name: 'DEBUG STAGE 3', isComplete: false, order: 2 }
    ]
    quest.timeStamp = Date.now()
    return quest
}