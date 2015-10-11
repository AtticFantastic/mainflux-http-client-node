/**
 * Copyright (c) Mainflux
 *
 * mainflux-http-client-node is licensed under an Apache license, version 2.0 license.
 * All rights not explicitly granted in the Apache license, version 2.0 are reserved.
 * See the included LICENSE file for more details.
 */


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
MainfluxHttpClient.prototype.connect = function() {
    console.log("Connect");
}

MainfluxHttpClient.prototype.getStatus = function() {
    console.log("Get status");
}


/**
 * Exports
 */
module.exports = MainfluxHttpClient;
