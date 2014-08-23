var network = require('/lib/networks');

exports.createAppWindow = function(title) {

	var win = Ti.UI.createWindow({
		title : title,
		layout : 'vertical',
		navBarHidden : Ti.Platform.osname === 'android' ? true : false,
		width : Ti.UI.FILL,
		fullscreen : false,
		height : Ti.UI.FILL,
		barColor : '#28af78', // '#6d0a0c',
		backgroundColor : '#fff',
		backgroundImage : '/images/background.png',
		exitOnClose : true,
	});

	return win;
};

exports.createAppWindow1 = function(title) {

	var win = Ti.UI.createWindow({
		title : title,
		layout : 'vertical',
		navBarHidden : Ti.Platform.osname === 'android' ? true : false,
		width : Ti.UI.FILL,
		fullscreen : false,
		height : Ti.UI.FILL,
		barColor : '#28af78', // '#6d0a0c'
		backgroundColor : '#fff',
		backgroundImage : '/images/background.png',
		exitOnClose : false,
	});

	return win;
};

exports.in_array = function(array, id) {

	for (var i = 0; i < array.length; i++) {

		if (array[i] == id) {

			return true;
		}
	}
	return false;
};

function array_key(array, val) {

	for (var i = 0; i < array.length; i++) {
		Ti.API.info('array[i] == val' + array[i] + ' ==' + val);
		if (array[i] == val) {

			return i;
		}
	}
	return 0;
};
function getMyDate(str) {
	var ar = str.match(/\((.*?)\)/);

	var date = new Date(parseInt(ar[1]));
	return String.formatDate(date, 'long');
};
exports.getMyDate = getMyDate;

function getMyDateMedium(str) {
	var ar = str.match(/\((.*?)\)/);

	var date = new Date(parseInt(ar[1]));
	return String.formatDate(date, 'medium');
};

function geCreateYear(str) {
	var ar = str.match(/\((.*?)\)/);

	var date = new Date(parseInt(ar[1]));
	return date.getFullYear();
}

function getMyTime(str) {
	var ar = str.match(/\((.*?)\)/);

	var date = new Date(parseInt(ar[1]));
	return String.formatTime(date);
};

function getMyLocalDate(str) {

	Ti.API.info('str' + str);
	var date = new Date(str);
	return String.formatDate(date, 'long');
};
exports.getMyDate = getMyDate;

