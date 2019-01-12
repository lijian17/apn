(function() {
	/**
	 * 向服务器进行通信
	 * @param {Object} method 具体的业务方法
	 * @param {Object} param json格式请求参数
	 * @param {Object} callBack 成功回调
	 * @param {Object} errCallBack 失败回调
	 */
	function sendToRemote(method, param, callBack, errCallBack) {
		$.ajax({
			url: global_info.getConfig().baseUrl + method,
			data: "get",
			dataType: "json",
			data: param,
			success: function(data) {
				console.log("success:" + JSON.stringify(data));
				callBack(data);
			},
			error: function(jqXHR) {
				console.log("error:" + jqXHR);
				if(typeof errCallBack == "function") {
					errCallBack(jqXHR);
				}
			}
		});
	}
	window.sendToRemote = sendToRemote;
})();