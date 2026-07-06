# opencode_sdk.SessionQuestionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_question_request_list**](SessionQuestionsApi.md#v2_question_request_list) | **GET** /api/question/request | List pending question requests
[**v2_session_question_list**](SessionQuestionsApi.md#v2_session_question_list) | **GET** /api/session/{sessionID}/question | List session question requests
[**v2_session_question_reject**](SessionQuestionsApi.md#v2_session_question_reject) | **POST** /api/session/{sessionID}/question/{requestID}/reject | Reject pending question request
[**v2_session_question_reply**](SessionQuestionsApi.md#v2_session_question_reply) | **POST** /api/session/{sessionID}/question/{requestID}/reply | Reply to pending question request


# **v2_question_request_list**
> V2QuestionRequestList200Response v2_question_request_list(location=location)

**Synchronous variant:** `v2_question_request_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List pending question requests

Retrieve pending question requests for a location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_question_request_list200_response import V2QuestionRequestList200Response
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
    api_instance = opencode_sdk.SessionQuestionsApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List pending question requests
        api_response = await api_instance.v2_question_request_list(location=location)
        print("The response of SessionQuestionsApi->v2_question_request_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionQuestionsApi->v2_question_request_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2QuestionRequestList200Response**](V2QuestionRequestList200Response.md)

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

# **v2_session_question_list**
> V2SessionQuestionList200Response v2_session_question_list(session_id)

**Synchronous variant:** `v2_session_question_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List session question requests

Retrieve pending question requests owned by a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_session_question_list200_response import V2SessionQuestionList200Response
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
    api_instance = opencode_sdk.SessionQuestionsApi(api_client)
    session_id = 'session_id_example' # str | 

    try:
        # List session question requests
        api_response = await api_instance.v2_session_question_list(session_id)
        print("The response of SessionQuestionsApi->v2_session_question_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionQuestionsApi->v2_session_question_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 

### Return type

[**V2SessionQuestionList200Response**](V2SessionQuestionList200Response.md)

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

# **v2_session_question_reject**
> v2_session_question_reject(session_id, request_id)

**Synchronous variant:** `v2_session_question_reject_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reject pending question request

Reject a pending question request owned by a session.

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
    api_instance = opencode_sdk.SessionQuestionsApi(api_client)
    session_id = 'session_id_example' # str | 
    request_id = 'request_id_example' # str | 

    try:
        # Reject pending question request
        await api_instance.v2_session_question_reject(session_id, request_id)
    except Exception as e:
        print("Exception when calling SessionQuestionsApi->v2_session_question_reject: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **request_id** | **str**|  | 

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
**404** | SessionNotFoundError | QuestionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_session_question_reply**
> v2_session_question_reply(session_id, request_id, question_v2_reply)

**Synchronous variant:** `v2_session_question_reply_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Reply to pending question request

Answer a pending question request owned by a session.

### Example


```python
import opencode_sdk
from opencode_sdk.models.question_v2_reply import QuestionV2Reply
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
    api_instance = opencode_sdk.SessionQuestionsApi(api_client)
    session_id = 'session_id_example' # str | 
    request_id = 'request_id_example' # str | 
    question_v2_reply = opencode_sdk.QuestionV2Reply() # QuestionV2Reply | 

    try:
        # Reply to pending question request
        await api_instance.v2_session_question_reply(session_id, request_id, question_v2_reply)
    except Exception as e:
        print("Exception when calling SessionQuestionsApi->v2_session_question_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **request_id** | **str**|  | 
 **question_v2_reply** | [**QuestionV2Reply**](QuestionV2Reply.md)|  | 

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
**404** | SessionNotFoundError | QuestionNotFoundError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