function getDate(str) {
	var ar = str.match(/\((.*?)\)/);

	var date = new Date(parseInt(ar[1]));

	Ti.API.info('date' + date.getMonth());
	Ti.API.info(ar[1] + '  ' + String.formatDate(date, 'long'));

	return monthNameLet(date.getMonth()) + ', ' + date.getFullYear();
};
monthNameLet = function(e) {
	e = parseInt(e, 10);

	switch ((e+1)) {
	case 1:
		e = 'January';
		break;
	case 2:
		e = 'February';
		break;
	case 3:
		e = 'March';
		break;
	case 4:
		e = 'April';
		break;

	case 5:
		e = 'May';
		break;
	case 6:
		e = 'June';
		break;
	case 7:
		e = 'July';
		break;
	case 8:
		e = 'August';
		break;
	case 9:
		e = 'September';
		break;
	case 10:
		e = 'October';
		break;
	case 11:
		e = 'November';
		break;
	case 12:
		e = 'December';
		break;
	} ;

	return e;
};
exports.user_login = function(mainwin) {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		center : {
			x : '50%',
			y : '50%',
		},
		scrollType: 'vertical',
	});

	var topView = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		//layout : 'horizontal',
		top : 10,
	});
	contenner.add(topView);
	var logo = Ti.UI.createImageView({
		image : '/images/logo.png',
		width : 120,
		center : {
			x : '50%',
			y : '50%',
		},
	});

	topView.add(logo);

	var statusBox = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		top : 20,
	});

	var statusmsg = Ti.UI.createLabel({
		color : '#ff0000',
		font : {
			fontSize : 16
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 0,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	});

	statusBox.add(statusmsg);

	contenner.add(statusBox);

	var inputbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		layout : 'vertical',

	});

	contenner.add(inputbox);

	var username = Ti.UI.createTextField({
		height : 55,
		paddingLeft : 10,
		top : 10,
		left : 10,
		right : 10,
		color : '#111',
		font : {
			fontSize : 14,

		},
		hintText : L('username'),
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_NEXT,
		autocapitalization : false,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	username.addEventListener('return', function(e) {
		username.blur();
		password.focus();
	});

	inputbox.add(username);

	var password = Ti.UI.createTextField({
		height : 55,
		paddingLeft : 10,
		top : 10,
		color : '#111',
		left : 10,
		right : 10,
		passwordMask : true,
		hintText : L('password'),
		font : {
			fontSize : 14,

		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_SEND,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	password.addEventListener('return', function(e) {
		password.blur();
	});
	if (Ti.Platform.osname === 'android') {
		username.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS;
		password.softKeyboardOnFocus = Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS;
	};
	inputbox.add(password);

	var loggin = Ti.UI.createButton({
		backgroundImage : '/images/login_btn.png',
		height : 130,
		width : 130,
		top : 10,
	});

	loggin.addEventListener('click', function() {

		if (Ti.Platform.osname === 'android') {
			var toast = Ti.UI.createNotification({
				message : "Loading...",
				duration : Ti.UI.NOTIFICATION_DURATION_LONG
			});
			toast.show();
		}
		var data = {
			user : username.value,
			pass : password.value,
		};

		Ti.API.info('data' + JSON.stringify(data));
		if (data.user && data.pass) {

			network.login(function(e) {
				if (e == 'true') {
					var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

					Ti.App.Properties.setString('userinfo', JSON.stringify(data));
					var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
					var theTabGroup = new ApplicationTabGroup();
					if (osname === 'iphone' || osname === 'ipad') {
						theTabGroup.open();
					} else {
						theTabGroup.open();
					}
					//mainwin.close();
				} else {
					Ti.App.Properties.setString('userinfo', JSON.stringify({}));
					statusmsg.text = L('check_username_pass');
				}
			}, data);

		} else {
			Ti.App.Properties.setString('userinfo', JSON.stringify({}));
			statusmsg.text = L('check_username_pass');
		}
	});

	inputbox.add(loggin);

	return contenner;
};

exports.currstat = function() {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		center : {
			x : '50%',
			y : '50%',
		},
		scrollType: 'vertical',
	});
	var currstatbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		top : 10,
		layout : 'vertical',
	});
	contenner.add(currstatbox);

	//currstatbox.add(contentTitle(L('user_stat')));
	var data = Ti.App.Properties.getString('userinfo');
	data = JSON.parse(data);
	var e = {};
	e.CurrUsage = 100;
	e.CurrBill = 100;
	e.DueBill = 100;
	e.MeterInfo = 100;
	e.CurrMonthReading = 100;

	network.currstat(function(e) {
/*	e.CurrUsage = 100;
	e.CurrBill = 100;
	e.DueBill = 100;
	e.MeterInfo = 100;
	e.CurrMonthReading = 100;*/
	currstatbox.add(CurrUsageViewRow(L('CurrUsage'), e.CurrUsage));
	currstatbox.add(ViewRow(L('CurrBill'), e.CurrBill));
	currstatbox.add(ViewRow(L('DueBill'), e.DueBill));
	currstatbox.add(ViewRow(L('MeterInfo'), e.MeterInfo));
	currstatbox.add(ViewRow(L('CurrMonthReading'), e.CurrMonthReading));

	}, data);

	/*	var profileTitleBox = Ti.UI.createView({
	 width : Ti.UI.FILL,
	 height : Ti.UI.SIZE,
	 top : 0,
	 backgroundColor : '#28af78',
	 layout : 'horizontal'
	 });

	 contenner.add(profileTitleBox);

	 var profilecontrol = Ti.UI.createImageView({
	 image : '/images/colp.png',
	 width : 30,
	 height : 30,
	 left : 5
	 });
	 var profileState = true;
	 profileTitleBox.addEventListener('click', function() {
	 if (profileState) {
	 profilebox.visible = true;
	 profilecontrol.image = '/images/expn.png';
	 } else {
	 profilebox.visible = false;
	 profilecontrol.image = '/images/colp.png';
	 }
	 profileState = !profileState;
	 });

	 profileTitleBox.add(profilecontrol);

	 var profileLabel = Ti.UI.createLabel({
	 text : L('user_profile'),
	 color : '#fff',
	 height : 40,
	 left : 5,
	 right : 5,
	 });

	 profileTitleBox.add(profileLabel);

	 var profilebox = Ti.UI.createView({
	 width : Ti.UI.FILL,
	 height : Ti.UI.SIZE,
	 top : 10,
	 visible : false,
	 });
	 contenner.add(profilebox);
	 profilebox.add(profile());
	 */
	return contenner;
};

function contentTitle(user_stat) {
	var currstatTitle = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		top : 0,
		backgroundColor : '#28af78',
	});

	var usagesLabel = Ti.UI.createLabel({
		text : user_stat,
		color : '#fff',
		height : 40,
		left : 5,
		right : 5,
	});

	currstatTitle.add(usagesLabel);
	return currstatTitle;
}

