/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the WinRMListener class.
 * @constructor
 * Describes Protocol and thumbprint of Windows Remote Management listener
 * @member {string} [protocol] Gets or sets the Protocol used by WinRM
 * listener. Currently only Http and Https are supported. Possible values for
 * this property include: 'Http', 'Https'.
 * 
 * @member {string} [certificateUrl] Gets or sets the Certificate URL in KMS
 * for Https listeners. Should be null for Http listeners.
 * 
 */
function WinRMListener(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.protocol !== undefined) {
      this.protocol = parameters.protocol;
    }
    if (parameters.certificateUrl !== undefined) {
      this.certificateUrl = parameters.certificateUrl;
    }
  }    
}


/**
 * Validate the payload against the WinRMListener schema
 *
 * @param {JSON} payload
 *
 */
WinRMListener.prototype.serialize = function () {
  var payload = {};
  if (this['protocol'] !== null && this['protocol'] !== undefined) {
    if (typeof this['protocol'].valueOf() !== 'string') {
      throw new Error('this[\'protocol\'] must be of type string.');
    }
    payload['protocol'] = this['protocol'];
  }

  if (this['certificateUrl'] !== null && this['certificateUrl'] !== undefined) {
    if (typeof this['certificateUrl'].valueOf() !== 'string') {
      throw new Error('this[\'certificateUrl\'] must be of type string.');
    }
    payload['certificateUrl'] = this['certificateUrl'];
  }

  return payload;
};

/**
 * Deserialize the instance to WinRMListener schema
 *
 * @param {JSON} instance
 *
 */
WinRMListener.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['protocol'] !== undefined) {
      this['protocol'] = instance['protocol'];
    }

    if (instance['certificateUrl'] !== undefined) {
      this['certificateUrl'] = instance['certificateUrl'];
    }
  }

  return this;
};

module.exports = WinRMListener;