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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DatabaseListResult class.
 * @constructor
 * Represents the response to a List Databases request.
 *
 */
function DatabaseListResult() {
}

util.inherits(DatabaseListResult, Array);

/**
 * Defines the metadata of DatabaseListResult
 *
 * @returns {object} metadata of DatabaseListResult
 *
 */
DatabaseListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DatabaseListResult',
    type: {
      name: 'Composite',
      className: 'DatabaseListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DatabaseElementType',
                type: {
                  name: 'Composite',
                  className: 'Database'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = DatabaseListResult;