# opencode_sdk.PtyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pty_connect**](PtyApi.md#pty_connect) | **GET** /pty/{ptyID}/connect | Connect to PTY session
[**pty_connect_token**](PtyApi.md#pty_connect_token) | **POST** /pty/{ptyID}/connect-token | Create PTY WebSocket token
[**pty_create**](PtyApi.md#pty_create) | **POST** /pty | Create PTY session
[**pty_get**](PtyApi.md#pty_get) | **GET** /pty/{ptyID} | Get PTY session
[**pty_list**](PtyApi.md#pty_list) | **GET** /pty | List PTY sessions
[**pty_remove**](PtyApi.md#pty_remove) | **DELETE** /pty/{ptyID} | Remove PTY session
[**pty_shells**](PtyApi.md#pty_shells) | **GET** /pty/shells | List available shells
[**pty_update**](PtyApi.md#pty_update) | **PUT** /pty/{ptyID} | Update PTY session
[**v2_pty_connect**](PtyApi.md#v2_pty_connect) | **GET** /api/pty/{ptyID}/connect | Connect to PTY session
[**v2_pty_connect_token**](PtyApi.md#v2_pty_connect_token) | **POST** /api/pty/{ptyID}/connect-token | Create PTY WebSocket token
[**v2_pty_create**](PtyApi.md#v2_pty_create) | **POST** /api/pty | Create PTY session
[**v2_pty_get**](PtyApi.md#v2_pty_get) | **GET** /api/pty/{ptyID} | Get PTY session
[**v2_pty_list**](PtyApi.md#v2_pty_list) | **GET** /api/pty | List PTY sessions
[**v2_pty_remove**](PtyApi.md#v2_pty_remove) | **DELETE** /api/pty/{ptyID} | Remove PTY session
[**v2_pty_update**](PtyApi.md#v2_pty_update) | **PUT** /api/pty/{ptyID} | Update PTY session


# **pty_connect**
> bool pty_connect(pty_id, directory=directory, workspace=workspace, cursor=cursor, ticket=ticket)

**Synchronous variant:** `pty_connect_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Connect to PTY session

Establish a WebSocket connection to interact with a pseudo-terminal (PTY) session in real-time.

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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    cursor = 'cursor_example' # str |  (optional)
    ticket = 'ticket_example' # str |  (optional)

    try:
        # Connect to PTY session
        api_response = await api_instance.pty_connect(pty_id, directory=directory, workspace=workspace, cursor=cursor, ticket=ticket)
        print("The response of PtyApi->pty_connect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_connect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **cursor** | **str**|  | [optional] 
 **ticket** | **str**|  | [optional] 

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
**200** | Connected session |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_connect_token**
> PtyTicketConnectToken pty_connect_token(pty_id, directory=directory, workspace=workspace)

**Synchronous variant:** `pty_connect_token_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create PTY WebSocket token

Create a short-lived ticket for opening a PTY WebSocket connection.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty_ticket_connect_token import PtyTicketConnectToken
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Create PTY WebSocket token
        api_response = await api_instance.pty_connect_token(pty_id, directory=directory, workspace=workspace)
        print("The response of PtyApi->pty_connect_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_connect_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**PtyTicketConnectToken**](PtyTicketConnectToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WebSocket connect token |  -  |
**400** | Bad request |  -  |
**403** | PtyForbiddenError |  -  |
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_create**
> Pty pty_create(directory=directory, workspace=workspace, pty_create_request=pty_create_request)

**Synchronous variant:** `pty_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create PTY session

Create a new pseudo-terminal (PTY) session for running shell commands and processes.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty import Pty
from opencode_sdk.models.pty_create_request import PtyCreateRequest
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
    api_instance = opencode_sdk.PtyApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    pty_create_request = opencode_sdk.PtyCreateRequest() # PtyCreateRequest |  (optional)

    try:
        # Create PTY session
        api_response = await api_instance.pty_create(directory=directory, workspace=workspace, pty_create_request=pty_create_request)
        print("The response of PtyApi->pty_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **pty_create_request** | [**PtyCreateRequest**](PtyCreateRequest.md)|  | [optional] 

### Return type

[**Pty**](Pty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_get**
> Pty pty_get(pty_id, directory=directory, workspace=workspace)

**Synchronous variant:** `pty_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get PTY session

Retrieve detailed information about a specific pseudo-terminal (PTY) session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty import Pty
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get PTY session
        api_response = await api_instance.pty_get(pty_id, directory=directory, workspace=workspace)
        print("The response of PtyApi->pty_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Pty**](Pty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session info |  -  |
**400** | Bad request |  -  |
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_list**
> List[Pty] pty_list(directory=directory, workspace=workspace)

**Synchronous variant:** `pty_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List PTY sessions

Get a list of all active pseudo-terminal (PTY) sessions managed by OpenCode.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty import Pty
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
    api_instance = opencode_sdk.PtyApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List PTY sessions
        api_response = await api_instance.pty_list(directory=directory, workspace=workspace)
        print("The response of PtyApi->pty_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Pty]**](Pty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of sessions |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_remove**
> bool pty_remove(pty_id, directory=directory, workspace=workspace)

**Synchronous variant:** `pty_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove PTY session

Remove and terminate a specific pseudo-terminal (PTY) session.

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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Remove PTY session
        api_response = await api_instance.pty_remove(pty_id, directory=directory, workspace=workspace)
        print("The response of PtyApi->pty_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
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
**200** | Session removed |  -  |
**400** | Bad request |  -  |
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_shells**
> List[PtyShells200ResponseInner] pty_shells(directory=directory, workspace=workspace)

**Synchronous variant:** `pty_shells_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List available shells

Get a list of available shells on the system.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty_shells200_response_inner import PtyShells200ResponseInner
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
    api_instance = opencode_sdk.PtyApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List available shells
        api_response = await api_instance.pty_shells(directory=directory, workspace=workspace)
        print("The response of PtyApi->pty_shells:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_shells: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[PtyShells200ResponseInner]**](PtyShells200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of shells |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pty_update**
> Pty pty_update(pty_id, directory=directory, workspace=workspace, pty_update_request=pty_update_request)

**Synchronous variant:** `pty_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update PTY session

Update properties of an existing pseudo-terminal (PTY) session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty import Pty
from opencode_sdk.models.pty_update_request import PtyUpdateRequest
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    pty_update_request = opencode_sdk.PtyUpdateRequest() # PtyUpdateRequest |  (optional)

    try:
        # Update PTY session
        api_response = await api_instance.pty_update(pty_id, directory=directory, workspace=workspace, pty_update_request=pty_update_request)
        print("The response of PtyApi->pty_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->pty_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **pty_update_request** | [**PtyUpdateRequest**](PtyUpdateRequest.md)|  | [optional] 

### Return type

[**Pty**](Pty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_pty_connect**
> bool v2_pty_connect(pty_id, location_directory=location_directory, location_workspace=location_workspace, cursor=cursor, ticket=ticket)

**Synchronous variant:** `v2_pty_connect_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Connect to PTY session

Establish a WebSocket connection streaming PTY output and accepting terminal input.

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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    location_directory = 'location_directory_example' # str |  (optional)
    location_workspace = 'location_workspace_example' # str |  (optional)
    cursor = 'cursor_example' # str |  (optional)
    ticket = 'ticket_example' # str |  (optional)

    try:
        # Connect to PTY session
        api_response = await api_instance.v2_pty_connect(pty_id, location_directory=location_directory, location_workspace=location_workspace, cursor=cursor, ticket=ticket)
        print("The response of PtyApi->v2_pty_connect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_connect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **location_directory** | **str**|  | [optional] 
 **location_workspace** | **str**|  | [optional] 
 **cursor** | **str**|  | [optional] 
 **ticket** | **str**|  | [optional] 

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
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |
**403** | ForbiddenError |  -  |
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_pty_connect_token**
> V2PtyConnectToken200Response v2_pty_connect_token(pty_id, location=location)

**Synchronous variant:** `v2_pty_connect_token_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create PTY WebSocket token

Create a short-lived single-use ticket for opening a PTY WebSocket connection.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_pty_connect_token200_response import V2PtyConnectToken200Response
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Create PTY WebSocket token
        api_response = await api_instance.v2_pty_connect_token(pty_id, location=location)
        print("The response of PtyApi->v2_pty_connect_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_connect_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2PtyConnectToken200Response**](V2PtyConnectToken200Response.md)

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
**403** | ForbiddenError |  -  |
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_pty_create**
> V2PtyCreate200Response v2_pty_create(pty_create_request, location=location)

**Synchronous variant:** `v2_pty_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create PTY session

Create a pseudo-terminal session for a location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty_create_request import PtyCreateRequest
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_pty_create200_response import V2PtyCreate200Response
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_create_request = opencode_sdk.PtyCreateRequest() # PtyCreateRequest | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Create PTY session
        api_response = await api_instance.v2_pty_create(pty_create_request, location=location)
        print("The response of PtyApi->v2_pty_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_create_request** | [**PtyCreateRequest**](PtyCreateRequest.md)|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2PtyCreate200Response**](V2PtyCreate200Response.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_pty_get**
> V2PtyGet200Response v2_pty_get(pty_id, location=location)

**Synchronous variant:** `v2_pty_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get PTY session

Get one PTY session, including its exit code once exited.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_pty_get200_response import V2PtyGet200Response
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Get PTY session
        api_response = await api_instance.v2_pty_get(pty_id, location=location)
        print("The response of PtyApi->v2_pty_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2PtyGet200Response**](V2PtyGet200Response.md)

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
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_pty_list**
> V2PtyList200Response v2_pty_list(location=location)

**Synchronous variant:** `v2_pty_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List PTY sessions

List PTY sessions for a location, including exited sessions retained until removal.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_pty_list200_response import V2PtyList200Response
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
    api_instance = opencode_sdk.PtyApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List PTY sessions
        api_response = await api_instance.v2_pty_list(location=location)
        print("The response of PtyApi->v2_pty_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2PtyList200Response**](V2PtyList200Response.md)

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

# **v2_pty_remove**
> v2_pty_remove(pty_id, location=location)

**Synchronous variant:** `v2_pty_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove PTY session

Terminate and remove one PTY session.

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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Remove PTY session
        await api_instance.v2_pty_remove(pty_id, location=location)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

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
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_pty_update**
> V2PtyGet200Response v2_pty_update(pty_id, pty_update_request, location=location)

**Synchronous variant:** `v2_pty_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update PTY session

Update the title or viewport size of one PTY session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.pty_update_request import PtyUpdateRequest
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_pty_get200_response import V2PtyGet200Response
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
    api_instance = opencode_sdk.PtyApi(api_client)
    pty_id = 'pty_id_example' # str | 
    pty_update_request = opencode_sdk.PtyUpdateRequest() # PtyUpdateRequest | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Update PTY session
        api_response = await api_instance.v2_pty_update(pty_id, pty_update_request, location=location)
        print("The response of PtyApi->v2_pty_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PtyApi->v2_pty_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pty_id** | **str**|  | 
 **pty_update_request** | [**PtyUpdateRequest**](PtyUpdateRequest.md)|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2PtyGet200Response**](V2PtyGet200Response.md)

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
**404** | PtyNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

