# opencode_sdk.InstanceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_agents**](InstanceApi.md#app_agents) | **GET** /agent | List agents
[**app_skills**](InstanceApi.md#app_skills) | **GET** /skill | List skills
[**command_list**](InstanceApi.md#command_list) | **GET** /command | List commands
[**formatter_status**](InstanceApi.md#formatter_status) | **GET** /formatter | Get formatter status
[**instance_dispose**](InstanceApi.md#instance_dispose) | **POST** /instance/dispose | Dispose instance
[**lsp_status**](InstanceApi.md#lsp_status) | **GET** /lsp | Get LSP status
[**path_get**](InstanceApi.md#path_get) | **GET** /path | Get paths
[**vcs_apply**](InstanceApi.md#vcs_apply) | **POST** /vcs/apply | Apply VCS patch
[**vcs_diff**](InstanceApi.md#vcs_diff) | **GET** /vcs/diff | Get VCS diff
[**vcs_diff_raw**](InstanceApi.md#vcs_diff_raw) | **GET** /vcs/diff/raw | Get raw VCS diff
[**vcs_get**](InstanceApi.md#vcs_get) | **GET** /vcs | Get VCS info
[**vcs_status**](InstanceApi.md#vcs_status) | **GET** /vcs/status | Get VCS status


# **app_agents**
> List[Agent] app_agents(directory=directory, workspace=workspace)

**Synchronous variant:** `app_agents_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List agents

Get a list of all available AI agents in the OpenCode system.

### Example


```python
import opencode_sdk
from opencode_sdk.models.agent import Agent
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List agents
        api_response = await api_instance.app_agents(directory=directory, workspace=workspace)
        print("The response of InstanceApi->app_agents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->app_agents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Agent]**](Agent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of agents |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_skills**
> List[AppSkills200ResponseInner] app_skills(directory=directory, workspace=workspace)

**Synchronous variant:** `app_skills_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List skills

Get a list of all available skills in the OpenCode system.

### Example


```python
import opencode_sdk
from opencode_sdk.models.app_skills200_response_inner import AppSkills200ResponseInner
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List skills
        api_response = await api_instance.app_skills(directory=directory, workspace=workspace)
        print("The response of InstanceApi->app_skills:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->app_skills: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[AppSkills200ResponseInner]**](AppSkills200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of skills |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **command_list**
> List[Command] command_list(directory=directory, workspace=workspace)

**Synchronous variant:** `command_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List commands

Get a list of all available commands in the OpenCode system.

### Example


```python
import opencode_sdk
from opencode_sdk.models.command import Command
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List commands
        api_response = await api_instance.command_list(directory=directory, workspace=workspace)
        print("The response of InstanceApi->command_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->command_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Command]**](Command.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of commands |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formatter_status**
> List[FormatterStatus] formatter_status(directory=directory, workspace=workspace)

**Synchronous variant:** `formatter_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get formatter status

Get formatter status

### Example


```python
import opencode_sdk
from opencode_sdk.models.formatter_status import FormatterStatus
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get formatter status
        api_response = await api_instance.formatter_status(directory=directory, workspace=workspace)
        print("The response of InstanceApi->formatter_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->formatter_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[FormatterStatus]**](FormatterStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Formatter status |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_dispose**
> bool instance_dispose(directory=directory, workspace=workspace)

**Synchronous variant:** `instance_dispose_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Dispose instance

Clean up and dispose the current OpenCode instance, releasing all resources.

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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Dispose instance
        api_response = await api_instance.instance_dispose(directory=directory, workspace=workspace)
        print("The response of InstanceApi->instance_dispose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->instance_dispose: %s\n" % e)
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
**200** | Instance disposed |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_status**
> List[LSPStatus] lsp_status(directory=directory, workspace=workspace)

**Synchronous variant:** `lsp_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get LSP status

Get LSP server status

### Example


```python
import opencode_sdk
from opencode_sdk.models.lsp_status import LSPStatus
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get LSP status
        api_response = await api_instance.lsp_status(directory=directory, workspace=workspace)
        print("The response of InstanceApi->lsp_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->lsp_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[LSPStatus]**](LSPStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LSP server status |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **path_get**
> Path path_get(directory=directory, workspace=workspace)

**Synchronous variant:** `path_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get paths

Retrieve the current working directory and related path information for the OpenCode instance.

### Example


```python
import opencode_sdk
from opencode_sdk.models.path import Path
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get paths
        api_response = await api_instance.path_get(directory=directory, workspace=workspace)
        print("The response of InstanceApi->path_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->path_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Path**](Path.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Path |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vcs_apply**
> VcsApply200Response vcs_apply(directory=directory, workspace=workspace, vcs_apply_request=vcs_apply_request)

**Synchronous variant:** `vcs_apply_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Apply VCS patch

Apply a raw patch to the current working tree.

### Example


```python
import opencode_sdk
from opencode_sdk.models.vcs_apply200_response import VcsApply200Response
from opencode_sdk.models.vcs_apply_request import VcsApplyRequest
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    vcs_apply_request = opencode_sdk.VcsApplyRequest() # VcsApplyRequest |  (optional)

    try:
        # Apply VCS patch
        api_response = await api_instance.vcs_apply(directory=directory, workspace=workspace, vcs_apply_request=vcs_apply_request)
        print("The response of InstanceApi->vcs_apply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->vcs_apply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **vcs_apply_request** | [**VcsApplyRequest**](VcsApplyRequest.md)|  | [optional] 

### Return type

[**VcsApply200Response**](VcsApply200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VCS patch applied |  -  |
**400** | VcsApplyError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vcs_diff**
> List[VcsFileDiff] vcs_diff(mode, directory=directory, workspace=workspace, context=context)

**Synchronous variant:** `vcs_diff_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get VCS diff

Retrieve the current git diff for the working tree or against the default branch.

### Example


```python
import opencode_sdk
from opencode_sdk.models.vcs_file_diff import VcsFileDiff
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    mode = 'mode_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    context = 56 # int |  (optional)

    try:
        # Get VCS diff
        api_response = await api_instance.vcs_diff(mode, directory=directory, workspace=workspace, context=context)
        print("The response of InstanceApi->vcs_diff:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->vcs_diff: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **context** | **int**|  | [optional] 

### Return type

[**List[VcsFileDiff]**](VcsFileDiff.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VCS diff |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vcs_diff_raw**
> str vcs_diff_raw(directory=directory, workspace=workspace)

**Synchronous variant:** `vcs_diff_raw_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get raw VCS diff

Retrieve a raw patch for current uncommitted changes.

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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get raw VCS diff
        api_response = await api_instance.vcs_diff_raw(directory=directory, workspace=workspace)
        print("The response of InstanceApi->vcs_diff_raw:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->vcs_diff_raw: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/x-diff; charset=utf-8, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Raw VCS diff |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vcs_get**
> VcsInfo vcs_get(directory=directory, workspace=workspace)

**Synchronous variant:** `vcs_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get VCS info

Retrieve version control system (VCS) information for the current project, such as git branch.

### Example


```python
import opencode_sdk
from opencode_sdk.models.vcs_info import VcsInfo
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get VCS info
        api_response = await api_instance.vcs_get(directory=directory, workspace=workspace)
        print("The response of InstanceApi->vcs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->vcs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**VcsInfo**](VcsInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VCS info |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vcs_status**
> List[VcsFileStatus] vcs_status(directory=directory, workspace=workspace)

**Synchronous variant:** `vcs_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get VCS status

Retrieve changed files in the current working tree without patches.

### Example


```python
import opencode_sdk
from opencode_sdk.models.vcs_file_status import VcsFileStatus
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
    api_instance = opencode_sdk.InstanceApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get VCS status
        api_response = await api_instance.vcs_status(directory=directory, workspace=workspace)
        print("The response of InstanceApi->vcs_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->vcs_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[VcsFileStatus]**](VcsFileStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VCS status |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

