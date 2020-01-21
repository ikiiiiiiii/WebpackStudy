<template>
    <div class="app-container">

        <!-- 顶部区域 -->
        <div class="top">
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	        <div class="container-fluid">
	            <div class="navbar-header top2">
		            <a class="navbar-brand" href="#">这是一个导航栏</a>
	            </div>
	        </div>
        </nav>
		</div>


	<!-- 中间 路由 区域 -->
	<transition>
		<router-view></router-view>
	</transition>

        <!-- 侧边栏区域 -->
	<div class="left">
		<ul class="nav nav-pills nav-stacked">
            <li>
				<router-link to="/home">
					<span class="glyphicon glyphicon-star"></span><br/>首页
				</router-link>
			</li>
            <li>
				<router-link to="/edit">
					<span class="glyphicon glyphicon-edit"></span><br/>编辑
				</router-link>
			</li>
            <li>
				<router-link to="/share">
					<span class="glyphicon glyphicon-share"></span><br/>分享
					<span class="badge" id="badge">0</span>
				</router-link>
			</li>
            <li>
				<router-link to="/setting">
					<span class="glyphicon glyphicon-cog"></span><br/>设置
				</router-link>
			</li>
        </ul>
	</div>
	
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
/* 修改导航栏高度 */
.top .navbar {
    min-height:80px;
}
.top2 .navbar-brand {
    padding-top:30px ; 
    padding-bottom:0 ;
	font-size: 25px;
}

/* 防止导航栏遮住页面内容 */
.app-container{
	position: relative;
	padding-top: 80px;
	padding-left: 120px;
	padding-bottom: 50px;
	overflow-x: hidden;
}

/* 左侧菜单栏样式 */
.left {
	position:fixed;
	top:80px;
	left:0;
	width:120px;
	height:100%;
	background-color:#373737;
	font-size: 16px;
	text-align: center;
	padding: 5px;
}
.nav li a{
	color:slateblue;
}
.nav li a:active{
	background-color: #ffffff;
	color:slateblue;
}
.nav li a:hover {
	background-color: darkslateblue;
	color: #ffffff;
}
body {
	background-color: #ffffff;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>