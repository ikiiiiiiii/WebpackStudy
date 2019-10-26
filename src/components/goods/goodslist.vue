<template>
    <div class="goods-list">

        <div class="goods-item">
            <img src="../../images/picture.jpg">
            <h1 class="title">东方</h1>
            <div class="info">
                <p class="price">
                    <span class="now">2199</span>
                    <span class="old">2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="../../images/picture.jpg">
            <h1 class="title">东方</h1>
            <div class="info">
                <p class="price">
                    <span class="now">2199</span>
                    <span class="old">2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余</span>
                </p>
            </div>
        </div>

        <div class="goods-item">
            <img src="../../images/picture.jpg">
            <h1 class="title">东方</h1>
            <div class="info">
                <p class="price">
                    <span class="now">2199</span>
                    <span class="old">2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;

    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 8px 0;
        padding: 2px;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;

        img {
            width: 100%;
        }
        .title {
            font-size: 30px;
        }
        .info {
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 24px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 16px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>