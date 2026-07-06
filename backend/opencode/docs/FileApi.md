# opencode_sdk.FileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**file_list**](FileApi.md#file_list) | **GET** /file | List files
[**file_read**](FileApi.md#file_read) | **GET** /file/content | Read file
[**file_status**](FileApi.md#file_status) | **GET** /file/status | Get file status
[**find_files**](FileApi.md#find_files) | **GET** /find/file | Find files
[**find_symbols**](FileApi.md#find_symbols) | **GET** /find/symbol | Find symbols
[**find_text**](FileApi.md#find_text) | **GET** /find | Find text


# **file_list**
> List[FileNode] file_list(path, directory=directory, workspace=workspace)

**Synchronous variant:** `file_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List files

List files and directories in a specified path.

### Example


```python
import opencode_sdk
from opencode_sdk.models.file_node import FileNode
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
    api_instance = opencode_sdk.FileApi(api_client)
    path = 'path_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List files
        api_response = await api_instance.file_list(path, directory=directory, workspace=workspace)
        print("The response of FileApi->file_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[FileNode]**](FileNode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Files and directories |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_read**
> FileContent file_read(path, directory=directory, workspace=workspace)

**Synchronous variant:** `file_read_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Read file

Read the content of a specified file.

### Example


```python
import opencode_sdk
from opencode_sdk.models.file_content import FileContent
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
    api_instance = opencode_sdk.FileApi(api_client)
    path = 'path_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Read file
        api_response = await api_instance.file_read(path, directory=directory, workspace=workspace)
        print("The response of FileApi->file_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**FileContent**](FileContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File content |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_status**
> List[File] file_status(directory=directory, workspace=workspace)

**Synchronous variant:** `file_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get file status

Get the git status of all files in the project.

### Example


```python
import opencode_sdk
from opencode_sdk.models.file import File
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
    api_instance = opencode_sdk.FileApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get file status
        api_response = await api_instance.file_status(directory=directory, workspace=workspace)
        print("The response of FileApi->file_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->file_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[File]**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File status |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_files**
> List[str] find_files(query, directory=directory, workspace=workspace, dirs=dirs, type=type, limit=limit)

**Synchronous variant:** `find_files_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Find files

Search for files or directories by name or pattern in the project directory.

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
    api_instance = opencode_sdk.FileApi(api_client)
    query = 'query_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    dirs = 'dirs_example' # str |  (optional)
    type = 'type_example' # str |  (optional)
    limit = 56 # int |  (optional)

    try:
        # Find files
        api_response = await api_instance.find_files(query, directory=directory, workspace=workspace, dirs=dirs, type=type, limit=limit)
        print("The response of FileApi->find_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->find_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **dirs** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] 

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
**200** | File paths |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_symbols**
> List[Symbol] find_symbols(query, directory=directory, workspace=workspace)

**Synchronous variant:** `find_symbols_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Find symbols

Search for workspace symbols like functions, classes, and variables using LSP.

### Example


```python
import opencode_sdk
from opencode_sdk.models.symbol import Symbol
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
    api_instance = opencode_sdk.FileApi(api_client)
    query = 'query_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Find symbols
        api_response = await api_instance.find_symbols(query, directory=directory, workspace=workspace)
        print("The response of FileApi->find_symbols:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->find_symbols: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[Symbol]**](Symbol.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Symbols |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_text**
> List[FindText200ResponseInner] find_text(pattern, directory=directory, workspace=workspace)

**Synchronous variant:** `find_text_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Find text

Search for text patterns across files in the project using ripgrep.

### Example


```python
import opencode_sdk
from opencode_sdk.models.find_text200_response_inner import FindText200ResponseInner
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
    api_instance = opencode_sdk.FileApi(api_client)
    pattern = 'pattern_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Find text
        api_response = await api_instance.find_text(pattern, directory=directory, workspace=workspace)
        print("The response of FileApi->find_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FileApi->find_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pattern** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[FindText200ResponseInner]**](FindText200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Matches |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

