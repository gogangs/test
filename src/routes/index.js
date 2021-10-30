import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsView from '../views/NewsView';
import JobsView from '../views/JobsView';
import AskView from '../views/AskView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';
// import CreateListView from '../views/CreateListView';
import bus from '../utils/bus.js'
import { store } from '../store/index.js';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/news'
        }, {
            path:'/news',
            name:'news',
            component:NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then( () => {
                  next();
                  console.log(from);
                })
                .catch((error)=>{
                  console.log(error);
                  
                });
            }
            // component:CreateListView('NewsView') //NewsView
        }, {
            path:'/ask',
            name:'ask',
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then( () => {
                  next();
                  console.log(from);
                })
                .catch((error)=>{
                  console.log(error);
                });
            },
            component:AskView
            // component:CreateListView('AskView') //AskView
        }, {
            path:'/jobs',
            name:'jobs',
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then( () => {
                  next();
                  console.log(from);
                })
                .catch((error)=>{
                  console.log(error);
                });
            },
            component:JobsView
            // component:CreateListView('JobsView') //JobsView
        }, {
            path:'/item/:id',
            name:'item',
            component:ItemView
        }, {
            path:'/user/:id',
            name:'user',
            component:UserView
        }
    ]
});