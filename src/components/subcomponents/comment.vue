<template>
    <div class="container">
        <br/>
        <h4>发表评论</h4>
        <hr/>
        <textarea placeholder="请输入要BB的内容" maxlength="120" v-model="msg"></textarea>
        <mt-button class="button1" type="primary" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_tiem">
                <div class="cmt-title">
                    <div class="row">
                        <div class="col1">第{{ i + 1 }}楼</div>
                        <div class="col2">用户：{{ item.user_name }}</div>
                        <div class="col3">发表时间：{{ item.add_time | dataFormat }}</div>
                    </div>
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户评论尚在审核！' : item.content }}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data() {
        return {
            pageIndex: 1,
            comments: [],
            msg: ''
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            this.$http.get("api/getcomments/"+ this.id + "?pageindex=" + this.pageIndex)
            .then(result => {
                if (result.body.status === 0){
                    this.comments = this.comments.concat( result.body.message );
                }else{
                    Toast('获取评论失败！')
                }
            });
        },
        getMore() {
            this.pageIndex++;
            this.getComments();
        },
        postComment() {
            if(this.msg.trim().length === 0) return Toast("评论内容不能为空！");
            this.$http
                .post('api/postcomment/' + this.$route.params.id, {
                    content:this.msg.trim()
                })
                .then(function(result) {
                    if(result.body.status === 0) {
                        var cmt = {
                            user_name: "匿名用户",
                            add_tiem: Date.now(),
                            content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = "";
                    }
                })
        }
    },
    props: ['id']
}
</script>

<style lang="scss" scoped>
.container {
    padding-right: 7.5%;
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .button1 {
        float: right;
        margin-bottom: 5px;
    }
    .cmt-list {
        clear: both;
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color:lightgray;
                .row{
                    display: flex;
                    justify-content: space-between;
                }
            }
            .cmt-body {
                line-height: 30px;
                text-indent: 2em;
            }
        }
    }
}
</style>