function CurrUsageViewRow(label, value) {
	var monthreadingbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		//layout : 'horizontal',
		top : 0,

	});

	var monthreadingLabel = Ti.UI.createLabel({
		text : label,
		color : '#000000',
		font : {
			fontSize : 16,
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		left : 10,
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	});

	monthreadingbox.add(monthreadingLabel);
	if ( typeof value === 'number') {
		value = parseFloat(value).toFixed(2);
	}
	var monthreadingValue = Ti.UI.createLabel({
		text : value,
		color : '#000000',
		font : {
			fontSize : 48,
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		right : 10,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
	});

	monthreadingbox.add(monthreadingValue);
	monthreadingbox.add(Ti.UI.createView({
		backgroundImage : '/images/border_bar.png',
		width : Ti.UI.FILL,
		height : 1,
		bottom : 1,
	}));
	/* */
	return monthreadingbox;
}

function SubViewRow(label, value) {
	var monthreadingbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		//layout : 'horizontal',
		top : 0,

	});

	var monthreadingLabel = Ti.UI.createLabel({
		text : label,
		color : '#000000',
		font : {
			fontSize : 13,
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		left : 20,
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	});

	monthreadingbox.add(monthreadingLabel);
	if ( typeof value === 'number') {
		value = parseFloat(value).toFixed(2);
	}
	var monthreadingValue = Ti.UI.createLabel({
		text : value,
		color : '#000000',
		font : {
			fontSize : 13,
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		right : 0,
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	});

	monthreadingbox.add(monthreadingValue);

	return monthreadingbox;
}

function ViewRow(label, value) {
	var monthreadingbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : 30,
		//layout : 'horizontal',
		top : 0,

	});

	var monthreadingLabel = Ti.UI.createLabel({
		text : label,
		color : '#000000',
		font : {
			fontSize : 16,
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		left : 10,
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	});
	Ti.API.info('value: ' + value);
	monthreadingbox.add(monthreadingLabel);
	if ( typeof value === 'number') {
		value = parseFloat(value).toFixed(2);
	} else if (value === 'null' || value === 'undefined') {
		value = '';
	}
	var monthreadingValue = Ti.UI.createLabel({
		text : value,
		color : '#000000',
		font : {
			fontSize : 16,
		},
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		right : 10,
		textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
	});

	monthreadingbox.add(monthreadingValue);
	monthreadingbox.add(Ti.UI.createView({
		backgroundImage : '/images/border_bar.png',
		width : Ti.UI.FILL,
		height : 1,
		top : 29,
	}));
	return monthreadingbox;
}

