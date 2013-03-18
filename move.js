(function(g) {

	g.place = function(el, x, y) {
		el.css({
			left: x,
			top: y
		});
	};

	g.center = function(el, where) {
		var c = g.CANVAS;
		var ew = el.width() / 2;
		var eh = el.height() / 2;
		var w = (c.width() / 2) - ew;
		var h = (c.height() / 2) - eh;
		g.place(el, w, h);
	};

	g.dimensions = function() {
		return {
			w: g.CANVAS.width(),
			h: g.CANVAS.height()
		};
	};

	g.edim = function(el) {
		return {
			w: el.width(),	
			h: el.height()
		};
	};

	g.move = function(el, speed) {
		var pos = el.position();
		var l = pos.left;
		var t = pos.top;

		if (el.hasClass('w_r'))
			l += speed;	
		if (el.hasClass('w_l'))
			l -= speed;	
		if (el.hasClass('w_b'))
			t -= speed;	
		if (el.hasClass('w_f'))
			t += speed;	

		var c = g.dimensions();
		var e = g.edim(el);
		// br
		if (l > (c.w - e.w))
			l = l - (l - (c.w - e.w));
		if (t > (c.h - e.h))
			t = t - (t - (c.h - e.h));
		// tl
		if (l < 0)
			l = 0;
		if (t < 0)
			t = 0

		el.css({
			left: l,
			top: t
		});
	};
}(G));
