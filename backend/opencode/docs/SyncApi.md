# opencode_sdk.SyncApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sync_history_list**](SyncApi.md#sync_history_list) | **POST** /sync/history | List sync events
[**sync_replay**](SyncApi.md#sync_replay) | **POST** /sync/replay | Replay sync events
[**sync_start**](SyncApi.md#sync_start) | **POST** /sync/start | Start workspace sync
[**sync_steal**](SyncApi.md#sync_steal) | **POST** /sync/steal | Steal session into workspace


# **sync_history_list**
> List[SyncHistoryList200ResponseInner] sync_history_list(directory=directory, workspace=workspace, request_body=request_body)

**Synchronous variant:** `sync_history_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List sync events

List sync events for all aggregates. Keys are aggregate IDs the client already knows about, values are the last known sequence ID. Events with seq > value are returned for those aggregates. Aggregates not listed in the input get their full history.

### Example


```python
import opencode_sdk
from opencode_sdk.models.sync_history_list200_response_inner import SyncHistoryList200ResponseInner
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
    api_instance = opencode_sdk.SyncApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    request_body = {'key': 56} # Dict[str, int] |  (optional)

    try:
        # List sync events
        api_response = await api_instance.sync_history_list(directory=directory, workspace=workspace, request_body=request_body)
        print("The response of SyncApi->sync_history_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncApi->sync_history_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **request_body** | [**Dict[str, int]**](int.md)|  | [optional] 

### Return type

[**List[SyncHistoryList200ResponseInner]**](SyncHistoryList200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sync events |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_replay**
> SyncReplay200Response sync_replay(directory=directory, workspace=workspace, sync_replay_request=sync_replay_request)

**Synchronous variant:** `sync_replay_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Replay sync events

Validate and replay a complete sync event history.

### Example


```python
import opencode_sdk
from opencode_sdk.models.sync_replay200_response import SyncReplay200Response
from opencode_sdk.models.sync_replay_request import SyncReplayRequest
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
    api_instance = opencode_sdk.SyncApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    sync_replay_request = opencode_sdk.SyncReplayRequest() # SyncReplayRequest |  (optional)

    try:
        # Replay sync events
        api_response = await api_instance.sync_replay(directory=directory, workspace=workspace, sync_replay_request=sync_replay_request)
        print("The response of SyncApi->sync_replay:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncApi->sync_replay: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **sync_replay_request** | [**SyncReplayRequest**](SyncReplayRequest.md)|  | [optional] 

### Return type

[**SyncReplay200Response**](SyncReplay200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Replayed sync events |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_start**
> bool sync_start(directory=directory, workspace=workspace)

**Synchronous variant:** `sync_start_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Start workspace sync

Start sync loops for workspaces in the current project that have active sessions.

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
    api_instance = opencode_sdk.SyncApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Start workspace sync
        api_response = await api_instance.sync_start(directory=directory, workspace=workspace)
        print("The response of SyncApi->sync_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncApi->sync_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | Workspace sync started |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_steal**
> SyncSteal200Response sync_steal(directory=directory, workspace=workspace, sync_steal_request=sync_steal_request)

**Synchronous variant:** `sync_steal_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Steal session into workspace

Update a session to belong to the current workspace through the sync event system.

### Example


```python
import opencode_sdk
from opencode_sdk.models.sync_steal200_response import SyncSteal200Response
from opencode_sdk.models.sync_steal_request import SyncStealRequest
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
    api_instance = opencode_sdk.SyncApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    sync_steal_request = opencode_sdk.SyncStealRequest() # SyncStealRequest |  (optional)

    try:
        # Steal session into workspace
        api_response = await api_instance.sync_steal(directory=directory, workspace=workspace, sync_steal_request=sync_steal_request)
        print("The response of SyncApi->sync_steal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncApi->sync_steal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **sync_steal_request** | [**SyncStealRequest**](SyncStealRequest.md)|  | [optional] 

### Return type

[**SyncSteal200Response**](SyncSteal200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session stolen into workspace |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

