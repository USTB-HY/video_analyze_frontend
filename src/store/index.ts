import { createStore, Mutation, Store, MutationTree} from 'vuex'
import { userVuex } from "./user";
export interface settingState {
    themeColor : string   
}

export const store = createStore<settingState>({
    state: {
        themeColor: 'sunny'
    },
    mutations : {
        settingTheme(state, val: boolean) {
            state.themeColor = val? 'dark' : 'sunny'
        }
    },
    modules: {
        user: userVuex,
    }
})