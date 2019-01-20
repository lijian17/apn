(function() {
	function querySessionList() {
		sendToRemote("session/querySessionList", null, querySessionList_success);
	}

	function querySessionList_success(data) {
		console.log(data);
		if(data && data.status == 200) {
			var tbody;
			for(var i = 0; i < data.data.length; i++) {
				tbody += '<tr>';

				tbody += '<td>';
				tbody += data.data[i].username;
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].resource || "";
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].status || "";
				tbody += '</td>';

				tbody += '<td>';
				var presence = data.data[i].presence;
				if(presence == "Offline"){
					tbody += '<img src="image/user-offline.png" />';
					presence = "离线";
				} else if (presence == "Online") {
					tbody += '<img src="image/user-online.png" />';
					presence = "在线";
				} else if (presence == "Away") {
					tbody += '<img src="image/user-away.png" />';
					presence = "离开";
				} else if (presence == "Chat") {
					tbody += '<img src="image/user-Online.png" />';
					presence = "聊天";
				} else if (presence == "Do Not Disturb") {
					tbody += '<img src="image/user-Online.png" />';
					presence = "请勿打扰";
				} else if (presence == "eXtended Away") {
					tbody += '<img src="image/user-busy.png" />';
					presence = "忙碌";
				} else if (presence == "Unknown") {
					tbody += '<img src="image/user-Online.png" />';
					presence = "未知";
				} else{
					tbody += '<img src="image/user-Online.png" />';
					presence = "未知";
				}
				tbody += presence;
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].clientIP || "";
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].createdDate;
				tbody += '</td>';

				tbody += '</tr>';
			}
			$('#tableList tbody').html(tbody);
		}
		tablesorter();
	}

	function tablesorter() {
		$('#tableList').tablesorter();
		$('table tr:nth-child(even)').addClass('even');
	}

	function init() {
		querySessionList();
	}
	init();
})();