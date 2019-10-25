import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import edit from './components/tabbar/edit.vue'
import share from './components/tabbar/share.vue'
import setting from './components/tabbar/setting.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/edit', component: edit},
        {path: '/share', component: share},
        {path: '/setting', component: setting},
        {path: '/home/newslist', component: newslist},
        {path: '/home/newsinfo/:id', component: newsinfo}
    ],
    linkActiveClass: 'active'
})

export default router