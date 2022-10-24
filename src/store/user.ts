import { settingState } from "."
import { Module } from 'vuex'
import { User } from "../interface/user";

export const userVuex: Module<User,settingState> = {
    state: {
        name: '',
        email: '',
        uid: '',
        avater:'',
        exp: 0,
    },

    mutations: {
        setUser(state, result : any) {
            state.name = result.name
            state.email = result.email
            state.uid = result.uid
            state.avater = result.avater
            state.exp = result.exp
        },
        removeUserInfo(state) {
            state.name = ''
            state.email = ''
            state.uid = ''
            state.avater = ''
            state.exp = 0
        }
    }, 
} 

// export const userVuex = {
//     state: {
//         name: '',
//         email: '',
//         uid: '',
//         avater:'',
//         exp: 0,
//     },

//     action: {
        
//     },

//     mutations: {
//         setUser(state : State, result : any) {
//             state.user.name = result.name
//             state.user.email = result.email
//             state.user.uid = result.uid
//             state.user.avater = result.avater
//             state.user.exp = result.exp
//         },
//         removeUserInfo(state : State) {
//             state.user.name = ''
//             state.user.email = ''
//             state.user.uid = ''
//             state.user.avater = ''
//             state.user.exp = 0
//         }
//     }, 
// } 