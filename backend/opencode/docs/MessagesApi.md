# opencode_sdk.MessagesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_session_messages**](MessagesApi.md#v2_session_messages) | **GET** /api/session/{sessionID}/message | Get session messages


# **v2_session_messages**
> SessionMessagesResponse v2_session_messages(session_id, limit=limit, order=order, cursor=cursor)

**Synchronous variant:** `v2_session_messages_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get session messages

Retrieve projected messages for a session. Items keep the requested order across pages; use cursor.next or cursor.previous to move through the ordered timeline.

### Example


```python
import opencode_sdk
from opencode_sdk.models.session_messages_response import SessionMessagesResponse
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
    api_instance = opencode_sdk.MessagesApi(api_client)
    session_id = 'session_id_example' # str | 
    limit = 3.4 # float |  (optional)
    order = 'order_example' # str |  (optional)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # Get session messages
        api_response = await api_instance.v2_session_messages(session_id, limit=limit, order=order, cursor=cursor)
        print("The response of MessagesApi->v2_session_messages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->v2_session_messages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | 
 **limit** | **float**|  | [optional] 
 **order** | **str**|  | [optional] 
 **cursor** | **str**|  | [optional] 

### Return type

[**SessionMessagesResponse**](SessionMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SessionMessagesResponse |  -  |
**400** | InvalidCursorError | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |
**404** | SessionNotFoundError |  -  |
**500** | UnknownError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

