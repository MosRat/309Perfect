<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
		</view>
		<view v-for="(v,i) in orders" >
			<view class="order_info">
				<view class="order_bar">{{v.student_name}}</view>
				<view class="order_bar">{{v.order_date}}</view>
				<view class="order_bar">{{v.time}}</view>
				<view class="order_bar">{{v.active_type}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Wx',
				orders:{}
			}
		},
		onLoad() {
			this.$r.get_order_info().then(res => {
				this.orders = res.res.Orders
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.order_info{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.order_bar{
		text-align: center;
		margin: 5px;
		padding: 2px;
		border: #8f8f94;
		
	}
</style>