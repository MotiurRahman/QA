function SettingUIWindow(title) {

	var func = require('/lib/functions');

	var self = func.createAppWindow(title);

	self.add(func.meter());

	return self;

};

module.exports = SettingUIWindow;
