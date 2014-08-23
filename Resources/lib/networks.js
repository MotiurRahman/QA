var url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/';

exports.login = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);

			json = JSON.parse(this.responseText);
			callback(this.responseText);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
		},
		timeout : 50000
	});

	//http://dev.sinepulse.com/smartmeter/web/test/DataAPI.svc/data/login
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/login?user=' + data.user + '&pass=' + data.pass;
	Ti.API.info('url' + url);
	xhr.open('GET', (url));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

exports.currstat = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);

			json = JSON.parse(this.responseText);
			callback(json);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
			callback({
				"CurrBill" : 0,
				"CurrMonthReading" : 0,
				"CurrUsage" : 0,
				"DueBill" : 0,
				"MeterInfo" : 0,
			});

		},
		timeout : 50000
	});
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/currstat?user=' + data.user;
	Ti.API.info('url' + url);
	xhr.open('GET', (url));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

exports.profile = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			json = JSON.parse(this.responseText);
			callback(json);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
		},
		timeout : 50000
	});
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/profile?user=' + data.user;
	Ti.API.info('url' + url);
	xhr.open('GET', (url));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

exports.usage = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);

			json = JSON.parse(this.responseText);
			callback(json);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
		},
		timeout : 50000
	});
	// + data.year
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/usage?user=' + data.user + '&type=' + data.type + '&date=' + data.date + '&month=' + data.month + '&year=' + data.year;
	Ti.API.info('url' + encodeURI(url));
	xhr.open('GET', (url));

	//alert(url);

	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

exports.relay = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);

			json = JSON.parse(this.responseText);
			callback(this.responseText);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
		},
		timeout : 50000
	});

	//http://dev.sinepulse.com/smartmeter/web/test/DataAPI.svc/data/login
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/relay?user=' + data.user + '&status=' + data.status;
	Ti.API.info('url' + url);
	xhr.open('GET', (url));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

exports.bill = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);

			json = JSON.parse(this.responseText);
			if (data.type === 'current')
				callback(json[0]);
			else
				callback(json);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
		},
		timeout : 50000
	});
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/bill?user=' + data.user + '&type=' + data.type;
	Ti.API.info('url' + url);
	xhr.open('GET', (url));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

exports.meter = function(callback, data) {

	var xhr = Ti.Network.createHTTPClient({
		onload : function() {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);

			json = JSON.parse(this.responseText);
			callback(json);
		},
		onerror : function(e) {
			Ti.API.info("STATUS: " + this.status);
			Ti.API.info("TEXT:   " + this.responseText);
			Ti.API.info("ERROR:  " + e.error);
			alert(L('network_problem'));
		},
		timeout : 50000
	});
	url = 'http://dev.sinepulse.com/smartmeter/service/dev/DataAPI.svc/data/meter?user=' + data.user;
	Ti.API.info('url' + url);
	xhr.open('GET', (url));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send();

};

