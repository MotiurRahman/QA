function ApplicationTabGroup(Window) {
	//create module instance

	var self = Ti.UI.createTabGroup({
		navBarHidden : true
	});

	var HomeUIWindow = require('/ui/common/HomeUIWindow');
	var ReportsUIWindow = require('/ui/common/ReportsUIWindow');
	var SettingUIWindow = require('/ui/common/SettingUIWindow');
	var ProfileUIWindow = require('/ui/common/ProfileUIWindow');

	var mainhomeWin = new HomeUIWindow(L('user_stat'));
	var reportsWin = new ReportsUIWindow(L('reports'));
	var settingWin = new SettingUIWindow(L('setting'));
	var profileWin = new ProfileUIWindow(L('profile'));

	var homeTab = Ti.UI.createTab({
		title : L('user_stat'),
		icon : '/KS_nav_ui.png',
		window : mainhomeWin,
		id : 'homeTab',
	});
	mainhomeWin.containingTab = homeTab;

	self.addTab(homeTab);

	var shopTab = Ti.UI.createTab({
		title : L('reports_tab'),
		icon : '/KS_nav_ui.png',
		window : reportsWin,
		id : 'reportstab',
	});
	reportsWin.containingTab = shopTab;

	self.addTab(shopTab);

	var settingTab = Ti.UI.createTab({
		title : L('setting_tab'),
		icon : '/KS_nav_ui.png',
		window : settingWin,
		id : 'settingtab',
	});
	settingWin.containingTab = settingTab;

	self.addTab(settingTab);

	var profileTab = Ti.UI.createTab({
		title : L('profile_tab'),
		icon : '/KS_nav_ui.png',
		window : profileWin,
		id : 'profiletab',
	});
	profileWin.containingTab = profileTab;
	self.addTab(profileTab);
	self.model = Ti.Platform.model;

	Ti.App.addEventListener('app:logout', function() {
		self.close({
			transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
		});
		Ti.App.Properties.setString('userinfo', JSON.stringify({}));
	});

	if (Ti.Platform.name === "android") {
		self.addEventListener("open", function(e) {
			
			
			var activity = self.getActivity();
			activity.onCreateOptionsMenu = function(e) {
				var item, menu;
				menu = e.menu;
				menu.clear();
				var menuItem = menu.add({
					title : "Log out",
					icon : "/images/arrow.png",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
			
			menuItem.addEventListener("click", function(e) {
				Ti.App.fireEvent('app:logout');
			});
			
			};
			
		});

		self.addEventListener("focus", function(e) {
			self.getActivity().invalidateOptionsMenu();
		});
	}

	return self;
};

module.exports = ApplicationTabGroup;
