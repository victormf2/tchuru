# opencode_sdk.ProjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**project_current**](ProjectApi.md#project_current) | **GET** /project/current | Get current project
[**project_directories**](ProjectApi.md#project_directories) | **GET** /project/{projectID}/directories | List project directories
[**project_init_git**](ProjectApi.md#project_init_git) | **POST** /project/git/init | Initialize git repository
[**project_list**](ProjectApi.md#project_list) | **GET** /project | List all projects
[**project_update**](ProjectApi.md#project_update) | **PATCH** /project/{projectID} | Update project


# **project_current**
> Project project_current(directory=directory, workspace=workspace)

**Synchronous variant:** `project_current_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get current project

Retrieve the currently active project that OpenCode is working with.

### Example


```python
import opencode_sdk
from opencode_sdk.models.project import Project
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
    api_instance = opencode_sdk.ProjectApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get current project
        api_response = await api_instance.project_current(directory=directory, workspace=workspace)
        print("The response of ProjectApi->project_current:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->project_current: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current project information |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_directories**
> List[ProjectDirectoriesInner] project_directories(project_id, directory=directory, workspace=workspace)

**Synchronous variant:** `project_directories_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List project directories

List known local absolute directories for a project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.project_directories_inner import ProjectDirectoriesInner
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
    api_instance = opencode_sdk.ProjectApi(api_client)
    project_id = 'project_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List project directories
        api_response = await api_instance.project_directories(project_id, directory=directory, workspace=workspace)
        print("The response of ProjectApi->project_directories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->project_directories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[ProjectDirectoriesInner]**](ProjectDirectoriesInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project directories |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_init_git**
> Project project_init_git(directory=directory, workspace=workspace)

**Synchronous variant:** `project_init_git_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Initialize git repository

Create a git repository for the current project and return the refreshed project info.

### Example


```python
import opencode_sdk
from opencode_sdk.models.project import Project
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
    api_instance = opencode_sdk.ProjectApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Initialize git repository
        api_response = await api_instance.project_init_git(directory=directory, workspace=workspace)
        print("The response of ProjectApi->project_init_git:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->project_init_git: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project information after git initialization |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_list**
> List[Project] project_list(directory=directory, workspace=workspace)

**Synchronous variant:** `project_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List all projects

Get a list of projects that have been opened with OpenCode.

### Example


```python
import opencode_sdk
from opencode_sdk.models.project import Project
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
    api_instance = opencode_sdk.ProjectApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List all projects
        api_response = await api_instance.project_list(directory=directory, workspace=workspace)
        print("The response of ProjectApi->project_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->project_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of projects |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_update**
> Project project_update(project_id, directory=directory, workspace=workspace, project_update_request=project_update_request)

**Synchronous variant:** `project_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update project

Update project properties such as name, icon, and commands.

### Example


```python
import opencode_sdk
from opencode_sdk.models.project import Project
from opencode_sdk.models.project_update_request import ProjectUpdateRequest
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
    api_instance = opencode_sdk.ProjectApi(api_client)
    project_id = 'project_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    project_update_request = opencode_sdk.ProjectUpdateRequest() # ProjectUpdateRequest |  (optional)

    try:
        # Update project
        api_response = await api_instance.project_update(project_id, directory=directory, workspace=workspace, project_update_request=project_update_request)
        print("The response of ProjectApi->project_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->project_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **project_update_request** | [**ProjectUpdateRequest**](ProjectUpdateRequest.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated project information |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | ProjectNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

