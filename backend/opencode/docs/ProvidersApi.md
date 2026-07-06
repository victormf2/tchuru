# opencode_sdk.ProvidersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_provider_get**](ProvidersApi.md#v2_provider_get) | **GET** /api/provider/{providerID} | Get provider
[**v2_provider_list**](ProvidersApi.md#v2_provider_list) | **GET** /api/provider | List providers


# **v2_provider_get**
> V2ProviderGet200Response v2_provider_get(provider_id, location=location)

**Synchronous variant:** `v2_provider_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get provider

Retrieve a single AI provider so clients can inspect its availability and endpoint settings.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_provider_get200_response import V2ProviderGet200Response
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
    api_instance = opencode_sdk.ProvidersApi(api_client)
    provider_id = 'provider_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Get provider
        api_response = await api_instance.v2_provider_get(provider_id, location=location)
        print("The response of ProvidersApi->v2_provider_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvidersApi->v2_provider_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2ProviderGet200Response**](V2ProviderGet200Response.md)

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
**404** | ProviderNotFoundError |  -  |
**503** | ServiceUnavailableError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_provider_list**
> V2ProviderList200Response v2_provider_list(location=location)

**Synchronous variant:** `v2_provider_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List providers

Retrieve active AI providers so clients can show provider availability and configuration.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_provider_list200_response import V2ProviderList200Response
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
    api_instance = opencode_sdk.ProvidersApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List providers
        api_response = await api_instance.v2_provider_list(location=location)
        print("The response of ProvidersApi->v2_provider_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvidersApi->v2_provider_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2ProviderList200Response**](V2ProviderList200Response.md)

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
**503** | ServiceUnavailableError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

