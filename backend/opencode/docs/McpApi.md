# opencode_sdk.McpApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mcp_add**](McpApi.md#mcp_add) | **POST** /mcp | Add MCP server
[**mcp_auth_authenticate**](McpApi.md#mcp_auth_authenticate) | **POST** /mcp/{name}/auth/authenticate | Authenticate MCP OAuth
[**mcp_auth_callback**](McpApi.md#mcp_auth_callback) | **POST** /mcp/{name}/auth/callback | Complete MCP OAuth
[**mcp_auth_remove**](McpApi.md#mcp_auth_remove) | **DELETE** /mcp/{name}/auth | Remove MCP OAuth
[**mcp_auth_start**](McpApi.md#mcp_auth_start) | **POST** /mcp/{name}/auth | Start MCP OAuth
[**mcp_connect**](McpApi.md#mcp_connect) | **POST** /mcp/{name}/connect | 
[**mcp_disconnect**](McpApi.md#mcp_disconnect) | **POST** /mcp/{name}/disconnect | 
[**mcp_status**](McpApi.md#mcp_status) | **GET** /mcp | Get MCP status


# **mcp_add**
> Dict[str, MCPStatus] mcp_add(directory=directory, workspace=workspace, mcp_add_request=mcp_add_request)

**Synchronous variant:** `mcp_add_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Add MCP server

Dynamically add a new Model Context Protocol (MCP) server to the system.

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_status import MCPStatus
from opencode_sdk.models.mcp_add_request import McpAddRequest
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    mcp_add_request = opencode_sdk.McpAddRequest() # McpAddRequest |  (optional)

    try:
        # Add MCP server
        api_response = await api_instance.mcp_add(directory=directory, workspace=workspace, mcp_add_request=mcp_add_request)
        print("The response of McpApi->mcp_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **mcp_add_request** | [**McpAddRequest**](McpAddRequest.md)|  | [optional] 

### Return type

[**Dict[str, MCPStatus]**](MCPStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MCP server added successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_auth_authenticate**
> MCPStatus mcp_auth_authenticate(name, directory=directory, workspace=workspace)

**Synchronous variant:** `mcp_auth_authenticate_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Authenticate MCP OAuth

Start OAuth flow and wait for callback (opens browser).

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_status import MCPStatus
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    name = 'name_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Authenticate MCP OAuth
        api_response = await api_instance.mcp_auth_authenticate(name, directory=directory, workspace=workspace)
        print("The response of McpApi->mcp_auth_authenticate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_auth_authenticate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**MCPStatus**](MCPStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth authentication completed |  -  |
**400** | McpUnsupportedOAuthError | InvalidRequestError |  -  |
**404** | McpServerNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_auth_callback**
> MCPStatus mcp_auth_callback(name, directory=directory, workspace=workspace, mcp_auth_callback_request=mcp_auth_callback_request)

**Synchronous variant:** `mcp_auth_callback_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Complete MCP OAuth

Complete OAuth authentication for a Model Context Protocol (MCP) server using the authorization code.

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_status import MCPStatus
from opencode_sdk.models.mcp_auth_callback_request import McpAuthCallbackRequest
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    name = 'name_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    mcp_auth_callback_request = opencode_sdk.McpAuthCallbackRequest() # McpAuthCallbackRequest |  (optional)

    try:
        # Complete MCP OAuth
        api_response = await api_instance.mcp_auth_callback(name, directory=directory, workspace=workspace, mcp_auth_callback_request=mcp_auth_callback_request)
        print("The response of McpApi->mcp_auth_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_auth_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **mcp_auth_callback_request** | [**McpAuthCallbackRequest**](McpAuthCallbackRequest.md)|  | [optional] 

### Return type

[**MCPStatus**](MCPStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth authentication completed |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | McpServerNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_auth_remove**
> McpAuthRemove200Response mcp_auth_remove(name, directory=directory, workspace=workspace)

**Synchronous variant:** `mcp_auth_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove MCP OAuth

Remove OAuth credentials for an MCP server.

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_auth_remove200_response import McpAuthRemove200Response
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    name = 'name_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Remove MCP OAuth
        api_response = await api_instance.mcp_auth_remove(name, directory=directory, workspace=workspace)
        print("The response of McpApi->mcp_auth_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_auth_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**McpAuthRemove200Response**](McpAuthRemove200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth credentials removed |  -  |
**400** | Bad request |  -  |
**404** | McpServerNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_auth_start**
> McpAuthStart200Response mcp_auth_start(name, directory=directory, workspace=workspace)

**Synchronous variant:** `mcp_auth_start_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Start MCP OAuth

Start OAuth authentication flow for a Model Context Protocol (MCP) server.

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_auth_start200_response import McpAuthStart200Response
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    name = 'name_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Start MCP OAuth
        api_response = await api_instance.mcp_auth_start(name, directory=directory, workspace=workspace)
        print("The response of McpApi->mcp_auth_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_auth_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**McpAuthStart200Response**](McpAuthStart200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OAuth flow started |  -  |
**400** | McpUnsupportedOAuthError | InvalidRequestError |  -  |
**404** | McpServerNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_connect**
> bool mcp_connect(name, directory=directory, workspace=workspace)

**Synchronous variant:** `mcp_connect_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Connect an MCP server.

### Example


```python
import opencode_sdk
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    name = 'name_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        api_response = await api_instance.mcp_connect(name, directory=directory, workspace=workspace)
        print("The response of McpApi->mcp_connect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_connect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MCP server connected successfully |  -  |
**400** | Bad request |  -  |
**404** | McpServerNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_disconnect**
> bool mcp_disconnect(name, directory=directory, workspace=workspace)

**Synchronous variant:** `mcp_disconnect_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Disconnect an MCP server.

### Example


```python
import opencode_sdk
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    name = 'name_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        api_response = await api_instance.mcp_disconnect(name, directory=directory, workspace=workspace)
        print("The response of McpApi->mcp_disconnect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_disconnect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MCP server disconnected successfully |  -  |
**400** | Bad request |  -  |
**404** | McpServerNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mcp_status**
> Dict[str, MCPStatus] mcp_status(directory=directory, workspace=workspace)

**Synchronous variant:** `mcp_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get MCP status

Get the status of all Model Context Protocol (MCP) servers.

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_status import MCPStatus
from opencode_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = opencode_sdk.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
async with opencode_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = opencode_sdk.McpApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get MCP status
        api_response = await api_instance.mcp_status(directory=directory, workspace=workspace)
        print("The response of McpApi->mcp_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling McpApi->mcp_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Dict[str, MCPStatus]**](MCPStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MCP server status |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

