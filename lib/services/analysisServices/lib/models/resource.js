/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Represents an instance of Analysis Services resource
 *
 * @member {string} [id] Identifier that represents the Analysis Services
 * resource
 * 
 * @member {string} [name] Name of the Analysis Services resource
 * 
 * @member {string} [type] Specifies the type of Analysis Services resource
 * 
 * @member {string} location Location of the Analysis Services resource
 * 
 * @member {object} sku Sku of the Analysis Services resource
 * 
 * @member {string} [sku.name] Name of the Sku level for the server being
 * provisioned. Possible values include: 'S1', 'S2', 'S4', 'D1'
 * 
 * @member {string} [sku.tier] Name of the tier to which the Sku applies.
 * Possible values include: 'Development', 'Standard'
 * 
 * @member {object} [tags] Key value pairs of additional properties that can
 * ebe specified
 * 
 */
function Resource() {
  Resource['super_'].call(this);
}

util.inherits(Resource, models['BaseResource']);

/**
 * Defines the metadata of Resource
 *
 * @returns {object} metadata of Resource
 *
 */
Resource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Resource',
    type: {
      name: 'Composite',
      className: 'Resource',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        sku: {
          required: true,
          serializedName: 'sku',
          type: {
            name: 'Composite',
            className: 'ResourceSku'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = Resource;
