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

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Servers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MySQLManagementClient.
 */
export interface Servers {

    /**
     * Creates a new MySQL server or updates an existing MySQL server. The update
     * action will overwrite the existing server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} parameters The required parameters for creating or updating
     * a MySQL server.
     * 
     * @param {object} [parameters.sku] Represents the sku of the MySQL server.
     * 
     * @param {string} [parameters.sku.name] The name of the sku, typically, a
     * letter + Number code, e.g. P3.
     * 
     * @param {string} [parameters.sku.tier] The tier of the particular SKU, e.g.
     * Basic. Possible values include: 'Basic'
     * 
     * @param {number} [parameters.sku.capacity] The scale up/out capacity,
     * representing server's DTU allocation.
     * 
     * @param {string} [parameters.sku.size] The size code, to be interpreted by
     * resource as appropriate.
     * 
     * @param {string} [parameters.sku.family] The family of hardware.
     * 
     * @param {number} [parameters.storageMB] The maximum storage allowed for a
     * MySQL server.
     * 
     * @param {string} parameters.administratorLogin The administrator's login
     * name of a MySQL server. Can only be specified when the server is being
     * created (and is required for creation).
     * 
     * @param {string} parameters.administratorLoginPassword The password of the
     * administrator login.
     * 
     * @param {string} [parameters.version] The version of a MySQL server.
     * Possible values include: '5.6'
     * 
     * @param {string} parameters.location The location the resource resides in.
     * 
     * @param {object} [parameters.tags] Application-specific metadata in the form
     * of key-value pairs.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, serverName: string, parameters: models.Server, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Server>): void;
    createOrUpdate(resourceGroupName: string, serverName: string, parameters: models.Server, callback: ServiceCallback<models.Server>): void;

    /**
     * Creates a new MySQL server or updates an existing MySQL server. The update
     * action will overwrite the existing server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} parameters The required parameters for creating or updating
     * a MySQL server.
     * 
     * @param {object} [parameters.sku] Represents the sku of the MySQL server.
     * 
     * @param {string} [parameters.sku.name] The name of the sku, typically, a
     * letter + Number code, e.g. P3.
     * 
     * @param {string} [parameters.sku.tier] The tier of the particular SKU, e.g.
     * Basic. Possible values include: 'Basic'
     * 
     * @param {number} [parameters.sku.capacity] The scale up/out capacity,
     * representing server's DTU allocation.
     * 
     * @param {string} [parameters.sku.size] The size code, to be interpreted by
     * resource as appropriate.
     * 
     * @param {string} [parameters.sku.family] The family of hardware.
     * 
     * @param {number} [parameters.storageMB] The maximum storage allowed for a
     * MySQL server.
     * 
     * @param {string} parameters.administratorLogin The administrator's login
     * name of a MySQL server. Can only be specified when the server is being
     * created (and is required for creation).
     * 
     * @param {string} parameters.administratorLoginPassword The password of the
     * administrator login.
     * 
     * @param {string} [parameters.version] The version of a MySQL server.
     * Possible values include: '5.6'
     * 
     * @param {string} parameters.location The location the resource resides in.
     * 
     * @param {object} [parameters.tags] Application-specific metadata in the form
     * of key-value pairs.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: models.Server, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Server>): void;
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: models.Server, callback: ServiceCallback<models.Server>): void;

    /**
     * Updates an existing MySQL server. The request body can contain one to many
     * of the properties present in the normal server definition.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} parameters The required parameters for updating a MySQL
     * server.
     * 
     * @param {object} [parameters.sku] Represents the sku of the MySQL server.
     * 
     * @param {string} [parameters.sku.name] The name of the sku, typically, a
     * letter + Number code, e.g. P3.
     * 
     * @param {string} [parameters.sku.tier] The tier of the particular SKU, e.g.
     * Basic. Possible values include: 'Basic'
     * 
     * @param {number} [parameters.sku.capacity] The scale up/out capacity,
     * representing server's DTU allocation.
     * 
     * @param {string} [parameters.sku.size] The size code, to be interpreted by
     * resource as appropriate.
     * 
     * @param {string} [parameters.sku.family] The family of hardware.
     * 
     * @param {number} [parameters.storageMB] The max storage allowed for a MySQL
     * server.
     * 
     * @param {string} [parameters.administratorLoginPassword] The password of the
     * administrator login.
     * 
     * @param {string} [parameters.version] The version of a MySQL server.
     * Possible values include: '5.6'
     * 
     * @param {object} [parameters.tags] Application-specific metadata in the form
     * of key-value pairs.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, serverName: string, parameters: models.ServerUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Server>): void;
    update(resourceGroupName: string, serverName: string, parameters: models.ServerUpdateParameters, callback: ServiceCallback<models.Server>): void;

    /**
     * Updates an existing MySQL server. The request body can contain one to many
     * of the properties present in the normal server definition.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} parameters The required parameters for updating a MySQL
     * server.
     * 
     * @param {object} [parameters.sku] Represents the sku of the MySQL server.
     * 
     * @param {string} [parameters.sku.name] The name of the sku, typically, a
     * letter + Number code, e.g. P3.
     * 
     * @param {string} [parameters.sku.tier] The tier of the particular SKU, e.g.
     * Basic. Possible values include: 'Basic'
     * 
     * @param {number} [parameters.sku.capacity] The scale up/out capacity,
     * representing server's DTU allocation.
     * 
     * @param {string} [parameters.sku.size] The size code, to be interpreted by
     * resource as appropriate.
     * 
     * @param {string} [parameters.sku.family] The family of hardware.
     * 
     * @param {number} [parameters.storageMB] The max storage allowed for a MySQL
     * server.
     * 
     * @param {string} [parameters.administratorLoginPassword] The password of the
     * administrator login.
     * 
     * @param {string} [parameters.version] The version of a MySQL server.
     * Possible values include: '5.6'
     * 
     * @param {object} [parameters.tags] Application-specific metadata in the form
     * of key-value pairs.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginUpdate(resourceGroupName: string, serverName: string, parameters: models.ServerUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Server>): void;
    beginUpdate(resourceGroupName: string, serverName: string, parameters: models.ServerUpdateParameters, callback: ServiceCallback<models.Server>): void;

    /**
     * Deletes a MySQL server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes a MySQL server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, serverName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets information about a MySQL server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Server>): void;
    get(resourceGroupName: string, serverName: string, callback: ServiceCallback<models.Server>): void;

    /**
     * List all the MySQL servers in a given resource group.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServerListResult>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.ServerListResult>): void;

    /**
     * List all the MySQL servers in a given subscription.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ServerListResult>): void;
    list(callback: ServiceCallback<models.ServerListResult>): void;
}

/**
 * @class
 * FirewallRules
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MySQLManagementClient.
 */
export interface FirewallRules {

