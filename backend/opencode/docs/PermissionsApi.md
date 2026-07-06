# opencode_sdk.PermissionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_permission_request_list**](PermissionsApi.md#v2_permission_request_list) | **GET** /api/permission/request | List pending permission requests
[**v2_permission_saved_list**](PermissionsApi.md#v2_permission_saved_list) | **GET** /api/permission/saved | List saved permissions
[**v2_permission_saved_remove**](PermissionsApi.md#v2_permission_saved_remove) | **DELETE** /api/permission/saved/{id} | Remove saved permission
[**v2_session_permission_create**](PermissionsApi.md#v2_session_permission_create) | **POST** /api/session/{sessionID}/permission | Create permission request
[**v2_session_permission_get**](PermissionsApi.md#v2_session_permission_get) | **GET** /api/session/{sessionID}/permission/{requestID} | Get permission request
[**v2_session_permission_list**](PermissionsApi.md#v2_session_permission_list) | **GET** /api/session/{sessionID}/permission | List session permission requests
[**v2_session_permission_reply**](PermissionsApi.md#v2_session_permission_reply) | **POST** /api/session/{sessionID}/permission/{requestID}/reply | Reply to pending permission request


# **v2_permission_request_list**
> V2PermissionRequestList200Response v2_permission_request_list(location=location)

**Synchronous variant:** `v2_permission_request_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List pending permission requests

Retrieve pending permission requests for a location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_permission_request_list200_response import V2PermissionRequestList200Response
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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List pending permission requests
        api_response = await api_instance.v2_permission_request_list(location=location)
        print("The response of PermissionsApi->v2_permission_request_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_permission_request_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2PermissionRequestList200Response**](V2PermissionRequestList200Response.md)

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

# **v2_permission_saved_list**
> V2PermissionSavedList200Response v2_permission_saved_list(project_id=project_id)

**Synchronous variant:** `v2_permission_saved_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List saved permissions

Retrieve saved permissions, optionally filtered by project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_permission_saved_list200_response import V2PermissionSavedList200Response
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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    project_id = 'project_id_example' # str |  (optional)

    try:
        # List saved permissions
        api_response = await api_instance.v2_permission_saved_list(project_id=project_id)
        print("The response of PermissionsApi->v2_permission_saved_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_permission_saved_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | [optional] 

### Return type

[**V2PermissionSavedList200Response**](V2PermissionSavedList200Response.md)

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

# **v2_permission_saved_remove**
> v2_permission_saved_remove(id)

**Synchronous variant:** `v2_permission_saved_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove saved permission

Remove a saved permission by ID.

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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Remove saved permission
        await api_instance.v2_permission_saved_remove(id)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_permission_saved_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | &lt;No Content&gt; |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_permission_create**
> V2SessionPermissionCreate200Response v2_session_permission_create(session_id, v2_session_permission_create_request)

**Synchronous variant:** `v2_session_permission_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create permission request

Evaluate and, when approval is required, create a permission request for a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_permission_create200_response import V2SessionPermissionCreate200Response
from opencode_sdk.models.v2_session_permission_create_request import V2SessionPermissionCreateRequest
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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    session_id = 'session_id_example' # str | 
    v2_session_permission_create_request = opencode_sdk.V2SessionPermissionCreateRequest() # V2SessionPermissionCreateRequest | 

    try:
        # Create permission request
        api_response = await api_instance.v2_session_permission_create(session_id, v2_session_permission_create_request)
        print("The response of PermissionsApi->v2_session_permission_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_session_permission_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **v2_session_permission_create_request** | [**V2SessionPermissionCreateRequest**](V2SessionPermissionCreateRequest.md)|  | 

### Return type

[**V2SessionPermissionCreate200Response**](V2SessionPermissionCreate200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_permission_get**
> V2SessionPermissionGet200Response v2_session_permission_get(session_id, request_id)

**Synchronous variant:** `v2_session_permission_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get permission request

Retrieve a pending permission request owned by a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_permission_get200_response import V2SessionPermissionGet200Response
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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    session_id = 'session_id_example' # str | 
    request_id = 'request_id_example' # str | 

    try:
        # Get permission request
        api_response = await api_instance.v2_session_permission_get(session_id, request_id)
        print("The response of PermissionsApi->v2_session_permission_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_session_permission_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **request_id** | **str**|  | 

### Return type

[**V2SessionPermissionGet200Response**](V2SessionPermissionGet200Response.md)

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
**404** | SessionNotFoundError | PermissionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_permission_list**
> V2SessionPermissionList200Response v2_session_permission_list(session_id)

**Synchronous variant:** `v2_session_permission_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List session permission requests

Retrieve pending permission requests owned by a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_permission_list200_response import V2SessionPermissionList200Response
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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # List session permission requests
        api_response = await api_instance.v2_session_permission_list(session_id)
        print("The response of PermissionsApi->v2_session_permission_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_session_permission_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

### Return type

[**V2SessionPermissionList200Response**](V2SessionPermissionList200Response.md)

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
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_permission_reply**
> v2_session_permission_reply(session_id, request_id, v2_session_permission_reply_request)

**Synchronous variant:** `v2_session_permission_reply_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reply to pending permission request

Respond to a pending permission request owned by a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_permission_reply_request import V2SessionPermissionReplyRequest
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
    api_instance = opencode_sdk.PermissionsApi(api_client)
    session_id = 'session_id_example' # str | 
    request_id = 'request_id_example' # str | 
    v2_session_permission_reply_request = opencode_sdk.V2SessionPermissionReplyRequest() # V2SessionPermissionReplyRequest | 

    try:
        # Reply to pending permission request
        await api_instance.v2_session_permission_reply(session_id, request_id, v2_session_permission_reply_request)
    except Exception as e:
        print("Exception when calling PermissionsApi->v2_session_permission_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **request_id** | **str**|  | 
 **v2_session_permission_reply_request** | [**V2SessionPermissionReplyRequest**](V2SessionPermissionReplyRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | &lt;No Content&gt; |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |
**404** | SessionNotFoundError | PermissionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