function profile() {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		contentWidth : 'auto',
		contentHeight : 'auto',
		layout : 'vertical',
		scrollType: 'vertical',
	});

	var data = Ti.App.Properties.getString('userinfo');
	data = JSON.parse(data);

	network.profile(function(e) {
		var value = '';
		if (e.MiddleName == null) {
			value = '';
		} else {
			value = e.MiddleName;
		}
		Ti.API.info('value: ' + value);
		contenner.add(ViewRow(L('Name'), e.FirstName + ' ' + value + ' ' + e.LastName + ' '));
		contenner.add(ViewRow(L('UserName'), e.UserName));
		contenner.add(ViewRow(L('Email'), e.Email));
		contenner.add(ViewRow(L('Sex'), e.Sex));
		contenner.add(ViewRow(L('SocialSecurityNumber'), e.SocialSecurityNumber));
		contenner.add(ViewRow(L('DateOfBirth'), getMyDate(e.DateOfBirth)));
		contenner.add(ViewRow(L('Address'), e.Address.Address1 + ', ' + e.Address.Address2));
		contenner.add(ViewRow(L('ZipCode'), e.Address.ZipCode));
		contenner.add(ViewRow(L('City_Name'), e.Address.City.Name));
		contenner.add(ViewRow(L('City_State'), e.Address.City.State));
		contenner.add(ViewRow(L('City_Country'), e.Address.City.Country));
		contenner.add(ViewRow(L('CellPhone'), e.CellPhone));
		contenner.add(ViewRow(L('Address_Phone1'), e.Address.Phone1));
		contenner.add(ViewRow(L('Address_Phone2'), e.Address.Phone2));
		Ti.App.Properties.setString('year', geCreateYear(e.CreatedAt));

	}, data);

	return contenner;
};
exports.profile = profile;
exports.meter = function() {
	var userinfo = Ti.App.Properties.getString('userinfo');
	userinfo = JSON.parse(userinfo);
	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		scrollType: 'vertical',
	});
	var relayTitleBox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE, 
		top : 5,
	});

	contenner.add(relayTitleBox);

	var relayLabel = Ti.UI.createLabel({
		text : L('relay'),
		color : '#000',
		height : 40,
		left : 5,
	});

	relayTitleBox.add(relayLabel);
	var basicSwitch = Ti.UI.createSwitch({
		value : true, // mandatory property for iOS 
		right : 10,
	});
	if(Ti.Platform.osname  === 'android'){
		basicSwitch.stye = Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON;
	}
	
	
	relayTitleBox.add(basicSwitch);
	 

	basicSwitch.addEventListener('change', function(e) {
		Ti.API.info('Switch value: ' + basicSwitch.value);

	var	data = {
			user : userinfo.user,
			status : basicSwitch.value? 0: 1,
		};
		network.relay(function(e) {

			 setTimeout(function() {
			 	
			 	var ddddata = Ti.App.Properties.getString('userinfo');
	ddddata = JSON.parse(ddddata);

	network.meter(function(e) {
		basicSwitch.value = (e.MeterStatusCodeId === 1 || e.MeterStatusCodeId === 2 ) ? false : true; 

	}, ddddata);
			 }, 5000);

		}, data);

	});
	var meterTitleBox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		top : 5,
		backgroundColor : '#28af78',
		layout : 'horizontal'
	});

	contenner.add(meterTitleBox);

	var metercontrol = Ti.UI.createImageView({
		image : '/images/colp.png',
		width : 30,
		height : 30,
		left : 5
	});
	var profileState = false;
	meterTitleBox.addEventListener('click', function() {
		if (profileState) {
			meterBox.height = Ti.UI.SIZE;
			meterBox.visible = true;
			metercontrol.image = '/images/expn.png';
		} else {
			meterBox.height = 0;
			meterBox.visible = false;
			metercontrol.image = '/images/colp.png';
		}
		profileState = !profileState;
	});

	meterTitleBox.add(metercontrol);

	var meterLabel = Ti.UI.createLabel({
		text : L('meter'),
		color : '#fff',
		height : 40,
		left : 5,
		right : 5,
	});

	meterTitleBox.add(meterLabel);

	var meterBox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		visible : true,
		top : 0,
		layout : 'horizontal'
	});

	contenner.add(meterBox);

	var metersTitleBox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		top : 10,
		backgroundColor : '#28af78',
		layout : 'horizontal'
	});

	contenner.add(metersTitleBox);

	var meterscontrol = Ti.UI.createImageView({
		image : '/images/colp.png',
		width : 30,
		height : 30,
		left : 5
	});
	var metersState = false;
	metersTitleBox.addEventListener('click', function() {
		if (metersState) {
			metersBox.visible = true;
			meterscontrol.image = '/images/expn.png';
			metersBox.height = Ti.UI.SIZE;
		} else {
			metersBox.height = 0;
			metersBox.visible = false;
			meterscontrol.image = '/images/colp.png';
		}
		metersState = !metersState;
	});

	metersTitleBox.add(meterscontrol);

	var metersLabel = Ti.UI.createLabel({
		text : L('meters'),
		color : '#fff',
		height : 40,
		left : 5,
		right : 5,
	});

	metersTitleBox.add(metersLabel);
	var metersBox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		visible : true,
		top : 0,
		layout : 'horizontal'
	});

	contenner.add(metersBox);
	var data = Ti.App.Properties.getString('userinfo');
	data = JSON.parse(data);

	network.meter(function(e) {
		basicSwitch.value = (e.MeterStatusCodeId === 1 || e.MeterStatusCodeId === 2 ) ? false : true; 
		meterBox.add(ViewRow(L('MeterVersion_Name'), e.MeterVersion.Name));
		meterBox.add(ViewRow(L('HardwareId'), e.HardwareId));
		meterBox.add(ViewRow(L('ProductionDate'), getMyDate(e.ProductionDate)));
		meterBox.add(ViewRow(L('ExpireDate'), getMyDate(e.ExpireDate)));
		meterBox.add(ViewRow(L('UserProfile_UserName'), e.UserProfile.UserName));
		meterBox.add(ViewRow(L('NumberOfSubDevice'), e.NumberOfSubDevice));
		meterBox.add(ViewRow(L('BillScheme_Name'), e.BillScheme.Name));
		MeterLimits = e.MeterLimits;

		for (var i = 0, j = MeterLimits.length; i < j; i++) {
			var MeterLimit = MeterLimits[i];

			metersBox.add(ViewRow(L('MeterLimits_LimitValue'), MeterLimit.LimitValue));
			metersBox.add(ViewRow(L('MeterLimits_LimitValue'), MeterLimit.LimitValue));
			metersBox.add(ViewRow(L('MeterLimits_Comment'), MeterLimit.Comment));

		};

	}, data);

	return contenner;
};

exports.reports = function(win) {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		scrollType: 'vertical',
		scrollType: 'vertical',
	});

	// Create a TableView.
	var reportsView = Ti.UI.createTableView({
		height : Ti.UI.FILL,
		rowHeight : 100,
		color: '#000'
	});

	var data = [{
		title : L('annual_usages'),
		className : 'reportsView',
	//	rightImage : '/images/arrow.png',
		id : 'annual_usages',
	}, {
		title : L('monthly_usages'),
		className : 'reportsView',
	//	rightImage : '/images/arrow.png',
		id : 'monthly_usages',
	}, {
		title : L('daily_usages'),
		className : 'reportsView',
	//	rightImage : '/images/arrow.png',
		id : 'daily_usages',
	}, {
		title : L('bills'),
		className : 'reportsView',
		//rightImage : '/images/arrow.png',
		id : 'bills',
	}, {
		title : L('current_bill'),
		className : 'reportsView',
		//rightImage : '/images/arrow.png',
		id : 'current_bill',
	}];
	reportsView.setData(data);

	var yearlist = [];

var createYear = 2013;
	  createYear = Ti.App.Properties.getString('year');

	if (createYear === 0) {
		createYear = 2013;
	}
	curentyer = new Date().getFullYear();
	var monthlist = [L('January'), L('February'), L('March'), L('April'), L('May'), L('June'), L('July'), L('August'), L('September'), L('October'), L('November'), L('December'), L('Cancel')];
