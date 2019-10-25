<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link class="mui-navigate-right" :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4>{{ item.title }}</h4>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{ item.add_time | dataFormat }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            newslist: []
        };
    },
    created() {
        this.getNewsList();
    },
    methods:{
        getNewsList() {
            this.$http.get('api/getnewsList').then(result => {
                if (result.body.status === 0){
                    this.newslist = result.body.message;
                }else{
                    Toast("获取新闻列表失败！");
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
}
</style>