    /**
     * Creates a new firewall rule or updates an existing firewall rule.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} firewallRuleName The name of the MySQL server firewall rule.
     * 
     * @param {object} parameters The required parameters for creating or updating
     * a firewall rule.
     * 
     * @param {string} parameters.startIpAddress The start IP address of the MySQL
     * server firewall rule. Must be IPv4 format.
     * 
     * @param {string} parameters.endIpAddress The end IP address of the MySQL
     * server firewall rule. Must be IPv4 format.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: models.FirewallRule, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    createOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: models.FirewallRule, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Creates a new firewall rule or updates an existing firewall rule.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} firewallRuleName The name of the MySQL server firewall rule.
     * 
     * @param {object} parameters The required parameters for creating or updating
     * a firewall rule.
     * 
     * @param {string} parameters.startIpAddress The start IP address of the MySQL
     * server firewall rule. Must be IPv4 format.
     * 
     * @param {string} parameters.endIpAddress The end IP address of the MySQL
     * server firewall rule. Must be IPv4 format.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: models.FirewallRule, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, parameters: models.FirewallRule, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Deletes a MySQL server firewall rule.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} firewallRuleName The name of the MySQL server firewall rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes a MySQL server firewall rule.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} firewallRuleName The name of the MySQL server firewall rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, serverName: string, firewallRuleName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets information about a MySQL server firewall rule.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} firewallRuleName The name of the MySQL server firewall rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, serverName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    get(resourceGroupName: string, serverName: string, firewallRuleName: string, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * List all the firewall rules in a given MySQL server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRuleListResult>): void;
    list(resourceGroupName: string, serverName: string, callback: ServiceCallback<models.FirewallRuleListResult>): void;
}

/**
 * @class
 * Databases
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MySQLManagementClient.
 */
export interface Databases {

    /**
     * Creates a new MySQL Database or updates an existing MySQL Database.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} databaseName The name of the MySQL database.
     * 
     * @param {object} parameters The required parameters for creating or updating
     * a MySQL database.
     * 
     * @param {string} [parameters.charset] The charset of MySQL database.
     * 
     * @param {string} [parameters.collation] The collation of MySQL database.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: models.Database, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Database>): void;
    createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: models.Database, callback: ServiceCallback<models.Database>): void;

    /**
     * Creates a new MySQL Database or updates an existing MySQL Database.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} databaseName The name of the MySQL database.
     * 
     * @param {object} parameters The required parameters for creating or updating
     * a MySQL database.
     * 
     * @param {string} [parameters.charset] The charset of MySQL database.
     * 
     * @param {string} [parameters.collation] The collation of MySQL database.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: models.Database, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Database>): void;
    beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: models.Database, callback: ServiceCallback<models.Database>): void;

    /**
     * Deletes a MySQL database.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} databaseName The name of the MySQL database to be deleted.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes a MySQL database.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} databaseName The name of the MySQL database to be deleted.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, serverName: string, databaseName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, serverName: string, databaseName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets information about a MySQL database.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {string} databaseName The name of the MySQL database to be retrieved.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, serverName: string, databaseName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Database>): void;
    get(resourceGroupName: string, serverName: string, databaseName: string, callback: ServiceCallback<models.Database>): void;

    /**
     * List all the databases in a given MySQL server.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource. You can obtain this value from the Azure Resource
     * Manager API or the portal.
     * 
     * @param {string} serverName The name of the MySQL server.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(resourceGroupName: string, serverName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DatabaseListResult>): void;
    list(resourceGroupName: string, serverName: string, callback: ServiceCallback<models.DatabaseListResult>): void;
}
