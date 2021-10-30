import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        asks:[],
        jobs:[],
        user_data:{},
        ask_data:{},
        list:[],
    },
    mutations,
    actions,
    getters:{
        fetchedAsk(state){
            return state.asks;
        }
    }
})