<template>
    <div>
        
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../images/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">Home</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">Chat</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">location</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">Phone</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">Setting</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">about</div></a></li>
            </ul> 
		</div>
        
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 450px;
}

.mint-swipe-item {
    &:nth-child(1){
        background-color:lightcoral;
    }
    &:nth-child(2){
        background-color:lightskyblue;
    }
    &:nth-child(3){
        background-color:lightgreen;
    }

    img {
        width: 100%;
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
</style>