<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
		</view>
		<view v-for="(v,i) in orders" >
			<view class="order_info">
				<view>{{v.student_name}}</view>
				<view>{{v.order_date}}</view>
				<view>{{v.time}}</view>
				<view>{{v.active_type}}</view>
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
	}
</style>