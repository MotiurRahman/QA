//Application Window Component Constructor
function ApplicationWindow() {
	var fl = require('lib/functions');

	var self = fl.createAppWindow(L('my_account'));

	var win1 = Titanium.UI.iOS.createNavigationWindow({
		window : self,
	});

	return win1;
}

module.exports = ApplicationWindow;
