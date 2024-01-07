import * as _ from 'lodash'
import * as store from './localStorage'

export const makeFirstStageActive = (quest) => {
    quest.stages.map((stage, index) => {
        if (index > 0) stage.isActive = false
        stage.isActive = true
    })
    return quest
}

export const forceOnlyActiveQuest = async (newActiveQuestId) => {
    let newQuests = _.cloneDeep(await store.getAllQuests())
    return newQuests.map((quest) => {
        if (quest.id !== newActiveQuestId) {
            quest.isActive = false
        }
    })
}

export const getActiveQuest = async () => {
    const allQuests = await store.getAllQuests()
    const activeQuests = allquests.filter((quest) => {
        return quest.isActive
    })
    if(activeQuests.length > 0){
        return activeQuests[0]
    }
}