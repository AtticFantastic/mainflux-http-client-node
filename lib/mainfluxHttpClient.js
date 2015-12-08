/**
 * Copyright (c) Mainflux
 *
 * mainflux-http-client-node is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

var request = require('request');

var mfHost = 'http://localhost:8080';

/**
 * DEVICE_TOKEN is a secret API key to be sent with each request
 */
var _DEVICE_TOKEN = 'MY_SECRET_TOKEN';

/**
 *  Mainflux HTTP Client class
 */
function MainfluxHttpClient() {
    if (!(this instanceof MainfluxHttpClient)) {
        return new MainfluxHttpClient();
    }

    console.log('Creating Mainflux HTTP Client');
}

/**
 * Defaults
 */
var r = request.defaults({
    baseUrl: mfHost,
    headers: {
            'X-Auth-Token': _DEVICE_TOKEN,
            'Content-Type': 'application/json'
    }
});

var setRequestDefaults = function(requestDefaults) {
    r = request.defaults(requestDefaults);
}

/**
 * Mainflux HTTP Client methods
 */

/**
 * setToken()
 */
MainfluxHttpClient.prototype.setToken = function(deviceToken) {
    console.log("setToken(): " + deviceToken);
    _DEVICE_TOKEN = deviceToken;

    var requestDefaults = {
        baseUrl: mfHost,
        headers: {
            'X-Auth-Token': _DEVICE_TOKEN,
            'Content-Type': 'application/json'
        }
    }
    setRequestDefaults(requestDefaults);
}


/**
 * getStatus()
 */
MainfluxHttpClient.prototype.getStatus = function(callback) {
    r.get('/status', callback);
}


/**
 * createDevice()
 */
MainfluxHttpClient.prototype.createDevice = function(device, callback) {
    r.post({url: '/devices', body: JSON.stringify(device)}, callback);
}


/**
 * getDevices()
 */
MainfluxHttpClient.prototype.getDevices = function(callback) {
    r.get('/devices', callback);
}


/**
 * getDevice()
 */
MainfluxHttpClient.prototype.getDevice = function(deviceId, callback) {
    r.get('devices/' + deviceId, callback);
}

/**
 * deleteDevice()
 */
MainfluxHttpClient.prototype.deleteDevice = function(deviceId, callback) {
    r.del('/devices/' + deviceId, callback);
}


/**
 * Exports
 */
module.exports = MainfluxHttpClient;
