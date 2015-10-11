/**
 * Copyright (c) Mainflux
 *
 * mainflux-http-client-node is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */

var mf   = require ('../');
var mfClient = mf.client();

var DEVICE_TOKEN = "MY_SECRET_TOKEN"

var myTestDeviceId = "";


/**
 * setToken();
 */
mfClient.setToken(DEVICE_TOKEN);


/**
 * getStatus()
 */
mfClient.getStatus(function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);
    }
});


/**
 * getDevices()
 */
mfClient.getDevices(function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);
    }
});


/**
 * createDevice()
 */
mfClient.createDevice(function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);

        myTestDeviceId = JSON.parse(body)._id;
        console.log("myTestDevice = ", myTestDeviceId);
    }
});


/**
 * getDevice()
 */
mfClient.getDevice(myTestDeviceId, function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);
    }
});


/**
 * deleteDevice()
 */
mfClient.getDevice(myTestDeviceId, function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);
    }
});


/**
 * getDevice() - try to fetch it again (should be empty JSON now)
 */
mfClient.getDevice(myTestDeviceId, function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);
    }
});


/**
 * getDevices()
 */
mfClient.getDevices(function (err, rsp, body) {
    if (!err && rsp.statusCode == 200) {
        console.log(body);
    }
});

