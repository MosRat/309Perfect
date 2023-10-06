Date.prototype.format = function(format) {
	/*
	 * eg:format="YYYY-MM-dd hh:mm:ss";

	 */
	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"h+": this.getHours(), // hour
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds()
		// millisecond
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
			.substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
				("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

const base_url = "https://api.huolihang.top:5002/api/"
const headers = {
	'Host': 'api.huolihang.top:5002',
	'referer': 'https://servicewechat.com/wx304e039a0a6047b6/16/page-frame.html',
	'xweb_xhr': '1',
	'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6762',
	'Content-Type': 'application/x-www-form-urlencoded',
	'Accept': '*/*',
	'Sec-Fetch-Site': 'cross-site',
	'Sec-Fetch-Mode': 'cors',
	'Sec-Fetch-Dest': 'empty',
	'Accept-Language': 'zh-CN,zh',
}
// console.log(new Date("2014-07-10 10:21:12").format("yyyy-MM-dd"))
const _time = new Date()
const format_time = _time.format("yyyy-MM-dd")



const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url + options.url,
			method: options.method || "GET",
			data: options.data || {},
			header: headers,
			dataType: 'json',
			success(res) {
				resolve(res);
			},
			fail(error) {
				reject(error);
			}
		})

	})

}

const get_order_info = async () => {
	let res = await request({
		url: "date-order-info/" + format_time
	})
	return res.data;
}

const get_self_info = async (username) => {
	let res = await request({
		url: "order-info/" + username
	})
	return res.data;
}

const make_del = async (del_id) => {
	let res = await request({
		url: "delete-order" + del_id
	})
	return res.data;
}

const make_order = async (info) => {
	let res = await request({
		url: "order-room",
		method:"POST",
		data:info
	})
	return res.data;
}

export const requests =  {
	get_order_info,
	get_self_info,
	make_del,
	make_order,
	request
};