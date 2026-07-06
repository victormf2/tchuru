# opencode_sdk.TuiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tui_append_prompt**](TuiApi.md#tui_append_prompt) | **POST** /tui/append-prompt | Append TUI prompt
[**tui_clear_prompt**](TuiApi.md#tui_clear_prompt) | **POST** /tui/clear-prompt | Clear TUI prompt
[**tui_control_next**](TuiApi.md#tui_control_next) | **GET** /tui/control/next | Get next TUI request
[**tui_control_response**](TuiApi.md#tui_control_response) | **POST** /tui/control/response | Submit TUI response
[**tui_execute_command**](TuiApi.md#tui_execute_command) | **POST** /tui/execute-command | Execute TUI command
[**tui_open_help**](TuiApi.md#tui_open_help) | **POST** /tui/open-help | Open help dialog
[**tui_open_models**](TuiApi.md#tui_open_models) | **POST** /tui/open-models | Open models dialog
[**tui_open_sessions**](TuiApi.md#tui_open_sessions) | **POST** /tui/open-sessions | Open sessions dialog
[**tui_open_themes**](TuiApi.md#tui_open_themes) | **POST** /tui/open-themes | Open themes dialog
[**tui_publish**](TuiApi.md#tui_publish) | **POST** /tui/publish | Publish TUI event
[**tui_select_session**](TuiApi.md#tui_select_session) | **POST** /tui/select-session | Select session
[**tui_show_toast**](TuiApi.md#tui_show_toast) | **POST** /tui/show-toast | Show TUI toast
[**tui_submit_prompt**](TuiApi.md#tui_submit_prompt) | **POST** /tui/submit-prompt | Submit TUI prompt


# **tui_append_prompt**
> bool tui_append_prompt(directory=directory, workspace=workspace, find_text200_response_inner_path=find_text200_response_inner_path)

**Synchronous variant:** `tui_append_prompt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Append TUI prompt

Append prompt to the TUI.

### Example


```python
import opencode_sdk
from opencode_sdk.models.find_text200_response_inner_path import FindText200ResponseInnerPath
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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    find_text200_response_inner_path = opencode_sdk.FindText200ResponseInnerPath() # FindText200ResponseInnerPath |  (optional)

    try:
        # Append TUI prompt
        api_response = await api_instance.tui_append_prompt(directory=directory, workspace=workspace, find_text200_response_inner_path=find_text200_response_inner_path)
        print("The response of TuiApi->tui_append_prompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_append_prompt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **find_text200_response_inner_path** | [**FindText200ResponseInnerPath**](FindText200ResponseInnerPath.md)|  | [optional] 

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
**200** | Prompt processed successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_clear_prompt**
> bool tui_clear_prompt(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_clear_prompt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Clear TUI prompt

Clear the prompt.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Clear TUI prompt
        api_response = await api_instance.tui_clear_prompt(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_clear_prompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_clear_prompt: %s\n" % e)
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
**200** | Prompt cleared successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_control_next**
> TuiControlNext200Response tui_control_next(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_control_next_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get next TUI request

Retrieve the next TUI request from the queue for processing.

### Example


```python
import opencode_sdk
from opencode_sdk.models.tui_control_next200_response import TuiControlNext200Response
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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get next TUI request
        api_response = await api_instance.tui_control_next(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_control_next:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_control_next: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**TuiControlNext200Response**](TuiControlNext200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Next TUI request |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_control_response**
> bool tui_control_response(directory=directory, workspace=workspace, body=body)

**Synchronous variant:** `tui_control_response_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Submit TUI response

Submit a response to the TUI request queue to complete a pending request.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    body = None # object |  (optional)

    try:
        # Submit TUI response
        api_response = await api_instance.tui_control_response(directory=directory, workspace=workspace, body=body)
        print("The response of TuiApi->tui_control_response:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_control_response: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **body** | **object**|  | [optional] 

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
**200** | Response submitted successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_execute_command**
> bool tui_execute_command(directory=directory, workspace=workspace, tui_execute_command_request=tui_execute_command_request)

**Synchronous variant:** `tui_execute_command_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Execute TUI command

Execute a TUI command.

### Example


```python
import opencode_sdk
from opencode_sdk.models.tui_execute_command_request import TuiExecuteCommandRequest
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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    tui_execute_command_request = opencode_sdk.TuiExecuteCommandRequest() # TuiExecuteCommandRequest |  (optional)

    try:
        # Execute TUI command
        api_response = await api_instance.tui_execute_command(directory=directory, workspace=workspace, tui_execute_command_request=tui_execute_command_request)
        print("The response of TuiApi->tui_execute_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_execute_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **tui_execute_command_request** | [**TuiExecuteCommandRequest**](TuiExecuteCommandRequest.md)|  | [optional] 

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
**200** | Command executed successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_open_help**
> bool tui_open_help(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_open_help_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Open help dialog

Open the help dialog in the TUI to display user assistance information.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Open help dialog
        api_response = await api_instance.tui_open_help(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_open_help:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_open_help: %s\n" % e)
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
**200** | Help dialog opened successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_open_models**
> bool tui_open_models(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_open_models_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Open models dialog

Open the model dialog.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Open models dialog
        api_response = await api_instance.tui_open_models(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_open_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_open_models: %s\n" % e)
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
**200** | Model dialog opened successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_open_sessions**
> bool tui_open_sessions(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_open_sessions_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Open sessions dialog

Open the session dialog.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Open sessions dialog
        api_response = await api_instance.tui_open_sessions(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_open_sessions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_open_sessions: %s\n" % e)
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
**200** | Session dialog opened successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_open_themes**
> bool tui_open_themes(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_open_themes_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Open themes dialog

Open the theme dialog.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Open themes dialog
        api_response = await api_instance.tui_open_themes(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_open_themes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_open_themes: %s\n" % e)
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
**200** | Theme dialog opened successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_publish**
> bool tui_publish(directory=directory, workspace=workspace, tui_publish_request=tui_publish_request)

**Synchronous variant:** `tui_publish_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Publish TUI event

Publish a TUI event.

### Example


```python
import opencode_sdk
from opencode_sdk.models.tui_publish_request import TuiPublishRequest
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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    tui_publish_request = opencode_sdk.TuiPublishRequest() # TuiPublishRequest |  (optional)

    try:
        # Publish TUI event
        api_response = await api_instance.tui_publish(directory=directory, workspace=workspace, tui_publish_request=tui_publish_request)
        print("The response of TuiApi->tui_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **tui_publish_request** | [**TuiPublishRequest**](TuiPublishRequest.md)|  | [optional] 

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
**200** | Event published successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_select_session**
> bool tui_select_session(directory=directory, workspace=workspace, tui_select_session_request=tui_select_session_request)

**Synchronous variant:** `tui_select_session_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Select session

Navigate the TUI to display the specified session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.tui_select_session_request import TuiSelectSessionRequest
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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    tui_select_session_request = opencode_sdk.TuiSelectSessionRequest() # TuiSelectSessionRequest |  (optional)

    try:
        # Select session
        api_response = await api_instance.tui_select_session(directory=directory, workspace=workspace, tui_select_session_request=tui_select_session_request)
        print("The response of TuiApi->tui_select_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_select_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **tui_select_session_request** | [**TuiSelectSessionRequest**](TuiSelectSessionRequest.md)|  | [optional] 

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
**200** | Session selected successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | NotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_show_toast**
> bool tui_show_toast(directory=directory, workspace=workspace, tui_show_toast_request=tui_show_toast_request)

**Synchronous variant:** `tui_show_toast_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Show TUI toast

Show a toast notification in the TUI.

### Example


```python
import opencode_sdk
from opencode_sdk.models.tui_show_toast_request import TuiShowToastRequest
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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    tui_show_toast_request = opencode_sdk.TuiShowToastRequest() # TuiShowToastRequest |  (optional)

    try:
        # Show TUI toast
        api_response = await api_instance.tui_show_toast(directory=directory, workspace=workspace, tui_show_toast_request=tui_show_toast_request)
        print("The response of TuiApi->tui_show_toast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_show_toast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **tui_show_toast_request** | [**TuiShowToastRequest**](TuiShowToastRequest.md)|  | [optional] 

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
**200** | Toast notification shown successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tui_submit_prompt**
> bool tui_submit_prompt(directory=directory, workspace=workspace)

**Synchronous variant:** `tui_submit_prompt_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Submit TUI prompt

Submit the prompt.

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
    api_instance = opencode_sdk.TuiApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Submit TUI prompt
        api_response = await api_instance.tui_submit_prompt(directory=directory, workspace=workspace)
        print("The response of TuiApi->tui_submit_prompt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TuiApi->tui_submit_prompt: %s\n" % e)
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
**200** | Prompt submitted successfully |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

