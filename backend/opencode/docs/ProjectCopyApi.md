# opencode_sdk.ProjectCopyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experimental_project_copy_generate_name**](ProjectCopyApi.md#experimental_project_copy_generate_name) | **POST** /experimental/project/{projectID}/copy/generate-name | Generate project copy name
[**v2_project_copy_create**](ProjectCopyApi.md#v2_project_copy_create) | **POST** /experimental/project/{projectID}/copy | 
[**v2_project_copy_refresh**](ProjectCopyApi.md#v2_project_copy_refresh) | **POST** /experimental/project/{projectID}/copy/refresh | 
[**v2_project_copy_remove**](ProjectCopyApi.md#v2_project_copy_remove) | **DELETE** /experimental/project/{projectID}/copy | 


# **experimental_project_copy_generate_name**
> ExperimentalProjectCopyGenerateName200Response experimental_project_copy_generate_name(project_id, directory=directory, workspace=workspace, experimental_project_copy_generate_name_request=experimental_project_copy_generate_name_request)

**Synchronous variant:** `experimental_project_copy_generate_name_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Generate project copy name

Generate a short name for a project copy from task context.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_project_copy_generate_name200_response import ExperimentalProjectCopyGenerateName200Response
from opencode_sdk.models.experimental_project_copy_generate_name_request import ExperimentalProjectCopyGenerateNameRequest
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
    api_instance = opencode_sdk.ProjectCopyApi(api_client)
    project_id = 'project_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    experimental_project_copy_generate_name_request = opencode_sdk.ExperimentalProjectCopyGenerateNameRequest() # ExperimentalProjectCopyGenerateNameRequest |  (optional)

    try:
        # Generate project copy name
        api_response = await api_instance.experimental_project_copy_generate_name(project_id, directory=directory, workspace=workspace, experimental_project_copy_generate_name_request=experimental_project_copy_generate_name_request)
        print("The response of ProjectCopyApi->experimental_project_copy_generate_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectCopyApi->experimental_project_copy_generate_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **experimental_project_copy_generate_name_request** | [**ExperimentalProjectCopyGenerateNameRequest**](ExperimentalProjectCopyGenerateNameRequest.md)|  | [optional] 

### Return type

[**ExperimentalProjectCopyGenerateName200Response**](ExperimentalProjectCopyGenerateName200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_project_copy_create**
> ProjectCopyCopy v2_project_copy_create(project_id, location=location, v2_project_copy_create_request=v2_project_copy_create_request)

**Synchronous variant:** `v2_project_copy_create_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

### Example


```python
import opencode_sdk
from opencode_sdk.models.project_copy_copy import ProjectCopyCopy
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_project_copy_create_request import V2ProjectCopyCreateRequest
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
    api_instance = opencode_sdk.ProjectCopyApi(api_client)
    project_id = 'project_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)
    v2_project_copy_create_request = opencode_sdk.V2ProjectCopyCreateRequest() # V2ProjectCopyCreateRequest |  (optional)

    try:
        api_response = await api_instance.v2_project_copy_create(project_id, location=location, v2_project_copy_create_request=v2_project_copy_create_request)
        print("The response of ProjectCopyApi->v2_project_copy_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectCopyApi->v2_project_copy_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 
 **v2_project_copy_create_request** | [**V2ProjectCopyCreateRequest**](V2ProjectCopyCreateRequest.md)|  | [optional] 

### Return type

[**ProjectCopyCopy**](ProjectCopyCopy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ProjectCopy.Copy |  -  |
**400** | ProjectCopyError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_project_copy_refresh**
> v2_project_copy_refresh(project_id, location=location)

**Synchronous variant:** `v2_project_copy_refresh_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

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
    api_instance = opencode_sdk.ProjectCopyApi(api_client)
    project_id = 'project_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        await api_instance.v2_project_copy_refresh(project_id, location=location)
    except Exception as e:
        print("Exception when calling ProjectCopyApi->v2_project_copy_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
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
**400** | ProjectCopyError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_project_copy_remove**
> v2_project_copy_remove(project_id, location=location, v2_project_copy_remove_request=v2_project_copy_remove_request)

**Synchronous variant:** `v2_project_copy_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_project_copy_remove_request import V2ProjectCopyRemoveRequest
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
    api_instance = opencode_sdk.ProjectCopyApi(api_client)
    project_id = 'project_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)
    v2_project_copy_remove_request = opencode_sdk.V2ProjectCopyRemoveRequest() # V2ProjectCopyRemoveRequest |  (optional)

    try:
        await api_instance.v2_project_copy_remove(project_id, location=location, v2_project_copy_remove_request=v2_project_copy_remove_request)
    except Exception as e:
        print("Exception when calling ProjectCopyApi->v2_project_copy_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 
 **v2_project_copy_remove_request** | [**V2ProjectCopyRemoveRequest**](V2ProjectCopyRemoveRequest.md)|  | [optional] 

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
**400** | ProjectCopyError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