currentWin = win;


	Ti.API.info('curentyer' + curentyer + 'createYear' + createYear);
	
	for (var i = (curentyer), j = (createYear); i >= j; i--) {
		Ti.API.info('yearlist i' + i);
		yearlist.push(i);
	};
	
 yearlist.push('Cancel');
	var yeropts = {
	cancel : 0,
	options : yearlist, //[12, 13, 14],
	selectedIndex : 1, 
	title : 'select_year',
};
var yearDialog = Ti.UI.createOptionDialog(yeropts);

	var date = new Date();
	yearDialog.addEventListener('click', function(e) {

		if (e.index < (yearlist.length - 1)) {
			var param = {
				type : 'annual',
				date : 0,
				month : 0,
				year : yearlist[e.index],
			};
			var GraphsUIWindow = require('ui/common/GraphsUIWindow');
			var GraphsUIWin = new GraphsUIWindow(L('annual_graphs_title') + ': ' + yearlist[e.index], param);
			GraphsUIWin.containingTab = currentWin.containingTab;
			currentWin.containingTab.open(GraphsUIWin);
		}
		
		//yearDialog = null;
	});

	var opts = {
		cancel : 12,
		options : monthlist,
		selectedIndex : 12,
		buttonNames : 'sss',
		title : L('Select_month'),
	};

	/var dialog = Ti.UI.createOptionDialog(opts);
	var date = new Date();
	dialog.addEventListener('click', function(e) {
		if (e.index < 12) {
			var param = {
				type : 'month',
				date : 0,
				month : (e.index + 1),
				year : date.getFullYear(),
			};
			var GraphsUIWindow = require('ui/common/GraphsUIWindow');
			var GraphsUIWin = new GraphsUIWindow(L('graphs_title') + ': ' + monthlist[e.index], param);
			GraphsUIWin.containingTab = currentWin.containingTab;
			currentWin.containingTab.open(GraphsUIWin);
		}
	});
 

	reportsView.addEventListener('click', function(e) {
		var id = e.rowData.id;
		if (id === 'annual_usages') {

			var dialog = Ti.UI.createOptionDialog(opts).show();
		} else if (id === 'monthly_usages') {
			mdatepicker(currentWin);
		} else if (id === 'daily_usages') {
			datepicker(currentWin);
		} else if (id === 'bills') {
			var param = {
				type : 'all',
			};
			var BillsUIWindow = require('ui/common/BillsUIWindow');
			var BillsUIWin = new BillsUIWindow(L('bills_title'), param);
			BillsUIWin.containingTab = currentWin.containingTab;
			currentWin.containingTab.open(BillsUIWin);
		} else if (id === 'current_bill') {
			var param = {
				type : 'current',
			};
			var CurrentBillsUIWindow = require('ui/common/CurrentBillsUIWindow');
			var CurrentBillsUIWin = new CurrentBillsUIWindow(L('current_bills_title'), param);
			CurrentBillsUIWin.containingTab = currentWin.containingTab;
			currentWin.containingTab.open(CurrentBillsUIWin);
		} else {

		}

	});

	contenner.add(reportsView);

	var data = Ti.App.Properties.getString('userinfo');
	data = JSON.parse(data);

	return contenner;
};

