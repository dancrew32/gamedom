(function(global, game) {

	var EL = {};

	var TEXT = {
		loading: 'Loading'
	};

	var PLAYER = {
		type: 'human_a',
		rate: 4
	};

	function handleControlEnter(e) {
		var tar = $(e.currentTarget);
		game.EVENT.trigger('controlEnter', { 
			action: tar.data('action'),
			entity: game.ENTITY.player
		});
	}

	function handleControlExit(e) {
		var tar = $(e.currentTarget);
		game.EVENT.trigger('controlExit', { 
			action: tar.data('action'),
			entity: game.ENTITY.player
		});
	}

	function handleMovement() {
		game.move(game.ENTITY.player, PLAYER.rate);
	}

	function gameReset() {
		game.center(game.ENTITY.player);
	}

	function addEventListeners() {
		EL.control.on('mousedown touchstart touchhold', 'span', handleControlEnter);
		EL.control.on('mouseup touchend', 'span', handleControlExit);
		game.EVENT.on('controlEnter', game.HANDLE.controlEnter);
		game.EVENT.on('controlExit', game.HANDLE.controlExit);
		EL.win.on('keydown keyup', game.HANDLE.keyEvent);

		setInterval(handleMovement, 20);
	}

	function init() {
		EL.win             = $(window);
		EL.control         = $('#controls');
		game.CANVAS        = $('#game');
		game.ENTITY.player = $('#you');
		addEventListeners();
		gameReset();
	}

	$(init);

}(window, G));
