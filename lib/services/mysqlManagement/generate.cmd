::
:: Microsoft Azure SDK for Node - Generate library code
:: Copyright (C) Microsoft Corporation. All Rights Reserved.
::

@echo off
set autoRestVersion=0.17.3
if  "%1" == "" (
    set specFile="https://github.com/Suna-MS/azure-rest-api-specs-pr/tree/master/arm-rdbms/2016-02-01-privatepreview/Rdms.MySQL.json"
) else (
    set specFile="%1"
)
set repoRoot=%~dp0..\..\..\
set generateFolder=%~dp0lib

if exist %generateFolder% rd /S /Q  %generateFolder%

set autoRestExe=%repoRoot%\packages\autorest.%autoRestVersion%\tools\AutoRest.exe

@echo on
%autoRestExe% -Modeler Swagger -CodeGenerator Azure.NodeJS -Input %specFile% -Namespace Microsoft.Azure.Management.MySQL -outputDirectory %generateFolder% -Header MICROSOFT_APACHE
@echo off