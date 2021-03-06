/*
 * Copyright (c) Microsoft and contributors.  All rights reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * Billing information related properties of the server.
 *
 * @member {string} [name] The name of the sku, typically, a letter + Number
 * code, e.g. P3.
 * 
 * @member {string} [tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic'
 * 
 * @member {number} [capacity] The scale up/out capacity, representing
 * server's DTU allocation.
 * 
 * @member {string} [size] The size code, to be interpreted by resource as
 * appropriate.
 * 
 * @member {string} [family] The family of hardware.
 * 
 */
function Sku() {
}

/**
 * Defines the metadata of Sku
 *
 * @returns {object} metadata of Sku
 *
 */
Sku.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Sku',
    type: {
      name: 'Composite',
      className: 'Sku',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        tier: {
          required: false,
          serializedName: 'tier',
          type: {
            name: 'String'
          }
        },
        capacity: {
          required: false,
          serializedName: 'capacity',
          constraints: {
            InclusiveMinimum: 0
          },
          type: {
            name: 'Number'
          }
        },
        size: {
          required: false,
          serializedName: 'size',
          type: {
            name: 'String'
          }
        },
        family: {
          required: false,
          serializedName: 'family',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Sku;
