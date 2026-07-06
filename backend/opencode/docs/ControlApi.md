# opencode_sdk.ControlApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_log**](ControlApi.md#app_log) | **POST** /log | Write log
[**auth_remove**](ControlApi.md#auth_remove) | **DELETE** /auth/{providerID} | Remove auth credentials
[**auth_set**](ControlApi.md#auth_set) | **PUT** /auth/{providerID} | Set auth credentials


# **app_log**
> bool app_log(directory=directory, workspace=workspace, app_log_request=app_log_request)

**Synchronous variant:** `app_log_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Write log

Write a log entry to the server logs with specified level and metadata.

### Example


```python
import opencode_sdk
from opencode_sdk.models.app_log_request import AppLogRequest
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
    api_instance = opencode_sdk.ControlApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    app_log_request = opencode_sdk.AppLogRequest() # AppLogRequest |  (optional)

    try:
        # Write log
        api_response = await api_instance.app_log(directory=directory, workspace=workspace, app_log_request=app_log_request)
        print("The response of ControlApi->app_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControlApi->app_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **app_log_request** | [**AppLogRequest**](AppLogRequest.md)|  | [optional] 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log entry written successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth_remove**
> bool auth_remove(provider_id)

**Synchronous variant:** `auth_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove auth credentials

Remove authentication credentials

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
    api_instance = opencode_sdk.ControlApi(api_client)
    provider_id = 'provider_id_example' # str | 

    try:
        # Remove auth credentials
        api_response = await api_instance.auth_remove(provider_id)
        print("The response of ControlApi->auth_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControlApi->auth_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 

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
**200** | Successfully removed authentication credentials |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auth_set**
> bool auth_set(provider_id, auth=auth)

**Synchronous variant:** `auth_set_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Set auth credentials

Set authentication credentials

### Example


```python
import opencode_sdk
from opencode_sdk.models.auth import Auth
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
    api_instance = opencode_sdk.ControlApi(api_client)
    provider_id = 'provider_id_example' # str | 
    auth = opencode_sdk.Auth() # Auth |  (optional)

    try:
        # Set auth credentials
        api_response = await api_instance.auth_set(provider_id, auth=auth)
        print("The response of ControlApi->auth_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControlApi->auth_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 
 **auth** | [**Auth**](Auth.md)|  | [optional] 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set authentication credentials |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

