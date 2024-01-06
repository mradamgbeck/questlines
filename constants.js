import {keyGenerator} from './lib/generators.js'

export const QUEST_KEY_PREFIX = 'quest-'
export const DEBUG_QUEST = {
    id: keyGenerator(QUEST_KEY_PREFIX),
    name: 'DEBUG QUEST ' + Math.floor(Math.random() * 101),
    stages: [
        { name: 'DEBUG STAGE 1' },
        { name: 'DEBUG STAGE 2' },
        { name: 'DEBUG STAGE 3' }
    ]
}