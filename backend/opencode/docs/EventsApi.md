# opencode_sdk.EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_event_subscribe**](EventsApi.md#v2_event_subscribe) | **GET** /api/event | Subscribe to events


# **v2_event_subscribe**
> V2Event v2_event_subscribe()

**Synchronous variant:** `v2_event_subscribe_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Subscribe to events

Subscribe to native event payloads for the server.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_event import V2Event
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
    api_instance = opencode_sdk.EventsApi(api_client)

    try:
        # Subscribe to events
        api_response = await api_instance.v2_event_subscribe()
        print("The response of EventsApi->v2_event_subscribe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->v2_event_subscribe: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**V2Event**](V2Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event stream |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

