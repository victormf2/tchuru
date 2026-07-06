# opencode_sdk.CommandsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_command_list**](CommandsApi.md#v2_command_list) | **GET** /api/command | List commands


# **v2_command_list**
> V2CommandList200Response v2_command_list(location=location)

**Synchronous variant:** `v2_command_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List commands

Retrieve currently registered commands.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_command_list200_response import V2CommandList200Response
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
    api_instance = opencode_sdk.CommandsApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List commands
        api_response = await api_instance.v2_command_list(location=location)
        print("The response of CommandsApi->v2_command_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommandsApi->v2_command_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2CommandList200Response**](V2CommandList200Response.md)

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

