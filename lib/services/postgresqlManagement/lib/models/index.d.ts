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

import * as msRestAzure from 'ms-rest-azure';
exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;

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
export interface Sku {
  name?: string;
  tier?: string;
  capacity?: number;
  size?: string;
  family?: string;
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * Resource properties.
 *
 * @member {string} [id] Resource ID
 * 
 * @member {string} [name] Resource name.
 * 
 * @member {string} [type] Resource type.
 * 
 */
export interface SubResource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Resource properties including location and tages for track resources.
 *
 * @member {string} location The location the resource resides in.
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs.
 * 
 */
export interface Resource extends SubResource {
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Server class.
 * @constructor
 * Represents a PostgreSQL server.
 *
 * @member {object} [sku] Represents the sku of the PostgreSQL server.
 * 
 * @member {string} [sku.name] The name of the sku, typically, a letter +
 * Number code, e.g. P3.
 * 
 * @member {string} [sku.tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic'
 * 
 * @member {number} [sku.capacity] The scale up/out capacity, representing
 * server's DTU allocation.
 * 
 * @member {string} [sku.size] The size code, to be interpreted by resource as
 * appropriate.
 * 
 * @member {string} [sku.family] The family of hardware.
 * 
 * @member {number} [storageMB] The maximum storage allowed for a PostgreSQL
 * server.
 * 
 * @member {string} [userVisibleState] A value representing state of a
 * PostgreSQL server that is visible to user.
 * 
 * @member {string} [fullyQualifiedDomainName] The fully qualified domain name
 * of a PostgreSQL server.
 * 
 * @member {string} administratorLogin The administrator's login name of a
 * PostgreSQL server. Can only be specified when the server is being created
 * (and is required for creation).
 * 
 * @member {string} administratorLoginPassword The password of the
 * administrator login.
 * 
 * @member {string} [version] The version of a PostgreSQL server. Possible
 * values include: '9.5'
 * 
 */
export interface Server extends Resource {
  sku?: Sku;
  storageMB?: number;
  userVisibleState?: string;
  fullyQualifiedDomainName?: string;
  administratorLogin: string;
  administratorLoginPassword: string;
  version?: string;
}

/**
 * @class
 * Initializes a new instance of the ServerUpdateParameters class.
 * @constructor
 * Represents server update parameters.
 *
 * @member {object} [sku] Represents the sku of the PostgreSQL server.
 * 
 * @member {string} [sku.name] The name of the sku, typically, a letter +
 * Number code, e.g. P3.
 * 
 * @member {string} [sku.tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic'
 * 
 * @member {number} [sku.capacity] The scale up/out capacity, representing
 * server's DTU allocation.
 * 
 * @member {string} [sku.size] The size code, to be interpreted by resource as
 * appropriate.
 * 
 * @member {string} [sku.family] The family of hardware.
 * 
 * @member {number} [storageMB] The max storage allowed for a PostgreSQL
 * server.
 * 
 * @member {string} [administratorLoginPassword] The password of the
 * administrator login.
 * 
 * @member {string} [version] The version of a PostgreSQL server. Possible
 * values include: '9.5'
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs.
 * 
 */
export interface ServerUpdateParameters {
  sku?: Sku;
  storageMB?: number;
  administratorLoginPassword?: string;
  version?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the FirewallRule class.
 * @constructor
 * Represents a PostgreSQL server firewall rule.
 *
 * @member {string} startIpAddress The start IP address of the PostgreSQL
 * server firewall rule. Must be IPv4 format.
 * 
 * @member {string} endIpAddress The end IP address of the PostgreSQL server
 * firewall rule. Must be IPv4 format.
 * 
 */
export interface FirewallRule extends SubResource {
  startIpAddress: string;
  endIpAddress: string;
}

/**
 * @class
 * Initializes a new instance of the Database class.
 * @constructor
 * Represents a PostgreSQL Database.
 *
 * @member {string} [charset] The charset of PostgreSQL database.
 * 
 * @member {string} [collation] The collation of PostgreSQL database.
 * 
 */
export interface Database extends SubResource {
  charset?: string;
  collation?: string;
}


/**
 * @class
 * Initializes a new instance of the ServerListResult class.
 * @constructor
 * Represents the response to a List PostgreSQL servers request.
 *
 */
export interface ServerListResult extends Array<Server> {
}

/**
 * @class
 * Initializes a new instance of the FirewallRuleListResult class.
 * @constructor
 * Represents the response to a List Firewall Rules request.
 *
 */
export interface FirewallRuleListResult extends Array<FirewallRule> {
}

/**
 * @class
 * Initializes a new instance of the DatabaseListResult class.
 * @constructor
 * Represents the response to a List Databases request.
 *
 */
export interface DatabaseListResult extends Array<Database> {
}