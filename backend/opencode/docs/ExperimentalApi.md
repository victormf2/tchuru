# opencode_sdk.ExperimentalApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experimental_capabilities_get**](ExperimentalApi.md#experimental_capabilities_get) | **GET** /experimental/capabilities | Get experimental capabilities
[**experimental_console_get**](ExperimentalApi.md#experimental_console_get) | **GET** /experimental/console | Get active Console provider metadata
[**experimental_console_list_orgs**](ExperimentalApi.md#experimental_console_list_orgs) | **GET** /experimental/console/orgs | List switchable Console orgs
[**experimental_console_switch_org**](ExperimentalApi.md#experimental_console_switch_org) | **POST** /experimental/console/switch | Switch active Console org
[**experimental_resource_list**](ExperimentalApi.md#experimental_resource_list) | **GET** /experimental/resource | Get MCP resources
[**experimental_session_background**](ExperimentalApi.md#experimental_session_background) | **POST** /experimental/session/{sessionID}/background | Background subagents
[**experimental_session_list**](ExperimentalApi.md#experimental_session_list) | **GET** /experimental/session | List sessions
[**tool_ids**](ExperimentalApi.md#tool_ids) | **GET** /experimental/tool/ids | List tool IDs
[**tool_list**](ExperimentalApi.md#tool_list) | **GET** /experimental/tool | List tools
[**worktree_create**](ExperimentalApi.md#worktree_create) | **POST** /experimental/worktree | Create worktree
[**worktree_list**](ExperimentalApi.md#worktree_list) | **GET** /experimental/worktree | List worktrees
[**worktree_remove**](ExperimentalApi.md#worktree_remove) | **DELETE** /experimental/worktree | Remove worktree
[**worktree_reset**](ExperimentalApi.md#worktree_reset) | **POST** /experimental/worktree/reset | Reset worktree


# **experimental_capabilities_get**
> ExperimentalCapabilities experimental_capabilities_get(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_capabilities_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get experimental capabilities

Get experimental features enabled on the OpenCode server.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_capabilities import ExperimentalCapabilities
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get experimental capabilities
        api_response = await api_instance.experimental_capabilities_get(directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->experimental_capabilities_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_capabilities_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**ExperimentalCapabilities**](ExperimentalCapabilities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Experimental capabilities |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_console_get**
> ConsoleState experimental_console_get(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_console_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get active Console provider metadata

Get the active Console org name and the set of provider IDs managed by that Console org.

### Example


```python
import opencode_sdk
from opencode_sdk.models.console_state import ConsoleState
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get active Console provider metadata
        api_response = await api_instance.experimental_console_get(directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->experimental_console_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_console_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**ConsoleState**](ConsoleState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Active Console provider metadata |  -  |
**400** | Bad request |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_console_list_orgs**
> ExperimentalConsoleListOrgs200Response experimental_console_list_orgs(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_console_list_orgs_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List switchable Console orgs

Get the available Console orgs across logged-in accounts, including the current active org.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_console_list_orgs200_response import ExperimentalConsoleListOrgs200Response
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List switchable Console orgs
        api_response = await api_instance.experimental_console_list_orgs(directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->experimental_console_list_orgs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_console_list_orgs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**ExperimentalConsoleListOrgs200Response**](ExperimentalConsoleListOrgs200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Switchable Console orgs |  -  |
**400** | Bad request |  -  |
**500** | InternalServerError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_console_switch_org**
> bool experimental_console_switch_org(directory=directory, workspace=workspace, experimental_console_switch_org_request=experimental_console_switch_org_request)

**Synchronous variant:** `experimental_console_switch_org_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Switch active Console org

Persist a new active Console account/org selection for the current local OpenCode state.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_console_switch_org_request import ExperimentalConsoleSwitchOrgRequest
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    experimental_console_switch_org_request = opencode_sdk.ExperimentalConsoleSwitchOrgRequest() # ExperimentalConsoleSwitchOrgRequest |  (optional)

    try:
        # Switch active Console org
        api_response = await api_instance.experimental_console_switch_org(directory=directory, workspace=workspace, experimental_console_switch_org_request=experimental_console_switch_org_request)
        print("The response of ExperimentalApi->experimental_console_switch_org:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_console_switch_org: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **experimental_console_switch_org_request** | [**ExperimentalConsoleSwitchOrgRequest**](ExperimentalConsoleSwitchOrgRequest.md)|  | [optional] 

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
**200** | Switch success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_resource_list**
> Dict[str, McpResource] experimental_resource_list(directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_resource_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get MCP resources

Get all available MCP resources from connected servers. Optionally filter by name.

### Example


```python
import opencode_sdk
from opencode_sdk.models.mcp_resource import McpResource
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get MCP resources
        api_response = await api_instance.experimental_resource_list(directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->experimental_resource_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_resource_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Dict[str, McpResource]**](McpResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MCP resources |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_session_background**
> bool experimental_session_background(session_id, directory=directory, workspace=workspace)

**Synchronous variant:** `experimental_session_background_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Background subagents

Detach any synchronous subagents currently blocking the session and continue them in the background.

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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    session_id = 'session_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Background subagents
        api_response = await api_instance.experimental_session_background(session_id, directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->experimental_session_background:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_session_background: %s\n" % e)
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
**200** | Backgrounded subagents |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **experimental_session_list**
> List[GlobalSession] experimental_session_list(directory=directory, workspace=workspace, roots=roots, start=start, cursor=cursor, search=search, limit=limit, archived=archived)

**Synchronous variant:** `experimental_session_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List sessions

Get a list of all OpenCode sessions across projects, sorted by most recently updated. Archived sessions are excluded by default.

### Example


```python
import opencode_sdk
from opencode_sdk.models.global_session import GlobalSession
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    roots = opencode_sdk.ExperimentalSessionListRootsParameter() # ExperimentalSessionListRootsParameter |  (optional)
    start = 3.4 # float |  (optional)
    cursor = 3.4 # float |  (optional)
    search = 'search_example' # str |  (optional)
    limit = 3.4 # float |  (optional)
    archived = opencode_sdk.ExperimentalSessionListRootsParameter() # ExperimentalSessionListRootsParameter |  (optional)

    try:
        # List sessions
        api_response = await api_instance.experimental_session_list(directory=directory, workspace=workspace, roots=roots, start=start, cursor=cursor, search=search, limit=limit, archived=archived)
        print("The response of ExperimentalApi->experimental_session_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->experimental_session_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **roots** | [**ExperimentalSessionListRootsParameter**](.md)|  | [optional] 
 **start** | **float**|  | [optional] 
 **cursor** | **float**|  | [optional] 
 **search** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] 
 **archived** | [**ExperimentalSessionListRootsParameter**](.md)|  | [optional] 

### Return type

[**List[GlobalSession]**](GlobalSession.md)

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

# **tool_ids**
> List[str] tool_ids(directory=directory, workspace=workspace)

**Synchronous variant:** `tool_ids_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List tool IDs

Get a list of all available tool IDs, including both built-in tools and dynamically registered tools.

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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List tool IDs
        api_response = await api_instance.tool_ids(directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->tool_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->tool_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tool IDs |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tool_list**
> List[ToolListItem] tool_list(provider, model, directory=directory, workspace=workspace)

**Synchronous variant:** `tool_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List tools

Get a list of available tools with their JSON schema parameters for a specific provider and model combination.

### Example


```python
import opencode_sdk
from opencode_sdk.models.tool_list_item import ToolListItem
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    provider = 'provider_example' # str | 
    model = 'model_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List tools
        api_response = await api_instance.tool_list(provider, model, directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->tool_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->tool_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**|  | 
 **model** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[ToolListItem]**](ToolListItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tools |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **worktree_create**
> Worktree worktree_create(directory=directory, workspace=workspace, worktree_create_input=worktree_create_input)

**Synchronous variant:** `worktree_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Create worktree

Create a new git worktree for the current project and run any configured startup scripts.

### Example


```python
import opencode_sdk
from opencode_sdk.models.worktree import Worktree
from opencode_sdk.models.worktree_create_input import WorktreeCreateInput
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    worktree_create_input = opencode_sdk.WorktreeCreateInput() # WorktreeCreateInput |  (optional)

    try:
        # Create worktree
        api_response = await api_instance.worktree_create(directory=directory, workspace=workspace, worktree_create_input=worktree_create_input)
        print("The response of ExperimentalApi->worktree_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->worktree_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **worktree_create_input** | [**WorktreeCreateInput**](WorktreeCreateInput.md)|  | [optional] 

### Return type

[**Worktree**](Worktree.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Worktree created |  -  |
**400** | WorktreeError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **worktree_list**
> List[str] worktree_list(directory=directory, workspace=workspace)

**Synchronous variant:** `worktree_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List worktrees

List all sandbox worktrees for the current project.

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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List worktrees
        api_response = await api_instance.worktree_list(directory=directory, workspace=workspace)
        print("The response of ExperimentalApi->worktree_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->worktree_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of worktree directories |  -  |
**400** | WorktreeError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **worktree_remove**
> bool worktree_remove(directory=directory, workspace=workspace, worktree_remove_input=worktree_remove_input)

**Synchronous variant:** `worktree_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove worktree

Remove a git worktree and delete its branch.

### Example


```python
import opencode_sdk
from opencode_sdk.models.worktree_remove_input import WorktreeRemoveInput
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    worktree_remove_input = opencode_sdk.WorktreeRemoveInput() # WorktreeRemoveInput |  (optional)

    try:
        # Remove worktree
        api_response = await api_instance.worktree_remove(directory=directory, workspace=workspace, worktree_remove_input=worktree_remove_input)
        print("The response of ExperimentalApi->worktree_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->worktree_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **worktree_remove_input** | [**WorktreeRemoveInput**](WorktreeRemoveInput.md)|  | [optional] 

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
**200** | Worktree removed |  -  |
**400** | WorktreeError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **worktree_reset**
> bool worktree_reset(directory=directory, workspace=workspace, worktree_reset_input=worktree_reset_input)

**Synchronous variant:** `worktree_reset_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reset worktree

Reset a worktree branch to the primary default branch.

### Example


```python
import opencode_sdk
from opencode_sdk.models.worktree_reset_input import WorktreeResetInput
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
    api_instance = opencode_sdk.ExperimentalApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    worktree_reset_input = opencode_sdk.WorktreeResetInput() # WorktreeResetInput |  (optional)

    try:
        # Reset worktree
        api_response = await api_instance.worktree_reset(directory=directory, workspace=workspace, worktree_reset_input=worktree_reset_input)
        print("The response of ExperimentalApi->worktree_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExperimentalApi->worktree_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **worktree_reset_input** | [**WorktreeResetInput**](WorktreeResetInput.md)|  | [optional] 

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
**200** | Worktree reset |  -  |
**400** | WorktreeError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

