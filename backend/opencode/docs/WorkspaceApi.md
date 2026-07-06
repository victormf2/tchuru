# opencode_sdk.WorkspaceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experimental_workspace_adapter_list**](WorkspaceApi.md#experimental_workspace_adapter_list) | **GET** /experimental/workspace/adapter | List workspace adapters
[**experimental_workspace_create**](WorkspaceApi.md#experimental_workspace_create) | **POST** /experimental/workspace | Create workspace
[**experimental_workspace_list**](WorkspaceApi.md#experimental_workspace_list) | **GET** /experimental/workspace | List workspaces
[**experimental_workspace_remove**](WorkspaceApi.md#experimental_workspace_remove) | **DELETE** /experimental/workspace/{id} | Remove workspace
[**experimental_workspace_status**](WorkspaceApi.md#experimental_workspace_status) | **GET** /experimental/workspace/status | Workspace status
[**experimental_workspace_sync_list**](WorkspaceApi.md#experimental_workspace_sync_list) | **POST** /experimental/workspace/sync-list | Sync workspace list
[**experimental_workspace_warp**](WorkspaceApi.md#experimental_workspace_warp) | **POST** /experimental/workspace/warp | Warp session into workspace


# **experimental_workspace_adapter_list**
> List[ExperimentalWorkspaceAdapterList200ResponseInner] experimental_workspace_adapter_list(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_workspace_adapter_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List workspace adapters

List all available workspace adapters for the current project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_workspace_adapter_list200_response_inner import ExperimentalWorkspaceAdapterList200ResponseInner
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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List workspace adapters
        api_response = await api_instance.experimental_workspace_adapter_list(directory=directory, workspace=workspace)
        print("The response of WorkspaceApi->experimental_workspace_adapter_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_adapter_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[ExperimentalWorkspaceAdapterList200ResponseInner]**](ExperimentalWorkspaceAdapterList200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace adapters |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_workspace_create**
> Workspace experimental_workspace_create(directory=directory, workspace=workspace, experimental_workspace_create_request=experimental_workspace_create_request)

**Synchronous variant:** `experimental_workspace_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create workspace

Create a workspace for the current project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_workspace_create_request import ExperimentalWorkspaceCreateRequest
from opencode_sdk.models.workspace import Workspace
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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    experimental_workspace_create_request = opencode_sdk.ExperimentalWorkspaceCreateRequest() # ExperimentalWorkspaceCreateRequest |  (optional)

    try:
        # Create workspace
        api_response = await api_instance.experimental_workspace_create(directory=directory, workspace=workspace, experimental_workspace_create_request=experimental_workspace_create_request)
        print("The response of WorkspaceApi->experimental_workspace_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **experimental_workspace_create_request** | [**ExperimentalWorkspaceCreateRequest**](ExperimentalWorkspaceCreateRequest.md)|  | [optional] 

### Return type

[**Workspace**](Workspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace created |  -  |
**400** | WorkspaceCreateError | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_workspace_list**
> List[Workspace] experimental_workspace_list(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_workspace_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List workspaces

List all workspaces.

### Example


```python
import opencode_sdk
from opencode_sdk.models.workspace import Workspace
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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List workspaces
        api_response = await api_instance.experimental_workspace_list(directory=directory, workspace=workspace)
        print("The response of WorkspaceApi->experimental_workspace_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Workspace]**](Workspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspaces |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_workspace_remove**
> Workspace experimental_workspace_remove(id, directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_workspace_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove workspace

Remove an existing workspace.

### Example


```python
import opencode_sdk
from opencode_sdk.models.workspace import Workspace
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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    id = 'id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Remove workspace
        api_response = await api_instance.experimental_workspace_remove(id, directory=directory, workspace=workspace)
        print("The response of WorkspaceApi->experimental_workspace_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Workspace**](Workspace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace removed |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_workspace_status**
> List[WorkspaceEventConnectionStatus] experimental_workspace_status(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_workspace_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Workspace status

Get connection status for workspaces in the current project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.workspace_event_connection_status import WorkspaceEventConnectionStatus
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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Workspace status
        api_response = await api_instance.experimental_workspace_status(directory=directory, workspace=workspace)
        print("The response of WorkspaceApi->experimental_workspace_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[WorkspaceEventConnectionStatus]**](WorkspaceEventConnectionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace status |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_workspace_sync_list**
> experimental_workspace_sync_list(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_workspace_sync_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Sync workspace list

Register missing workspaces returned by workspace adapters.

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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Sync workspace list
        await api_instance.experimental_workspace_sync_list(directory=directory, workspace=workspace)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_sync_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

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
**204** | Workspace list synced |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_workspace_warp**
> experimental_workspace_warp(directory=directory, workspace=workspace, experimental_workspace_warp_request=experimental_workspace_warp_request)

**Synchronous variant:** `experimental_workspace_warp_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Warp session into workspace

Move a session's sync history into the target workspace, or detach it to the local project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_workspace_warp_request import ExperimentalWorkspaceWarpRequest
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
    api_instance = opencode_sdk.WorkspaceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    experimental_workspace_warp_request = opencode_sdk.ExperimentalWorkspaceWarpRequest() # ExperimentalWorkspaceWarpRequest |  (optional)

    try:
        # Warp session into workspace
        await api_instance.experimental_workspace_warp(directory=directory, workspace=workspace, experimental_workspace_warp_request=experimental_workspace_warp_request)
    except Exception as e:
        print("Exception when calling WorkspaceApi->experimental_workspace_warp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **experimental_workspace_warp_request** | [**ExperimentalWorkspaceWarpRequest**](ExperimentalWorkspaceWarpRequest.md)|  | [optional] 

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
**204** | Session warped |  -  |
**400** | WorkspaceWarpError | VcsApplyError | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

