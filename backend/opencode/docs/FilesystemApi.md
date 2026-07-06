# opencode_sdk.FilesystemApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_fs_find**](FilesystemApi.md#v2_fs_find) | **GET** /api/fs/find | Find files
[**v2_fs_list**](FilesystemApi.md#v2_fs_list) | **GET** /api/fs/list | List directory
[**v2_fs_read**](FilesystemApi.md#v2_fs_read) | **GET** /api/fs/read/* | Read file


# **v2_fs_find**
> V2FsList200Response v2_fs_find(query, location=location, type=type, limit=limit)

**Synchronous variant:** `v2_fs_find_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Find files

Find recursively ranked filesystem entries relative to the requested location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_fs_list200_response import V2FsList200Response
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
    api_instance = opencode_sdk.FilesystemApi(api_client)
    query = 'query_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)
    type = 'type_example' # str |  (optional)
    limit = 'limit_example' # str |  (optional)

    try:
        # Find files
        api_response = await api_instance.v2_fs_find(query, location=location, type=type, limit=limit)
        print("The response of FilesystemApi->v2_fs_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesystemApi->v2_fs_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 
 **type** | **str**|  | [optional] 
 **limit** | **str**|  | [optional] 

### Return type

[**V2FsList200Response**](V2FsList200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_fs_list**
> V2FsList200Response v2_fs_list(location=location, path=path)

**Synchronous variant:** `v2_fs_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List directory

List direct children of one directory relative to the requested location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_fs_list200_response import V2FsList200Response
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
    api_instance = opencode_sdk.FilesystemApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)
    path = 'path_example' # str |  (optional)

    try:
        # List directory
        api_response = await api_instance.v2_fs_list(location=location, path=path)
        print("The response of FilesystemApi->v2_fs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesystemApi->v2_fs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 
 **path** | **str**|  | [optional] 

### Return type

[**V2FsList200Response**](V2FsList200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_fs_read**
> bytes v2_fs_read(location=location)

**Synchronous variant:** `v2_fs_read_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Read file

Serve one file relative to the requested location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
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
    api_instance = opencode_sdk.FilesystemApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Read file
        api_response = await api_instance.v2_fs_read(location=location)
        print("The response of FilesystemApi->v2_fs_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesystemApi->v2_fs_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

**bytes**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

