import { hookstate, useHookstate } from '@hookstate/core';
const state = hookstate([])

export function useQuestsState() {    
    return useHookstate(state)
}