//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './app.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router.js';

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})