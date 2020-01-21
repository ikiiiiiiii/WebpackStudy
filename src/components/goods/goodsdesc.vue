<template>
    <div>
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {}
        };
    },
    created() {
        this.getGoodsDesc();
    },
    methods: {
        getGoodsDesc() {
            this.$http.get("api/goods/getdesc/" + this.$route.params.id).then(result => {
                if(result.body.status === 0){
                    this.info = result.body.message[0];
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>