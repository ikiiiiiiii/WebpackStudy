<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
            <img :src="item.img" alt="" :class="{'full': isfull}">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    props: ["lunbotuList"]
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 450px;
}

.mint-swipe-item {
    text-align: center;
    img {
        // width: 100%;
        height: 100%;
    }
}

.mui-grid-view.mui-grid-9 {
    background-color: #ffffff;
    border: none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}

.full{
    width: 100%;
}
</style>