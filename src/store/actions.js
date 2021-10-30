
import { fetcNewsList, fetcAskList, fetcJobsList, fetcUserData, fetcAskData, fetcList } from '../api/index';

export default {
    FETCH_NEWS(context){
        return fetcNewsList()
        .then(response => {
            context.commit('SET_NEWS', response.data)
            return response;
        })
        .catch(error => console.log(error))
    },
    FETCH_JOBS(context){
        return fetcJobsList()
        .then(response => {
            context.commit('SET_JOBS', response.data)
            return response;
        })
        .catch(error => console.log(error))
    },
    FETCH_ASKS({commit}){
        return fetcAskList()
        .then(response => {
            commit('SET_ASKS', response.data)
            return response;
        })
        .catch(error => console.log(error))
    },
    FETCH_USER_INFO({commit}, data){
        return fetcUserData(data)
        .then(response => {
            commit('SET_USER_DATA', response.data)
            return response;
        })
        .catch(error => console.log(error))
    },
    FETCH_ASK_INFO({commit}, data){
        return fetcAskData(data)
        .then(response => {
            commit('SET_ASK_DATA', response.data)
            return response;
        })
        .catch(error => console.log(error))
    },
    async FETCH_LIST({commit}, name){
        try {
            const response = await fetcList(name);
            commit('SET_LIST', response.data);
            return response;
        } catch(error){
            console.log(error)
        }
        // return await fetcList(name)
        // .then(response => {
        //     commit('SET_LIST', response.data)
        //     return response;
        // })
        // .catch(error => console.log(error))
    },
}