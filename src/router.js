import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import edit from './components/tabbar/edit.vue'
import share from './components/tabbar/share.vue'
import setting from './components/tabbar/setting.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/phtots/photolist.vue'
import photoinfo from './components/phtots/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/edit', component: edit},
        {path: '/share', component: share},
        {path: '/setting', component: setting},
        {path: '/home/newslist', component: newslist},
        {path: '/home/newsinfo/:id', component: newsinfo},
        {path: '/home/photolist', component: photolist},
        {path: '/home/photoinfo/:id', component: photoinfo},
        {path: '/home/goodslist', component: goodslist},
        {path: '/home/goodsinfo/:id', component: goodsinfo},
        {path: '/home/goodsdesc/:id', component: goodsdesc, name: 'goodsdesc'},
        {path: '/home/goodscomment/:id', component: goodscomment, name: 'goodscomment'}
    ],
    linkActiveClass: 'active'
})

export default router