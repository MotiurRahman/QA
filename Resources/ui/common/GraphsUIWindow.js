function GraphsUIWindow(title, data) {

	var func = require('/lib/functions');

	if (data.type == 'month')
		title = title;
	var self = func.createAppWindow1(title);

	var userinfo = Ti.App.Properties.getString('userinfo');
	userinfo = JSON.parse(userinfo);

	data.user = userinfo.user;

	self.add(func.graphsuiwin(data));

	return self;

};

module.exports = GraphsUIWindow;
