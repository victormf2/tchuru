# opencode_sdk.OpencodeHttpApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_agent_list**](OpencodeHttpApiApi.md#v2_agent_list) | **GET** /api/agent | List agents
[**v2_credential_remove**](OpencodeHttpApiApi.md#v2_credential_remove) | **DELETE** /api/credential/{credentialID} | Remove credential
[**v2_credential_update**](OpencodeHttpApiApi.md#v2_credential_update) | **PATCH** /api/credential/{credentialID} | Update credential
[**v2_health_get**](OpencodeHttpApiApi.md#v2_health_get) | **GET** /api/health | Check server health
[**v2_location_get**](OpencodeHttpApiApi.md#v2_location_get) | **GET** /api/location | Get location


# **v2_agent_list**
> V2AgentList200Response v2_agent_list(location=location)

**Synchronous variant:** `v2_agent_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List agents

Retrieve currently registered agents.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list200_response import V2AgentList200Response
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
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
    api_instance = opencode_sdk.OpencodeHttpApiApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List agents
        api_response = await api_instance.v2_agent_list(location=location)
        print("The response of OpencodeHttpApiApi->v2_agent_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpencodeHttpApiApi->v2_agent_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2AgentList200Response**](V2AgentList200Response.md)

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

# **v2_credential_remove**
> v2_credential_remove(credential_id, location=location)

**Synchronous variant:** `v2_credential_remove_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Remove credential

Remove a stored integration credential.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
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
    api_instance = opencode_sdk.OpencodeHttpApiApi(api_client)
    credential_id = 'credential_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Remove credential
        await api_instance.v2_credential_remove(credential_id, location=location)
    except Exception as e:
        print("Exception when calling OpencodeHttpApiApi->v2_credential_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_credential_update**
> v2_credential_update(credential_id, v2_credential_update_request, location=location)

**Synchronous variant:** `v2_credential_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update credential

Update a stored credential label.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_credential_update_request import V2CredentialUpdateRequest
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
    api_instance = opencode_sdk.OpencodeHttpApiApi(api_client)
    credential_id = 'credential_id_example' # str | 
    v2_credential_update_request = opencode_sdk.V2CredentialUpdateRequest() # V2CredentialUpdateRequest | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Update credential
        await api_instance.v2_credential_update(credential_id, v2_credential_update_request, location=location)
    except Exception as e:
        print("Exception when calling OpencodeHttpApiApi->v2_credential_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_id** | **str**|  | 
 **v2_credential_update_request** | [**V2CredentialUpdateRequest**](V2CredentialUpdateRequest.md)|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_health_get**
> V2HealthGet200Response v2_health_get()

**Synchronous variant:** `v2_health_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Check server health

Check whether the API server is ready to accept requests.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_health_get200_response import V2HealthGet200Response
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
    api_instance = opencode_sdk.OpencodeHttpApiApi(api_client)

    try:
        # Check server health
        api_response = await api_instance.v2_health_get()
        print("The response of OpencodeHttpApiApi->v2_health_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpencodeHttpApiApi->v2_health_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**V2HealthGet200Response**](V2HealthGet200Response.md)

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

# **v2_location_get**
> LocationInfo v2_location_get(location=location)

**Synchronous variant:** `v2_location_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get location

Resolve the requested location or the server default location.

### Example


```python
import opencode_sdk
from opencode_sdk.models.location_info import LocationInfo
from opencode_sdk.models.v2_location_get_location_parameter import V2LocationGetLocationParameter
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
    api_instance = opencode_sdk.OpencodeHttpApiApi(api_client)
    location = opencode_sdk.V2LocationGetLocationParameter() # V2LocationGetLocationParameter |  (optional)

    try:
        # Get location
        api_response = await api_instance.v2_location_get(location=location)
        print("The response of OpencodeHttpApiApi->v2_location_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OpencodeHttpApiApi->v2_location_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2LocationGetLocationParameter**](.md)|  | [optional] 

### Return type

[**LocationInfo**](LocationInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Location.Info |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

