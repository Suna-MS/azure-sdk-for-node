# Microsoft Azure SDK for Node.js - MySQL Database Management

This project provides a Node.js package that makes it easy to manage Microsoft Azure MySQL Database. Right now it supports:
- **API version: 2016-02-01-privatepreview**

## Features

- Manage server
- Manage database
- Manage firewall rule

## How to Install

```bash
npm install azure-arm-mysql
```

## How to Use

### Authentication, client creation and listing servers as an example

```javascript
 var msRestAzure = require('ms-rest-azure');
 var MySQLManagementClient = require('azure-arm-mysql');

 // Interactive Login
 // It provides a url and code that needs to be copied and pasted in a browser and authenticated over there. If successful, 
 // the user will get a DeviceTokenCredentials object.
 msRestAzure.interactiveLogin(function(err, credentials) {
  var client = new MySQLManagementClient(credentials, 'your-subscription-id');
  client.servers.list(function(err, result, request, response) {
    if (err) console.log(err);
    console.log(result);
  });
 });
 ```
 
## Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/WindowsAzure/azure-sdk-for-node)
