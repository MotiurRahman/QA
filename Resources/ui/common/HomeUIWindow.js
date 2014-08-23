function HomeUIWindow(title) {

	var func = require('/lib/functions');

	var self = func.createAppWindow(title);
	self.add(func.currstat());

	return self;

};

module.exports = HomeUIWindow;