function mdatepicker(currentWin) {

	var win = Ti.UI.createWindow({
		modal : true,
		fullscreen : false,
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor : 'transparent',
		backgroundImage : '/images/transparent.png',
	});
	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		borderColor : '#fff',
		backgroundColor : 'transparent',
		backgroundImage : '/images/transparent.png',
		layout : 'vertical',
		scrollType: 'vertical',
	});
	win.add(contenner);

	var topView = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		top : 10,
	});

	var title = Ti.UI.createLabel({
		color : '#fff',
		font : {
			fontSize : 24,
		}

	});

	topView.add(title);

	contenner.add(topView);

	var inputbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		layout : 'vertical',
	});

	contenner.add(inputbox);
	var createYear = Ti.App.Properties.getString('year');

	Ti.API.info('curentyer' + curentyer + 'createYear' + createYear);
	var monthlist = [L('January'), L('February'), L('March'), L('April'), L('May'), L('June'), L('July'), L('August'), L('September'), L('October'), L('November'), L('December')];

	var column1 = Ti.UI.createPickerColumn();

	for (var i = 0, ilen = monthlist.length; i < ilen; i++) {
		var row = Ti.UI.createPickerRow({
			title : monthlist[i]
		});
		column1.addRow(row);
	}

	var column2 = Ti.UI.createPickerColumn();

	for (var i = (curentyer - 5), j = (curentyer); i <= j; i++) {
		var row = Ti.UI.createPickerRow({
			title : i.toString()
		});
		column2.addRow(row);
	}

	var picker = Ti.UI.createPicker({
		columns : [column1, column2],
		selectionIndicator : true,
		useSpinner : true,
	});
	function pickerDefaults(obj) {
		var date = new Date();
		picker.setSelectedRow(0, date.getMonth(), false);
		picker.setSelectedRow(1, 5, false);
	}


	inputbox.add(picker);

	var controlBox = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

	});

	contenner.add(controlBox);
	var cancel = Ti.UI.createButton({
		title : L('cancel'),
		height : 40,
		width : 80,
		borderRadius : 5,
		backgroundColor : '#28af78',
		backgroundImage : 'NONE',
		font : {
			fontSize : 20,
		},
		top : 10,
		left : 10,
	});
	controlBox.add(cancel);
	cancel.addEventListener('click', function(e) {

		win.close();
	});

	var loggin = Ti.UI.createButton({
		title : L('submit'),
		height : 40,
		width : 80,
		borderRadius : 5,
		backgroundColor : '#28af78',
		backgroundImage : 'NONE',
		font : {
			fontSize : 20,
		},
		top : 10,
		right : 10,
	});
	controlBox.add(loggin);
	loggin.addEventListener('click', function() {
		var monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		if (Ti.Platform.osname === 'android') {
			var toast = Ti.UI.createNotification({
				message : "Loading...",
				duration : Ti.UI.NOTIFICATION_DURATION_LONG
			});
			toast.show();
		}

		Ti.API.info('date' + JSON.stringify(picker.getSelectedRow(0).title) + 'date' + picker.getSelectedRow(1).title);

		Ti.API.info('array_key(picker.getSelectedRow(0).title)' + array_key(monthlist, picker.getSelectedRow(0).title));
		var param = {
			type : 'month',
			date : 0,
			month : array_key(monthlist, picker.getSelectedRow(0).title) + 1,
			year : picker.getSelectedRow(1).title,
		};
		var GraphsUIWindow = require('ui/common/GraphsUIWindow');
		var GraphsUIWin = new GraphsUIWindow(L('graphs_title'), param);
		GraphsUIWin.containingTab = currentWin.containingTab;
		currentWin.containingTab.open(GraphsUIWin);
		win.close();
	});

	win.open();
	var isAndroid = Ti.Platform.osname === 'android';

	if (isAndroid) {
		pickerDefaults(picker);
	}

	if (!isAndroid) {
		//	setTimeout(function() {
		pickerDefaults(picker);
		//	}, 1500);
	}

}

function datepicker(currentWin) {

	var win = Ti.UI.createWindow({
		modal : true,
		fullscreen : false,
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor : 'transparent',
		backgroundImage : '/images/transparent.png',
	});
	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		borderColor : '#fff',
		backgroundColor : 'transparent',
		backgroundImage : '/images/transparent.png',
		layout : 'vertical',
		scrollType: 'vertical',
	});
	win.add(contenner);

	var topView = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		top : 10,
	});

	var title = Ti.UI.createLabel({
		color : '#fff',
		font : {
			fontSize : 24,
		}

	});

	topView.add(title);

	contenner.add(topView);

	var inputbox = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		layout : 'vertical',
		top : 20,
	});

	contenner.add(inputbox);
	var createYear = Ti.App.Properties.getString('year');
	var picker = Ti.UI.createPicker({
		type : Ti.UI.PICKER_TYPE_DATE,
		minDate : new Date(createYear, 0, 1),
		maxDate : new Date(),
		value : new Date(),
		top : 10
	});
	inputbox.add(picker);
	title.text = getMyLocalDate(picker.value);
	picker.addEventListener('change', function(e) {
		title.text = getMyLocalDate(e.value);
	});

	var controlBox = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,

	});

	contenner.add(controlBox);
	var cancel = Ti.UI.createButton({
		title : L('cancel'),
		height : 40,
		width : 80,
		borderRadius : 5,
		backgroundColor : '#28af78',
		backgroundImage : 'NONE',
		font : {
			fontSize : 20,
		},
		top : 10,
		left : 10,
	});
	controlBox.add(cancel);
	cancel.addEventListener('click', function(e) {

		win.close();
	});

	var loggin = Ti.UI.createButton({
		title : L('submit'),
		height : 40,
		width : 80,
		borderRadius : 5,
		backgroundColor : '#28af78',
		backgroundImage : 'NONE',
		font : {
			fontSize : 20,
		},
		top : 10,
		right : 10,
	});
	controlBox.add(loggin);
	loggin.addEventListener('click', function() {

		if (Ti.Platform.osname === 'android') {
			var toast = Ti.UI.createNotification({
				message : "Loading...",
				duration : Ti.UI.NOTIFICATION_DURATION_LONG
			});
			toast.show();
		}
		date = picker.value;
		var param = {
			type : 'day',
			date : date.getDate(),
			month : date.getMonth() + 1,
			year : date.getFullYear(),
		};
		var GraphsUIWindow = require('ui/common/GraphsUIWindow');
		var GraphsUIWin = new GraphsUIWindow(L('daily_title'), param);
		GraphsUIWin.containingTab = currentWin.containingTab;
		currentWin.containingTab.open(GraphsUIWin);
		win.close();
	});

	win.open();

}

