# opencode_sdk.QuestionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**question_list**](QuestionApi.md#question_list) | **GET** /question | List pending questions
[**question_reject**](QuestionApi.md#question_reject) | **POST** /question/{requestID}/reject | Reject question request
[**question_reply**](QuestionApi.md#question_reply) | **POST** /question/{requestID}/reply | Reply to question request


# **question_list**
> List[QuestionRequest] question_list(directory=directory, workspace=workspace)

**Synchronous variant:** `question_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List pending questions

Get all pending question requests across all sessions.

### Example


```python
import opencode_sdk
from opencode_sdk.models.question_request import QuestionRequest
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
    api_instance = opencode_sdk.QuestionApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List pending questions
        api_response = await api_instance.question_list(directory=directory, workspace=workspace)
        print("The response of QuestionApi->question_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuestionApi->question_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**List[QuestionRequest]**](QuestionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pending questions |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **question_reject**
> bool question_reject(request_id, directory=directory, workspace=workspace)

**Synchronous variant:** `question_reject_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reject question request

Reject a question request from the AI assistant.

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
    api_instance = opencode_sdk.QuestionApi(api_client)
    request_id = 'request_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Reject question request
        api_response = await api_instance.question_reject(request_id, directory=directory, workspace=workspace)
        print("The response of QuestionApi->question_reject:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuestionApi->question_reject: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**|  | 
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
**200** | Question rejected successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | QuestionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **question_reply**
> bool question_reply(request_id, directory=directory, workspace=workspace, question_reply_request=question_reply_request)

**Synchronous variant:** `question_reply_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reply to question request

Provide answers to a question request from the AI assistant.

### Example


```python
import opencode_sdk
from opencode_sdk.models.question_reply_request import QuestionReplyRequest
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
    api_instance = opencode_sdk.QuestionApi(api_client)
    request_id = 'request_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    question_reply_request = opencode_sdk.QuestionReplyRequest() # QuestionReplyRequest |  (optional)

    try:
        # Reply to question request
        api_response = await api_instance.question_reply(request_id, directory=directory, workspace=workspace, question_reply_request=question_reply_request)
        print("The response of QuestionApi->question_reply:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuestionApi->question_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **question_reply_request** | [**QuestionReplyRequest**](QuestionReplyRequest.md)|  | [optional] 

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
**200** | Question answered successfully |  -  |
**400** | BadRequest | InvalidRequestError |  -  |
**404** | QuestionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

