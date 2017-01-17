# Microsoft Azure SDK for Node.js - PostgreSQL Database Management

This project provides a Node.js package that makes it easy to manage Microsoft Azure PostgreSQL Database. Right now it supports:
- **API version: 2016-02-01-privatepreview**

## Features

- Manage server
- Manage database
- Manage firewall rule

## How to Install

```bash
npm install azure-arm-postgresql
```

## How to Use

### Authentication, client creation and listing servers as an example

```javascript
 var msRestAzure = require('ms-rest-azure');
 var PostgreSQLManagementClient = require('azure-arm-postgresql');

 // Interactive Login
 // It provides a url and code that needs to be copied and pasted in a browser and authenticated over there. If successful, 
 // the user will get a DeviceTokenCredentials object.
 msRestAzure.interactiveLogin(function(err, credentials) {
  var client = new PostgreSQLManagementClient(credentials, 'your-subscription-id');
  client.servers.list(function(err, result, request, response) {
    if (err) console.log(err);
    console.log(result);
  });
 });
 ```
 
## Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/WindowsAzure/azure-sdk-for-node)
