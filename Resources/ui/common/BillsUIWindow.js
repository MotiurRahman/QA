function BillsUIWindow(title, data) {

	var func = require('/lib/functions');

	var self = func.createAppWindow1(title);
	
	var userinfo = Ti.App.Properties.getString('userinfo');
	userinfo = JSON.parse(userinfo);
	
	data.user = userinfo.user;
	
	
	self.add(func.billsuiwin(data));

	return self;

};

module.exports = BillsUIWindow;
