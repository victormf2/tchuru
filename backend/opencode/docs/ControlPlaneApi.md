# opencode_sdk.ControlPlaneApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**experimental_control_plane_move_session**](ControlPlaneApi.md#experimental_control_plane_move_session) | **POST** /experimental/control-plane/move-session | Move session


# **experimental_control_plane_move_session**
> experimental_control_plane_move_session(experimental_control_plane_move_session_request=experimental_control_plane_move_session_request)

**Synchronous variant:** `experimental_control_plane_move_session_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Move session

Move a session to another project directory, optionally transferring local changes.

### Example


```python
import opencode_sdk
from opencode_sdk.models.experimental_control_plane_move_session_request import ExperimentalControlPlaneMoveSessionRequest
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
    api_instance = opencode_sdk.ControlPlaneApi(api_client)
    experimental_control_plane_move_session_request = opencode_sdk.ExperimentalControlPlaneMoveSessionRequest() # ExperimentalControlPlaneMoveSessionRequest |  (optional)

    try:
        # Move session
        await api_instance.experimental_control_plane_move_session(experimental_control_plane_move_session_request=experimental_control_plane_move_session_request)
    except Exception as e:
        print("Exception when calling ControlPlaneApi->experimental_control_plane_move_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **experimental_control_plane_move_session_request** | [**ExperimentalControlPlaneMoveSessionRequest**](ExperimentalControlPlaneMoveSessionRequest.md)|  | [optional] 

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
**204** | Session moved |  -  |
**400** | MoveSessionError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

