/**
 * Copyright (c) Mainflux
 *
 * mainflux-http-client-node is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

var async = require('async');

var mf   = require ('../');
var mfClient = mf.client();

//var DEVICE_TOKEN = "MY_SECRET_TOKEN"
var DEVICE_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0NDk1MjYzNDgsImV4cCI6MTQ1MDEzMTE0OH0.OFHFRfSgZGxZOYg68bwX3X0qlW_E0fdk61y6kkQl894"

var myTestDeviceId = "";


/**
 * setToken();
 */
var setToken = function(cb) {
    mfClient.setToken(DEVICE_TOKEN);
    cb();
}


/**
 * getStatus()
 */
var getStatus = function(cb) {
    mfClient.getStatus(function (err, rsp, body) {
        if (!err && rsp.statusCode == 200) {
            console.log(body);
        }
        cb();
    });
}


/**
 * getDevices()
 */
var getDevices = function(cb) {
    mfClient.getDevices(function (err, rsp, body) {
        if (!err && rsp.statusCode == 200) {
            console.log(body);
        }
        cb();
    });
}


/**
 * createDevice()
 */
var createDevice = function(cb) {
    var device = {'library': 'test'};
    mfClient.createDevice(device, function (err, rsp, body) {
        if (!err && rsp.statusCode == 200) {
            console.log(body);

            myTestDeviceId = JSON.parse(body)._id;
            console.log("Created myTestDevice = ", myTestDeviceId);
        }
        cb();
    });
}


/**
 * getDevice()
 */
var getDevice = function(cb) {
    mfClient.getDevice(myTestDeviceId, function (err, rsp, body) {
        if (!err && rsp.statusCode == 200) {
            console.log(body);
        }
        cb();
    });
}


/**
 * deleteDevice()
 */
var deleteDevice = function(cb) {
    mfClient.deleteDevice(myTestDeviceId, function (err, rsp, body) {
        if (!err && rsp.statusCode == 200) {
            console.log(body);
        }
        cb();
    });
}


async.series([
    setToken,
    getStatus,
    getDevices,
    createDevice,
    getDevice,
    deleteDevice,
    getDevice,
    getDevices
], function (err, results) {
    // Here, results is an array of the value from each function
    //console.log(results);
});

