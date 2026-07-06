# opencode_sdk.SessionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_session_active**](SessionsApi.md#v2_session_active) | **GET** /api/session/active | List active sessions
[**v2_session_compact**](SessionsApi.md#v2_session_compact) | **POST** /api/session/{sessionID}/compact | Compact session
[**v2_session_context**](SessionsApi.md#v2_session_context) | **GET** /api/session/{sessionID}/context | Get session context
[**v2_session_create**](SessionsApi.md#v2_session_create) | **POST** /api/session | Create session
[**v2_session_events**](SessionsApi.md#v2_session_events) | **GET** /api/session/{sessionID}/event | Subscribe to session events
[**v2_session_get**](SessionsApi.md#v2_session_get) | **GET** /api/session/{sessionID} | Get session
[**v2_session_history**](SessionsApi.md#v2_session_history) | **GET** /api/session/{sessionID}/history | Get session history
[**v2_session_interrupt**](SessionsApi.md#v2_session_interrupt) | **POST** /api/session/{sessionID}/interrupt | Interrupt session execution
[**v2_session_list**](SessionsApi.md#v2_session_list) | **GET** /api/session | List sessions
[**v2_session_message**](SessionsApi.md#v2_session_message) | **GET** /api/session/{sessionID}/message/{messageID} | Get session message
[**v2_session_prompt**](SessionsApi.md#v2_session_prompt) | **POST** /api/session/{sessionID}/prompt | Send message
[**v2_session_revert_clear**](SessionsApi.md#v2_session_revert_clear) | **POST** /api/session/{sessionID}/revert/clear | Clear staged revert
[**v2_session_revert_commit**](SessionsApi.md#v2_session_revert_commit) | **POST** /api/session/{sessionID}/revert/commit | Commit staged revert
[**v2_session_revert_stage**](SessionsApi.md#v2_session_revert_stage) | **POST** /api/session/{sessionID}/revert/stage | Stage session revert
[**v2_session_switch_agent**](SessionsApi.md#v2_session_switch_agent) | **POST** /api/session/{sessionID}/agent | Switch session agent
[**v2_session_switch_model**](SessionsApi.md#v2_session_switch_model) | **POST** /api/session/{sessionID}/model | Switch session model
[**v2_session_wait**](SessionsApi.md#v2_session_wait) | **POST** /api/session/{sessionID}/wait | Wait for session


# **v2_session_active**
> V2SessionActive200Response v2_session_active()

**Synchronous variant:** `v2_session_active_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List active sessions

Retrieve foreground Session drains currently owned by this OpenCode process. Sessions absent from the result are inactive.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_active200_response import V2SessionActive200Response
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
    api_instance = opencode_sdk.SessionsApi(api_client)

    try:
        # List active sessions
        api_response = await api_instance.v2_session_active()
        print("The response of SessionsApi->v2_session_active:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_active: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**V2SessionActive200Response**](V2SessionActive200Response.md)

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

# **v2_session_compact**
> v2_session_compact(session_id)

**Synchronous variant:** `v2_session_compact_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Compact session

Compact a session conversation.

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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Compact session
        await api_instance.v2_session_compact(session_id)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_compact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

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
**404** | SessionNotFoundError |  -  |
**503** | ServiceUnavailableError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_context**
> V2SessionContext200Response v2_session_context(session_id)

**Synchronous variant:** `v2_session_context_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session context

Retrieve the active context messages for a session (all messages after the last compaction).

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_context200_response import V2SessionContext200Response
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Get session context
        api_response = await api_instance.v2_session_context(session_id)
        print("The response of SessionsApi->v2_session_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

### Return type

[**V2SessionContext200Response**](V2SessionContext200Response.md)

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
**500** | UnknownError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_create**
> V2SessionCreate200Response v2_session_create(v2_session_create_request)

**Synchronous variant:** `v2_session_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create session

Create a session at the requested location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_create200_response import V2SessionCreate200Response
from opencode_sdk.models.v2_session_create_request import V2SessionCreateRequest
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    v2_session_create_request = opencode_sdk.V2SessionCreateRequest() # V2SessionCreateRequest | 

    try:
        # Create session
        api_response = await api_instance.v2_session_create(v2_session_create_request)
        print("The response of SessionsApi->v2_session_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2_session_create_request** | [**V2SessionCreateRequest**](V2SessionCreateRequest.md)|  | 

### Return type

[**V2SessionCreate200Response**](V2SessionCreate200Response.md)

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

# **v2_session_events**
> V2SessionEvents200Response v2_session_events(session_id, after=after)

**Synchronous variant:** `v2_session_events_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Subscribe to session events

Replay durable events after an aggregate sequence, then continue with new durable events.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_events200_response import V2SessionEvents200Response
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    after = 'after_example' # str |  (optional)

    try:
        # Subscribe to session events
        api_response = await api_instance.v2_session_events(session_id, after=after)
        print("The response of SessionsApi->v2_session_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **after** | **str**|  | [optional] 

### Return type

[**V2SessionEvents200Response**](V2SessionEvents200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_get**
> V2SessionGet200Response v2_session_get(session_id)

**Synchronous variant:** `v2_session_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session

Retrieve a session by ID.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_get200_response import V2SessionGet200Response
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Get session
        api_response = await api_instance.v2_session_get(session_id)
        print("The response of SessionsApi->v2_session_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

### Return type

[**V2SessionGet200Response**](V2SessionGet200Response.md)

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

# **v2_session_history**
> SessionHistory v2_session_history(session_id, limit=limit, after=after)

**Synchronous variant:** `v2_session_history_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session history

Read one finite page of public durable Session events after an exclusive aggregate sequence. Newly committed events may appear on later pages.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_history import SessionHistory
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    limit = 'limit_example' # str |  (optional)
    after = 'after_example' # str |  (optional)

    try:
        # Get session history
        api_response = await api_instance.v2_session_history(session_id, limit=limit, after=after)
        print("The response of SessionsApi->v2_session_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **limit** | **str**|  | [optional] 
 **after** | **str**|  | [optional] 

### Return type

[**SessionHistory**](SessionHistory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SessionHistory |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_interrupt**
> v2_session_interrupt(session_id)

**Synchronous variant:** `v2_session_interrupt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Interrupt session execution

Interrupt active execution owned by this OpenCode process. Idle interruption is a no-op.

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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Interrupt session execution
        await api_instance.v2_session_interrupt(session_id)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_interrupt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

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
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_list**
> SessionsResponse v2_session_list(workspace=workspace, limit=limit, order=order, search=search, directory=directory, project=project, subpath=subpath, cursor=cursor)

**Synchronous variant:** `v2_session_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List sessions

Retrieve sessions in the requested order. Items keep that order across pages; use cursor.next or cursor.previous to move through the ordered list.

### Example


```python
import opencode_sdk
from opencode_sdk.models.sessions_response import SessionsResponse
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    workspace = 'workspace_example' # str |  (optional)
    limit = 3.4 # float |  (optional)
    order = 'order_example' # str |  (optional)
    search = 'search_example' # str |  (optional)
    directory = 'directory_example' # str |  (optional)
    project = 'project_example' # str |  (optional)
    subpath = 'subpath_example' # str |  (optional)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # List sessions
        api_response = await api_instance.v2_session_list(workspace=workspace, limit=limit, order=order, search=search, directory=directory, project=project, subpath=subpath, cursor=cursor)
        print("The response of SessionsApi->v2_session_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] 
 **order** | **str**|  | [optional] 
 **search** | **str**|  | [optional] 
 **directory** | **str**|  | [optional] 
 **project** | **str**|  | [optional] 
 **subpath** | **str**|  | [optional] 
 **cursor** | **str**|  | [optional] 

### Return type

[**SessionsResponse**](SessionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SessionsResponse |  -  |
**400** | InvalidCursorError | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_message**
> V2SessionMessage200Response v2_session_message(session_id, message_id)

**Synchronous variant:** `v2_session_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session message

Retrieve one projected message owned by the Session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_message200_response import V2SessionMessage200Response
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    message_id = 'message_id_example' # str | 

    try:
        # Get session message
        api_response = await api_instance.v2_session_message(session_id, message_id)
        print("The response of SessionsApi->v2_session_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **message_id** | **str**|  | 

### Return type

[**V2SessionMessage200Response**](V2SessionMessage200Response.md)

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
**404** | SessionNotFoundError | MessageNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_prompt**
> V2SessionPrompt200Response v2_session_prompt(session_id, v2_session_prompt_request)

**Synchronous variant:** `v2_session_prompt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Send message

Durably admit one session input and schedule agent-loop execution unless resume is false.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_prompt200_response import V2SessionPrompt200Response
from opencode_sdk.models.v2_session_prompt_request import V2SessionPromptRequest
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    v2_session_prompt_request = opencode_sdk.V2SessionPromptRequest() # V2SessionPromptRequest | 

    try:
        # Send message
        api_response = await api_instance.v2_session_prompt(session_id, v2_session_prompt_request)
        print("The response of SessionsApi->v2_session_prompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_prompt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **v2_session_prompt_request** | [**V2SessionPromptRequest**](V2SessionPromptRequest.md)|  | 

### Return type

[**V2SessionPrompt200Response**](V2SessionPrompt200Response.md)

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
**409** | ConflictError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_revert_clear**
> v2_session_revert_clear(session_id)

**Synchronous variant:** `v2_session_revert_clear_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Clear staged revert

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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Clear staged revert
        await api_instance.v2_session_revert_clear(session_id)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_revert_clear: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

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
**404** | SessionNotFoundError |  -  |
**500** | UnknownError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_revert_commit**
> v2_session_revert_commit(session_id)

**Synchronous variant:** `v2_session_revert_commit_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Commit staged revert

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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Commit staged revert
        await api_instance.v2_session_revert_commit(session_id)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_revert_commit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

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
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_revert_stage**
> V2SessionRevertStage200Response v2_session_revert_stage(session_id, v2_session_revert_stage_request)

**Synchronous variant:** `v2_session_revert_stage_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Stage session revert

Stage or move a reversible session boundary and optionally apply its file changes.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_revert_stage200_response import V2SessionRevertStage200Response
from opencode_sdk.models.v2_session_revert_stage_request import V2SessionRevertStageRequest
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    v2_session_revert_stage_request = opencode_sdk.V2SessionRevertStageRequest() # V2SessionRevertStageRequest | 

    try:
        # Stage session revert
        api_response = await api_instance.v2_session_revert_stage(session_id, v2_session_revert_stage_request)
        print("The response of SessionsApi->v2_session_revert_stage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_revert_stage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **v2_session_revert_stage_request** | [**V2SessionRevertStageRequest**](V2SessionRevertStageRequest.md)|  | 

### Return type

[**V2SessionRevertStage200Response**](V2SessionRevertStage200Response.md)

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
**404** | MessageNotFoundError | SessionNotFoundError |  -  |
**500** | UnknownError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_switch_agent**
> v2_session_switch_agent(session_id, v2_session_switch_agent_request)

**Synchronous variant:** `v2_session_switch_agent_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Switch session agent

Switch the agent used by subsequent provider turns.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_switch_agent_request import V2SessionSwitchAgentRequest
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    v2_session_switch_agent_request = opencode_sdk.V2SessionSwitchAgentRequest() # V2SessionSwitchAgentRequest | 

    try:
        # Switch session agent
        await api_instance.v2_session_switch_agent(session_id, v2_session_switch_agent_request)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_switch_agent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **v2_session_switch_agent_request** | [**V2SessionSwitchAgentRequest**](V2SessionSwitchAgentRequest.md)|  | 

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
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_switch_model**
> v2_session_switch_model(session_id, v2_session_switch_model_request)

**Synchronous variant:** `v2_session_switch_model_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Switch session model

Switch the model used by subsequent provider turns.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_switch_model_request import V2SessionSwitchModelRequest
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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 
    v2_session_switch_model_request = opencode_sdk.V2SessionSwitchModelRequest() # V2SessionSwitchModelRequest | 

    try:
        # Switch session model
        await api_instance.v2_session_switch_model(session_id, v2_session_switch_model_request)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_switch_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **v2_session_switch_model_request** | [**V2SessionSwitchModelRequest**](V2SessionSwitchModelRequest.md)|  | 

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
**404** | SessionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_wait**
> v2_session_wait(session_id)

**Synchronous variant:** `v2_session_wait_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Wait for session

Wait for a session agent loop to become idle.

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
    api_instance = opencode_sdk.SessionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # Wait for session
        await api_instance.v2_session_wait(session_id)
    except Exception as e:
        print("Exception when calling SessionsApi->v2_session_wait: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

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
**404** | SessionNotFoundError |  -  |
**503** | ServiceUnavailableError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