exports.graphsuiwin = function(data) {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		scrollType: 'vertical',
	});

	Ti.API.info('data' + JSON.stringify(data));
	aWebView = Ti.UI.createWebView({
		//url : url,//'http://appc.mrtechnologybd.com/barchart.php?data=' + report_string + '&title=' + title + '&vAxistitle=' + vAxistitle + '&vAxistitle=' + vAxistitle
scalesPageToFit : true,
	});
	contenner.add(aWebView);
	network.usage(function(reportData) {

		if (reportData.length > 0) {
			if (data.type === 'annual') {
				report_string = "['Month' , 'KWHR' ]";
				for (var i = 0, j = reportData.length; i < j; i++) {
					report = reportData[i];

					month = getDate(report.LoggedAt);
					KWHR = report.KWHR;
					report_string += ",[ '" + month + "' , " + KWHR + "]";
				};

				Ti.API.info('report_string' + JSON.stringify(reportData));

				title = "'Annual Usages'";
				vAxistitle = "'KWHR'";
				hAxistitle = "'Month'";
				url = 'http://appc.mrtechnologybd.com/barchart.php?data=' + report_string + '&title=' + title + '&vAxistitle=' + vAxistitle + '&hAxistitle=' + hAxistitle;

			} else if (data.type === 'month') {
				report_string = "['Day' , 'KWHR' ]";
				for (var i = 0, j = reportData.length; i < j; i++) {
					report = reportData[i];

					month = getMyDate(report.LoggedAt);
					KWHR = report.KWHR;
					report_string += ",[ '" + month + "' , " + KWHR + "]";
				};

				Ti.API.info('report_string' + JSON.stringify(reportData));

				title = "'MONTHLY USEGES'";
				vAxistitle = "'KWHR'";
				hAxistitle = "'Day'";

				url = 'http://appc.mrtechnologybd.com/barchart.php?data=' + report_string + '&title=' + title + '&vAxistitle=' + vAxistitle + '&hAxistitle=' + hAxistitle;

			} else if (data.type === 'day') {
				report_string = "['Month' , 'KWHR' ]";
				for (var i = 0, j = reportData.length; i < j; i++) {
					report = reportData[i];

					month = getMyTime(report.LoggedAt);
					KWHR = report.KWHR;
					report_string += ",[ '" + month + "' , " + KWHR + "]";
				};

				Ti.API.info('report_string' + JSON.stringify(reportData));

				title = "'DAILY USEGES'";
				vAxistitle = "'KWHR'";
				hAxistitle = "'Hour'";
//http://appc.mrtechnologybd.com/barchart.php
				url = 'http://appc.mrtechnologybd.com/barchart.php?data=' + report_string + '&title=' + title + '&vAxistitle=' + vAxistitle + '&hAxistitle=' + hAxistitle;

			}
			Ti.API.info('url ' + url);
			aWebView.url = url;
		}
	}, data);
	return contenner;
};

exports.billsuiwin = function(data) {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		scrollType: 'vertical',
	});

	Ti.API.info('data' + JSON.stringify(data));

	// Create a TableView.
	var billtable = Ti.UI.createTableView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
	});

	billtable.addEventListener('click', function(e) {
		var param = {
			webreq : false,
			data : e.rowData.data
		};
		var CurrentBillsUIWindow = require('ui/common/CurrentBillsUIWindow');
		var CurrentBillsUIWin = new CurrentBillsUIWindow(L('bill') + ': ' + e.rowData.BillPaymentId, param);
		CurrentBillsUIWin.containingTab = currentWin.containingTab;
		currentWin.containingTab.open(CurrentBillsUIWin);

	});

	contenner.add(billtable);
	var billdata = [];
	network.bill(function(e) {

		for (var i = 0, j = e.length; i < j; i++) {

			var BillingPeriod = e[i].BillingPeriod;
			var Meter = e[i].Meter;
			var UserProfile = e[i].Meter.UserProfile;

			var row = Ti.UI.createTableViewRow({
				className : 'row',
				objName : 'row',
				width : Ti.UI.FILL,
				touchEnabled : true,
				height : Ti.UI.SIZE,
				data : e[i],
				layout : 'vertical',
				BillPaymentId : e[i].BillPaymentId ? e[i].BillPaymentId : 0,
				focusable : false,
				hasChild : true,
				separatorColor : '#ff0000'
			});

			row.add(ViewRow(L('HardwareId'), Meter.HardwareId));
			row.add(SubViewRow(L('TotalUnit'), e[i].TotalUnit));
			row.add(SubViewRow(L('TotalUnitCost'), e[i].TotalUnitCost));
			row.add(SubViewRow(L('TotalVAT'), e[i].TotalVAT));
			row.add(SubViewRow(L('TotalBill'), e[i].TotalBill));
			row.add(SubViewRow(L('BillingPeriodDueDate'), getMyDate(e[i].DueDate)));

			billdata.push(row);
		};
		billtable.setData(billdata);
	}, data);

	return contenner;
};

