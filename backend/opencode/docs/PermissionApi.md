# opencode_sdk.PermissionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permission_list**](PermissionApi.md#permission_list) | **GET** /permission | List pending permissions
[**permission_reply**](PermissionApi.md#permission_reply) | **POST** /permission/{requestID}/reply | Respond to permission request


# **permission_list**
> List[PermissionRequest] permission_list(directory=directory, workspace=workspace)

**Synchronous variant:** `permission_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List pending permissions

Get all pending permission requests across all sessions.

### Example


```python
import opencode_sdk
from opencode_sdk.models.permission_request import PermissionRequest
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
    api_instance = opencode_sdk.PermissionApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List pending permissions
        api_response = await api_instance.permission_list(directory=directory, workspace=workspace)
        print("The response of PermissionApi->permission_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionApi->permission_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[PermissionRequest]**](PermissionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pending permissions |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permission_reply**
> bool permission_reply(request_id, directory=directory, workspace=workspace, permission_reply_request=permission_reply_request)

**Synchronous variant:** `permission_reply_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Respond to permission request

Approve or deny a permission request from the AI assistant.

### Example


```python
import opencode_sdk
from opencode_sdk.models.permission_reply_request import PermissionReplyRequest
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
    api_instance = opencode_sdk.PermissionApi(api_client)
    request_id = 'request_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    permission_reply_request = opencode_sdk.PermissionReplyRequest() # PermissionReplyRequest |  (optional)

    try:
        # Respond to permission request
        api_response = await api_instance.permission_reply(request_id, directory=directory, workspace=workspace, permission_reply_request=permission_reply_request)
        print("The response of PermissionApi->permission_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionApi->permission_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **permission_reply_request** | [**PermissionReplyRequest**](PermissionReplyRequest.md)|  | [optional] 

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
**200** | Permission processed successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | PermissionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

