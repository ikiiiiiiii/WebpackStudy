<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newinfo.add_time | dataFormat }}</span>
            <span>点击：{{ newinfo.click }}</span>
        </p>

        <hr/>

        <div class="content" v-html="newinfo.content"></div>

        <comment-box :id="this.id"></comment-box>

    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
    data(){
        return {
            id: this.$route.params.id,
            newinfo: {}
        };
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.$http.get('api/getnew/' + this.id).then(result => {
                if(result.body.status === 0){
                    this.newinfo = result.body.message[0];
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components: {
        "comment-box": comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 2%;
    .title{
        font-size: 18px;
        text-align: center;
        margin: 15px 0;
        color: darkred;
    }
    .subtitle{
        font-size: 13px;
        color: darkcyan;
        display: flex;
        justify-content: space-between;
    }
}
</style>