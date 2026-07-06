# opencode_sdk.SessionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**part_delete**](SessionApi.md#part_delete) | **DELETE** /session/{sessionID}/message/{messageID}/part/{partID} | 
[**part_update**](SessionApi.md#part_update) | **PATCH** /session/{sessionID}/message/{messageID}/part/{partID} | 
[**permission_respond**](SessionApi.md#permission_respond) | **POST** /session/{sessionID}/permissions/{permissionID} | Respond to permission
[**session_abort**](SessionApi.md#session_abort) | **POST** /session/{sessionID}/abort | Abort session
[**session_children**](SessionApi.md#session_children) | **GET** /session/{sessionID}/children | Get session children
[**session_command**](SessionApi.md#session_command) | **POST** /session/{sessionID}/command | Send command
[**session_create**](SessionApi.md#session_create) | **POST** /session | Create session
[**session_delete**](SessionApi.md#session_delete) | **DELETE** /session/{sessionID} | Delete session
[**session_delete_message**](SessionApi.md#session_delete_message) | **DELETE** /session/{sessionID}/message/{messageID} | Delete message
[**session_diff**](SessionApi.md#session_diff) | **GET** /session/{sessionID}/diff | Get message diff
[**session_fork**](SessionApi.md#session_fork) | **POST** /session/{sessionID}/fork | Fork session
[**session_get**](SessionApi.md#session_get) | **GET** /session/{sessionID} | Get session
[**session_init**](SessionApi.md#session_init) | **POST** /session/{sessionID}/init | Initialize session
[**session_list**](SessionApi.md#session_list) | **GET** /session | List sessions
[**session_message**](SessionApi.md#session_message) | **GET** /session/{sessionID}/message/{messageID} | Get message
[**session_messages**](SessionApi.md#session_messages) | **GET** /session/{sessionID}/message | Get session messages
[**session_prompt**](SessionApi.md#session_prompt) | **POST** /session/{sessionID}/message | Send message
[**session_prompt_async**](SessionApi.md#session_prompt_async) | **POST** /session/{sessionID}/prompt_async | Send async message
[**session_revert**](SessionApi.md#session_revert) | **POST** /session/{sessionID}/revert | Revert message
[**session_share**](SessionApi.md#session_share) | **POST** /session/{sessionID}/share | Share session
[**session_shell**](SessionApi.md#session_shell) | **POST** /session/{sessionID}/shell | Run shell command
[**session_status**](SessionApi.md#session_status) | **GET** /session/status | Get session status
[**session_summarize**](SessionApi.md#session_summarize) | **POST** /session/{sessionID}/summarize | Summarize session
[**session_todo**](SessionApi.md#session_todo) | **GET** /session/{sessionID}/todo | Get session todos
[**session_unrevert**](SessionApi.md#session_unrevert) | **POST** /session/{sessionID}/unrevert | Restore reverted messages
[**session_unshare**](SessionApi.md#session_unshare) | **DELETE** /session/{sessionID}/share | Unshare session
[**session_update**](SessionApi.md#session_update) | **PATCH** /session/{sessionID} | Update session


# **part_delete**
> bool part_delete(session_id, message_id, part_id, directory=directory, workspace=workspace)

**Synchronous variant:** `part_delete_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete a part from a message.

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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    message_id = 'message_id_example' # str | 
    part_id = 'part_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        api_response = await api_instance.part_delete(session_id, message_id, part_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->part_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->part_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **message_id** | **str**|  | 
 **part_id** | **str**|  | 
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
**200** | Successfully deleted part |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **part_update**
> Part part_update(session_id, message_id, part_id, directory=directory, workspace=workspace, part=part)

**Synchronous variant:** `part_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update a part in a message.

### Example


```python
import opencode_sdk
from opencode_sdk.models.part import Part
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    message_id = 'message_id_example' # str | 
    part_id = 'part_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    part = opencode_sdk.Part() # Part |  (optional)

    try:
        api_response = await api_instance.part_update(session_id, message_id, part_id, directory=directory, workspace=workspace, part=part)
        print("The response of SessionApi->part_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->part_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **message_id** | **str**|  | 
 **part_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **part** | [**Part**](Part.md)|  | [optional] 

### Return type

[**Part**](Part.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated part |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permission_respond**
> bool permission_respond(session_id, permission_id, directory=directory, workspace=workspace, permission_respond_request=permission_respond_request)

**Synchronous variant:** `permission_respond_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Respond to permission

Approve or deny a permission request from the AI assistant.

### Example


```python
import opencode_sdk
from opencode_sdk.models.permission_respond_request import PermissionRespondRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    permission_id = 'permission_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    permission_respond_request = opencode_sdk.PermissionRespondRequest() # PermissionRespondRequest |  (optional)

    try:
        # Respond to permission
        api_response = await api_instance.permission_respond(session_id, permission_id, directory=directory, workspace=workspace, permission_respond_request=permission_respond_request)
        print("The response of SessionApi->permission_respond:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->permission_respond: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **permission_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **permission_respond_request** | [**PermissionRespondRequest**](PermissionRespondRequest.md)|  | [optional] 

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
**404** | NotFoundError | PermissionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_abort**
> bool session_abort(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_abort_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Abort session

Abort an active session and stop any ongoing AI processing or command execution.

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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Abort session
        api_response = await api_instance.session_abort(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_abort:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_abort: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
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
**200** | Aborted session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_children**
> List[Session] session_children(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_children_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session children

Retrieve all child sessions that were forked from the specified parent session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get session children
        api_response = await api_instance.session_children(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_children:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_children: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Session]**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of children |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_command**
> SessionPrompt200Response session_command(session_id, directory=directory, workspace=workspace, session_command_request=session_command_request)

**Synchronous variant:** `session_command_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Send command

Send a new command to a session for execution by the AI assistant.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_command_request import SessionCommandRequest
from opencode_sdk.models.session_prompt200_response import SessionPrompt200Response
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_command_request = opencode_sdk.SessionCommandRequest() # SessionCommandRequest |  (optional)

    try:
        # Send command
        api_response = await api_instance.session_command(session_id, directory=directory, workspace=workspace, session_command_request=session_command_request)
        print("The response of SessionApi->session_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_command_request** | [**SessionCommandRequest**](SessionCommandRequest.md)|  | [optional] 

### Return type

[**SessionPrompt200Response**](SessionPrompt200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created message |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_create**
> Session session_create(directory=directory, workspace=workspace, session_create_request=session_create_request)

**Synchronous variant:** `session_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create session

Create a new OpenCode session for interacting with AI assistants and managing conversations.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
from opencode_sdk.models.session_create_request import SessionCreateRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_create_request = opencode_sdk.SessionCreateRequest() # SessionCreateRequest |  (optional)

    try:
        # Create session
        api_response = await api_instance.session_create(directory=directory, workspace=workspace, session_create_request=session_create_request)
        print("The response of SessionApi->session_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_create_request** | [**SessionCreateRequest**](SessionCreateRequest.md)|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_delete**
> bool session_delete(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_delete_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete session

Delete a session and permanently remove all associated data, including messages and history.

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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Delete session
        api_response = await api_instance.session_delete(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
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
**200** | Successfully deleted session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_delete_message**
> bool session_delete_message(session_id, message_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_delete_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Delete message

Permanently delete a specific message and all of its parts from a session without reverting file changes.

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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    message_id = 'message_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Delete message
        api_response = await api_instance.session_delete_message(session_id, message_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_delete_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_delete_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **message_id** | **str**|  | 
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
**200** | Successfully deleted message |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |
**409** | SessionBusyError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_diff**
> List[SnapshotFileDiff] session_diff(session_id, directory=directory, workspace=workspace, message_id=message_id)

**Synchronous variant:** `session_diff_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get message diff

Get the file changes (diff) that resulted from a specific user message in the session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.snapshot_file_diff import SnapshotFileDiff
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    message_id = 'message_id_example' # str |  (optional)

    try:
        # Get message diff
        api_response = await api_instance.session_diff(session_id, directory=directory, workspace=workspace, message_id=message_id)
        print("The response of SessionApi->session_diff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_diff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **message_id** | **str**|  | [optional] 

### Return type

[**List[SnapshotFileDiff]**](SnapshotFileDiff.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved diff |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_fork**
> Session session_fork(session_id, directory=directory, workspace=workspace, session_fork_request=session_fork_request)

**Synchronous variant:** `session_fork_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Fork session

Create a new session by forking an existing session at a specific message point.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
from opencode_sdk.models.session_fork_request import SessionForkRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_fork_request = opencode_sdk.SessionForkRequest() # SessionForkRequest |  (optional)

    try:
        # Fork session
        api_response = await api_instance.session_fork(session_id, directory=directory, workspace=workspace, session_fork_request=session_fork_request)
        print("The response of SessionApi->session_fork:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_fork: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_fork_request** | [**SessionForkRequest**](SessionForkRequest.md)|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_get**
> Session session_get(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session

Retrieve detailed information about a specific OpenCode session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get session
        api_response = await api_instance.session_get(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_init**
> bool session_init(session_id, directory=directory, workspace=workspace, session_init_request=session_init_request)

**Synchronous variant:** `session_init_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Initialize session

Analyze the current application and create an AGENTS.md file with project-specific agent configurations.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_init_request import SessionInitRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_init_request = opencode_sdk.SessionInitRequest() # SessionInitRequest |  (optional)

    try:
        # Initialize session
        api_response = await api_instance.session_init(session_id, directory=directory, workspace=workspace, session_init_request=session_init_request)
        print("The response of SessionApi->session_init:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_init: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_init_request** | [**SessionInitRequest**](SessionInitRequest.md)|  | [optional] 

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
**200** | 200 |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_list**
> List[Session] session_list(directory=directory, workspace=workspace, scope=scope, path=path, roots=roots, start=start, search=search, limit=limit)

**Synchronous variant:** `session_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List sessions

Get a list of all OpenCode sessions, sorted by most recently updated.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
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
    api_instance = opencode_sdk.SessionApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    scope = 'scope_example' # str |  (optional)
    path = 'path_example' # str |  (optional)
    roots = opencode_sdk.ExperimentalSessionListRootsParameter() # ExperimentalSessionListRootsParameter |  (optional)
    start = 3.4 # float |  (optional)
    search = 'search_example' # str |  (optional)
    limit = 3.4 # float |  (optional)

    try:
        # List sessions
        api_response = await api_instance.session_list(directory=directory, workspace=workspace, scope=scope, path=path, roots=roots, start=start, search=search, limit=limit)
        print("The response of SessionApi->session_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **scope** | **str**|  | [optional] 
 **path** | **str**|  | [optional] 
 **roots** | [**ExperimentalSessionListRootsParameter**](.md)|  | [optional] 
 **start** | **float**|  | [optional] 
 **search** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] 

### Return type

[**List[Session]**](Session.md)

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

# **session_message**
> SessionMessage200Response session_message(session_id, message_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_message_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get message

Retrieve a specific message from a session by its message ID.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_message200_response import SessionMessage200Response
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    message_id = 'message_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get message
        api_response = await api_instance.session_message(session_id, message_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **message_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**SessionMessage200Response**](SessionMessage200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Message |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_messages**
> List[SessionMessages200ResponseInner] session_messages(session_id, directory=directory, workspace=workspace, limit=limit, before=before)

**Synchronous variant:** `session_messages_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session messages

Retrieve all messages in a session, including user prompts and AI responses.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_messages200_response_inner import SessionMessages200ResponseInner
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    limit = 56 # int |  (optional)
    before = 'before_example' # str |  (optional)

    try:
        # Get session messages
        api_response = await api_instance.session_messages(session_id, directory=directory, workspace=workspace, limit=limit, before=before)
        print("The response of SessionApi->session_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] 
 **before** | **str**|  | [optional] 

### Return type

[**List[SessionMessages200ResponseInner]**](SessionMessages200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of messages |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_prompt**
> SessionPrompt200Response session_prompt(session_id, directory=directory, workspace=workspace, session_prompt_request=session_prompt_request)

**Synchronous variant:** `session_prompt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Send message

Create and send a new message to a session, streaming the AI response.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_prompt200_response import SessionPrompt200Response
from opencode_sdk.models.session_prompt_request import SessionPromptRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_prompt_request = opencode_sdk.SessionPromptRequest() # SessionPromptRequest |  (optional)

    try:
        # Send message
        api_response = await api_instance.session_prompt(session_id, directory=directory, workspace=workspace, session_prompt_request=session_prompt_request)
        print("The response of SessionApi->session_prompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_prompt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_prompt_request** | [**SessionPromptRequest**](SessionPromptRequest.md)|  | [optional] 

### Return type

[**SessionPrompt200Response**](SessionPrompt200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created message |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_prompt_async**
> session_prompt_async(session_id, directory=directory, workspace=workspace, session_prompt_async_request=session_prompt_async_request)

**Synchronous variant:** `session_prompt_async_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Send async message

Create and send a new message to a session asynchronously, starting the session if needed and returning immediately.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_prompt_async_request import SessionPromptAsyncRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_prompt_async_request = opencode_sdk.SessionPromptAsyncRequest() # SessionPromptAsyncRequest |  (optional)

    try:
        # Send async message
        await api_instance.session_prompt_async(session_id, directory=directory, workspace=workspace, session_prompt_async_request=session_prompt_async_request)
    except Exception as e:
        print("Exception when calling SessionApi->session_prompt_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_prompt_async_request** | [**SessionPromptAsyncRequest**](SessionPromptAsyncRequest.md)|  | [optional] 

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
**204** | Prompt accepted |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_revert**
> Session session_revert(session_id, directory=directory, workspace=workspace, session_revert_request=session_revert_request)

**Synchronous variant:** `session_revert_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Revert message

Revert a specific message in a session, undoing its effects and restoring the previous state.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
from opencode_sdk.models.session_revert_request import SessionRevertRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_revert_request = opencode_sdk.SessionRevertRequest() # SessionRevertRequest |  (optional)

    try:
        # Revert message
        api_response = await api_instance.session_revert(session_id, directory=directory, workspace=workspace, session_revert_request=session_revert_request)
        print("The response of SessionApi->session_revert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_revert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_revert_request** | [**SessionRevertRequest**](SessionRevertRequest.md)|  | [optional] 

### Return type

[**Session**](Session.md)

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
**404** | NotFoundError |  -  |
**409** | SessionBusyError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_share**
> Session session_share(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_share_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Share session

Create a shareable link for a session, allowing others to view the conversation.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Share session
        api_response = await api_instance.session_share(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully shared session |  -  |
**400** | Bad request |  -  |
**404** | NotFoundError |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_shell**
> SessionShell200Response session_shell(session_id, directory=directory, workspace=workspace, session_shell_request=session_shell_request)

**Synchronous variant:** `session_shell_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Run shell command

Execute a shell command within the session context and return the AI's response.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_shell200_response import SessionShell200Response
from opencode_sdk.models.session_shell_request import SessionShellRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_shell_request = opencode_sdk.SessionShellRequest() # SessionShellRequest |  (optional)

    try:
        # Run shell command
        api_response = await api_instance.session_shell(session_id, directory=directory, workspace=workspace, session_shell_request=session_shell_request)
        print("The response of SessionApi->session_shell:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_shell: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_shell_request** | [**SessionShellRequest**](SessionShellRequest.md)|  | [optional] 

### Return type

[**SessionShell200Response**](SessionShell200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created message |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |
**409** | SessionBusyError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_status**
> Dict[str, SessionStatus] session_status(directory=directory, workspace=workspace)

**Synchronous variant:** `session_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session status

Retrieve the current status of all sessions, including active, idle, and completed states.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_status import SessionStatus
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
    api_instance = opencode_sdk.SessionApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get session status
        api_response = await api_instance.session_status(directory=directory, workspace=workspace)
        print("The response of SessionApi->session_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Dict[str, SessionStatus]**](SessionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get session status |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_summarize**
> bool session_summarize(session_id, directory=directory, workspace=workspace, session_summarize_request=session_summarize_request)

**Synchronous variant:** `session_summarize_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Summarize session

Generate a concise summary of the session using AI compaction to preserve key information.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_summarize_request import SessionSummarizeRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_summarize_request = opencode_sdk.SessionSummarizeRequest() # SessionSummarizeRequest |  (optional)

    try:
        # Summarize session
        api_response = await api_instance.session_summarize(session_id, directory=directory, workspace=workspace, session_summarize_request=session_summarize_request)
        print("The response of SessionApi->session_summarize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_summarize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_summarize_request** | [**SessionSummarizeRequest**](SessionSummarizeRequest.md)|  | [optional] 

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
**200** | Summarized session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_todo**
> List[Todo] session_todo(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_todo_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session todos

Retrieve the todo list associated with a specific session, showing tasks and action items.

### Example


```python
import opencode_sdk
from opencode_sdk.models.todo import Todo
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get session todos
        api_response = await api_instance.session_todo(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_todo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_todo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Todo]**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Todo list |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_unrevert**
> Session session_unrevert(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_unrevert_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Restore reverted messages

Restore all previously reverted messages in a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Restore reverted messages
        api_response = await api_instance.session_unrevert(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_unrevert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_unrevert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |
**409** | SessionBusyError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_unshare**
> Session session_unshare(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `session_unshare_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Unshare session

Remove the shareable link for a session, making it private again.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Unshare session
        api_response = await api_instance.session_unshare(session_id, directory=directory, workspace=workspace)
        print("The response of SessionApi->session_unshare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_unshare: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unshared session |  -  |
**400** | Bad request |  -  |
**404** | NotFoundError |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **session_update**
> Session session_update(session_id, directory=directory, workspace=workspace, session_update_request=session_update_request)

**Synchronous variant:** `session_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update session

Update properties of an existing session, such as title or other metadata.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session import Session
from opencode_sdk.models.session_update_request import SessionUpdateRequest
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
    api_instance = opencode_sdk.SessionApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    session_update_request = opencode_sdk.SessionUpdateRequest() # SessionUpdateRequest |  (optional)

    try:
        # Update session
        api_response = await api_instance.session_update(session_id, directory=directory, workspace=workspace, session_update_request=session_update_request)
        print("The response of SessionApi->session_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->session_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **session_update_request** | [**SessionUpdateRequest**](SessionUpdateRequest.md)|  | [optional] 

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated session |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

