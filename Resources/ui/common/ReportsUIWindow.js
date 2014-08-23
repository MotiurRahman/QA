function ReportsUIWindow(title) {

	var func = require('/lib/functions');

	var self = func.createAppWindow(title);
	
	
	
	self.add(func.reports(self));
	return self;

};

module.exports = ReportsUIWindow;
