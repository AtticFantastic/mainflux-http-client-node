/**
 * Copyright (c) Mainflux
 *
 * mainflux-http-client-node is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

var request = require('request');

var mfHost = "http://localhost:8080";

/**
 * DEVICE_TOKEN is a secret API key to be sent with each request
 */
var _DEVICE_TOKEN = "";

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
 * Mainflux HTTP Client methods
 */

/**
 * setToken()
 */
MainfluxHttpClient.prototype.setToken = function(deviceToken) {
    console.log("setToken()");
    _DEVICE_TOKEN = deviceToken;
}


/**
 * getStatus()
 */
MainfluxHttpClient.prototype.getStatus = function(callback) {
    request({
        baseUrl: mfHost,
        url: "status",
        method: "GET",
    }, callback);
}


/**
 * createDevice()
 */
MainfluxHttpClient.prototype.createDevice = function(callback) {
    request({
        baseUrl: mfHost,
        headers: {
            'X-Auth-Token': _DEVICE_TOKEN
        },
        url: "devices",
        method: "POST",
    }, callback);
}


/**
 * getDevices()
 */
MainfluxHttpClient.prototype.getDevices = function(callback) {
    request({
        baseUrl: mfHost,
        headers: {
            'X-Auth-Token': _DEVICE_TOKEN
        },
        url: "devices",
        method: "GET",
    }, callback);
}


/**
 * getDevice()
 */
MainfluxHttpClient.prototype.getDevice = function(callback, deviceId) {
    request({
        baseUrl: mfHost,
        headers: {
            'X-Auth-Token': _DEVICE_TOKEN
        },
        url: "devices/" + deviceId,
        method: "GET",
    }, callback);
}

/**
 * deleteDevice()
 */
MainfluxHttpClient.prototype.deleteDevice = function(callback, deviceId) {
    request({
        baseUrl: mfHost,
        headers: {
            'X-Auth-Token': _DEVICE_TOKEN
        },
        url: "devices/" + deviceId,
        method: "DELETE",
    }, callback);
}


/**
 * Exports
 */
module.exports = MainfluxHttpClient;
