(function() {
	var version = "0.0.1"; // 版本号

	// 服务器地址
	var config = {
		baseUrl: "http://localhost/"
	};

	var global_info = {
		getVersion: function() {
			return version;
		},

		getConfig: function() {
			return config;
		}
	};
	window.global_info = global_info;
})();