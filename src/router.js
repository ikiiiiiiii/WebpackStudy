import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import edit from './components/tabbar/edit.vue'
import share from './components/tabbar/share.vue'
import setting from './components/tabbar/setting.vue'

var router = new VueRouter({
    routes: [
        {path: '/home', component: home},
        {path: '/edit', component: edit},
        {path: '/share', component: share},
        {path: '/setting', component: setting}
    ],
    linkActiveClass: 'active'
})

export default router