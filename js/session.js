(function() {
	function queryUserList() {
		sendToRemote("user/queryUserList", null, queryUserList_success);
	}
	
	function queryUserList_success(data) {
		console.log(data);
		if(data && data.status == 200) {
			var tbody;
			for (var i = 0; i < data.data.length; i++) {
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
				tbody += '<img src="image/user-Online.png" />';
				tbody += data.data[i].presence || "";
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
		queryUserList();
	}
	init();
})();