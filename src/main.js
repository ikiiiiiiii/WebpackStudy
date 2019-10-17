//入口文件
import Vue from 'vue'

import app from './app.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})