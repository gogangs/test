import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

function fetcNewsList(){
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetcAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetcJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetcUserData(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetcAskData(userid){
    return axios.get(`${config.baseUrl}item/${userid}.json`);
}

function fetcList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export { fetcNewsList, fetcAskList, fetcJobsList, fetcUserData, fetcAskData, fetcList }