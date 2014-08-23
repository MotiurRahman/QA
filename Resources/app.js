if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

(function() {

	var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	var network = require('/lib/networks');
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));

	var func = require('/lib/functions');

	var self = func.createAppWindow('');
	self.layout = 'horizontal';
	self.fullscreen = true;

	self.add(func.user_login(self));
	if (osname === 'iphone' || osname === 'ipad') {
		self.open();
	} else {
		self.open();
	}
	/*var data = {
	 user : 'sinepulse',
	 pass : '123456',
	 motiur rahman
	 };*/

	var userinfo = JSON.parse(Ti.App.Properties.getString('userinfo'));
	Ti.API.info('userinfo' + userinfo);

	if ( userinfo instanceof Object && userinfo.user) {


	/*	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
		var theTabGroup = new ApplicationTabGroup();
		if (osname === 'iphone' || osname === 'ipad') {
			theTabGroup.open();
		} else {
			theTabGroup.open();
		}
		network.login(function(e) {
			if (e == 'true') {
				var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

				var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
				var theTabGroup = new ApplicationTabGroup();
				if (osname === 'iphone' || osname === 'ipad') {
					theTabGroup.open({
						transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
					});
				} else {
					theTabGroup.open();
				}
				//mainwin.close();
			} else {
				Ti.App.Properties.setString('userinfo', JSON.stringify({}));
				statusmsg.text = L('check_username_pass');
			}
		}, userinfo);*/
	}
})();
