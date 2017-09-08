(function() {
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/
	var noopfn = function() {
	};
	var noopnullfn = function() {
		return null;
	};
	//
	var Tracker = function() {
	};
	var p = Tracker.prototype;
	p.get = noopfn;
	p.set = noopfn;
	p.send = noopfn;
	//
	var gaName = window.GoogleAnalyticsObject || 'ga';
	var ga = function() {
		var len = arguments.length;
		if ( len === 0 ) {
			return;
		}
		var f = arguments[len-1];
		if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
			return;
		}
		try {
			f.hitCallback();
		} catch (ex) {
		}
	};
	ga.create = function() {
		return new Tracker();
	};
	ga.getByName = noopnullfn;
	ga.getAll = function() {
		return [];
	};
	ga.remove = noopfn;
	window[gaName] = ga;
})();