# opencode_sdk.EventApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_subscribe**](EventApi.md#event_subscribe) | **GET** /event | Subscribe to events


# **event_subscribe**
> Event event_subscribe(directory=directory, workspace=workspace)

**Synchronous variant:** `event_subscribe_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Subscribe to events

Get events

### Example


```python
import opencode_sdk
from opencode_sdk.models.event import Event
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
    api_instance = opencode_sdk.EventApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Subscribe to events
        api_response = await api_instance.event_subscribe(directory=directory, workspace=workspace)
        print("The response of EventApi->event_subscribe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventApi->event_subscribe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event stream |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