function billDisplay(e) {
	var contenner = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		layout : 'vertical',
	});

	Ti.API.info('e' + JSON.stringify(e.Meter.UserProfile));

	var BillingPeriod = e.BillingPeriod;
	var Meter = e.Meter;
	var UserProfile = e.Meter.UserProfile;

	var UserProfile = e.Meter.UserProfile;
	value = UserProfile.MiddleName;
	if (UserProfile.MiddleName === null || UserProfile.MiddleName === 'undefined') {
		value = '';
	}

	contenner.add(ViewRow(L('Name'), UserProfile.FirstName + ' ' + value + ' ' + UserProfile.LastName));
	contenner.add(ViewRow(L('Address'), UserProfile.Address));
	contenner.add(ViewRow(L('BillingPeriod'), getMyDateMedium(BillingPeriod.PeriodStartsFrom) + ' - ' + getMyDateMedium(BillingPeriod.PeriodEndsAt)));
	contenner.add(ViewRow(L('BillingPeriodCreatedAt'), getMyDate(BillingPeriod.CreatedAt)));
	contenner.add(ViewRow(L('BillingPeriodDueDate'), getMyDate(BillingPeriod.DueDate)));

	contenner.add(ViewRow(L('TotalEnergyCharges'), e.TotalEnergyCharges));
	contenner.add(ViewRow(L('DemandCharge'), (e.DemandCharge)));
	contenner.add(ViewRow(L('MinimumCharge'), e.MinimumCharge));
	contenner.add(ViewRow(L('ServiceCharge'), (e.ServiceCharge)));

	contenner.add(ViewRow(L('CurrentDues'), e.CurrentDues));
	contenner.add(ViewRow(L('TotalDues'), (e.TotalDues)));
	contenner.add(ViewRow(L('TotalBill'), (e.TotalBill)));
	contenner.add(ViewRow(L('TotalBillLate'), (e.TotalBillLate)));

	return contenner;
}

exports.curentbillsuiwin = function(data) {

	var contenner = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		scrollType: 'vertical',
	});

	var topView = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		//layout : 'horizontal',
		top : 10,
	});
	contenner.add(topView);
	var logo = Ti.UI.createImageView({
		image : '/images/logo.png',
		width : 120,
		height : 50,
		center : {
			x : '50%',
			y : '50%',
		},
	});

	topView.add(logo);

	contenner.add(Ti.UI.createView({
		backgroundImage : '/images/border_bar.png',
		width : Ti.UI.FILL,
		height : 1,
		top : 10,
	}));

	Ti.API.info('data' + JSON.stringify(data));

	if (data.webreq !== false) {
		network.bill(function(e) {
			contenner.add(billDisplay(e));
		}, data);
	} else {

		contenner.add(billDisplay(data.data));
	}

	return contenner;
};

androidActionBar = function(user) {

	Ti.API.info('user' + JSON.stringify(user));

	var mainview = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
	});

	var controllView = Ti.UI.createView({
		backgroundColor : 'red',
		height : 50,
		width : Ti.UI.FILL,
		top : 0,
		zIndex : 10,
	});
	mainview.add(controllView);
	Ti.API.info('user.image_url' + user.image_url);

	var user_image = Ti.UI.createImageView({
		image : user.image_url,
		defaultImage : '/images/logo.png',
		zIndex : -10000,
		width : 60,
		height : 60,
		top : 5,
		left : 5,
		keepScreenOn : true,
		zIndex : 30,
	});
	mainview.add(user_image);
	if (user.is_home !== true) {
		user_image.image = '/images/arrow.png';
		user_image.width = 60;
		user_image.height = 60;
		user_image.top = -5;
		user_image.left = -5;
		user_image.addEventListener('click', function(e) {
			(user.win).close({
				activityEnterAnimation : Ti.Android.R.anim.slide_in_left,
				activityExitAnimation : Ti.Android.R.anim.slide_out_right
			});
		});
	} else {

		user_image.addEventListener('click', function(e) {
			ProfileUIWindow = require('ui/handheld/android/ProfileUIWindow');
			new ProfileUIWindow().open();
		});
	}

	var title = Ti.UI.createLabel({
		//backgroundColor : 'red',
		text : user.title,
		color : '#fff',
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : customFont,
		},
		height : 40,
		left : 65,
		right : 65,
		textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		horizontalWrap : false,
	});

	controllView.add(title);
	if (user.is_home === true) {
		var about_us = Ti.UI.createButton({
			backgroundImage : '/images/actionicons/about_us.png',
			width : 30,
			height : 50,
			right : 0,
		});

		controllView.add(about_us);

		about_us.addEventListener('click', function(e) {
			AboutUIWindow = require('ui/handheld/android/AboutUIWindow');
			new AboutUIWindow().open();
		});
	}
	return mainview;
};

exports.androidActionBar = androidActionBar;

