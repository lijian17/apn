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
				tbody += '<img src="image/user-offline.png" />';
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
	}

	function broadcastClick() {
		$('input[name=broadcast]').click(function() {
			if($('input[name=broadcast]')[0].checked) {
				$('#trUsername').hide();
				$('#trAlias').hide();
				$('#trTag').hide();
			} else if($('input[name=broadcast]')[1].checked) {
				$('#trUsername').show();
				$('#trAlias').hide();
				$('#trTag').hide();
			} else if($('input[name=broadcast]')[2].checked) {
				$('#trUsername').hide();
				$('#trAlias').show();
				$('#trTag').hide();
			} else if($('input[name=broadcast]')[3].checked) {
				$('#trUsername').hide();
				$('#trAlias').hide();
				$('#trTag').show();
			}
		});

		if($('input[name=broadcast]')[0].checked) {
			$('#trUsername').hide();
			$('#trAlias').hide();
			$('#trTag').hide();
		} else if($('input[name=broadcast]')[1].checked) {
			$('#trUsername').show();
			$('#trAlias').hide();
			$('#trTag').hide();
		} else if($('input[name=broadcast]')[2].checked) {
			$('#trUsername').hide();
			$('#trAlias').show();
			$('#trTag').hide();
		} else if($('input[name=broadcast]')[3].checked) {
			$('#trUsername').hide();
			$('#trAlias').hide();
			$('#trTag').show();
		}
	}

	function init() {
		broadcastClick();
		queryUserList();
	}
	init();
})();