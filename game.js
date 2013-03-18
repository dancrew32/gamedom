var G = {};
(function() {
	G.HANDLE = {};
	G.ENTITY = {};
	G.HANDLE.keyEvent = function(e) {
		var type = e.type === 'keydown' ? 'Enter' : 'Exit';
		var method = 'control'+ type;
		var action = false;
		switch (e.which) {
			case 87:
				action = 'up';
			break;
			case 83:
				action = 'down';
			break;
			case 65:
				action = 'left';
			break;
			case 68:
				action = 'right';
			break;
		}
		if (!action) return;
		G.EVENT.trigger(method, { 
			action: action,
			entity: G.ENTITY.player
		});
	};

	G.HANDLE.controlExit = function(e, data) {
		switch (data.action) {
			case 'up':
				data.entity.removeClass('w_b');
			break;
			case 'down':
				data.entity.removeClass('w_f');
			break;
			case 'left':
				data.entity.removeClass('w_l');
			break;
			case 'right':
				data.entity.removeClass('w_r');
			break;
		}
	};

	G.HANDLE.controlEnter = function(e, data) {
		var cls = '';
		switch (data.action) {
			case 'up':
				cls += 'w_b ';
			break;
			case 'down':
				cls += 'w_f ';
			break;
			case 'left':
				cls += 'w_l ';
			break;
			case 'right':
				cls += 'w_r ';
			break;
		}
		data.entity.addClass(cls);
	};

	$(function() {
		G.EVENT = $('<div/>');
	});
}());
