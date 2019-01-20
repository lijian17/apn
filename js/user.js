(function() {
	function queryUserList() {
		sendToRemote("user/queryUserList", null, queryUserList_success);
	}

	function queryUserList_success(data) {
		console.log(data);
		if(data && data.status == 200) {
			var tbody;
			for(var i = 0; i < data.data.length; i++) {
				tbody += '<tr>';

				tbody += '<td align="center">';
				if(data.data[i].online) {
					tbody += '<img src="image/user-online.png" />';
				} else {
					tbody += '<img src="image/user-offline.png" />';
				}
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].username;
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].name || "";
				tbody += '</td>';

				tbody += '<td>';
				tbody += data.data[i].email || "";
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
		//$('#tableList').tablesorter( {sortList: [[0,0], [1,0]]} );
		//$('table tr:nth-child(odd)').addClass('odd');
		$('table tr:nth-child(even)').addClass('even');
	}

	function init() {
		queryUserList();
	}
	init();
})();