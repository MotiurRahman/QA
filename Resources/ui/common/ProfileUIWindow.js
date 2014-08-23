function ProfileUIWindow(title) {

	var func = require('/lib/functions');

	var self = func.createAppWindow(title);
	self.add(func.profile());

	// Create a Button.
	var Logout = Ti.UI.createButton({
		title : 'Logout',

	});

	// Listen for click events.
	Logout.addEventListener('click', function() {

		Ti.App.fireEvent('app:logout');
	});

	// Add to the parent view.

	if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad')
		self.setRightNavButton(Logout);

	return self;

};

module.exports = ProfileUIWindow;
