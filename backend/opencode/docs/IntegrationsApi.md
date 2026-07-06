# opencode_sdk.IntegrationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_integration_attempt_cancel**](IntegrationsApi.md#v2_integration_attempt_cancel) | **DELETE** /api/integration/attempt/{attemptID} | Cancel OAuth connection
[**v2_integration_attempt_complete**](IntegrationsApi.md#v2_integration_attempt_complete) | **POST** /api/integration/attempt/{attemptID}/complete | Complete OAuth connection
[**v2_integration_attempt_status**](IntegrationsApi.md#v2_integration_attempt_status) | **GET** /api/integration/attempt/{attemptID} | Get OAuth attempt status
[**v2_integration_connect_key**](IntegrationsApi.md#v2_integration_connect_key) | **POST** /api/integration/{integrationID}/connect/key | Connect with key
[**v2_integration_connect_oauth**](IntegrationsApi.md#v2_integration_connect_oauth) | **POST** /api/integration/{integrationID}/connect/oauth | Begin OAuth connection
[**v2_integration_get**](IntegrationsApi.md#v2_integration_get) | **GET** /api/integration/{integrationID} | Get integration
[**v2_integration_list**](IntegrationsApi.md#v2_integration_list) | **GET** /api/integration | List integrations


# **v2_integration_attempt_cancel**
> v2_integration_attempt_cancel(attempt_id, location=location)

**Synchronous variant:** `v2_integration_attempt_cancel_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Cancel OAuth connection

Cancel an OAuth attempt and release its resources.

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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    attempt_id = 'attempt_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Cancel OAuth connection
        await api_instance.v2_integration_attempt_cancel(attempt_id, location=location)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_attempt_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt_id** | **str**|  | 
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

# **v2_integration_attempt_complete**
> v2_integration_attempt_complete(attempt_id, v2_integration_attempt_complete_request, location=location)

**Synchronous variant:** `v2_integration_attempt_complete_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Complete OAuth connection

Complete a code-based OAuth attempt and store the resulting credential.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_integration_attempt_complete_request import V2IntegrationAttemptCompleteRequest
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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    attempt_id = 'attempt_id_example' # str | 
    v2_integration_attempt_complete_request = opencode_sdk.V2IntegrationAttemptCompleteRequest() # V2IntegrationAttemptCompleteRequest | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Complete OAuth connection
        await api_instance.v2_integration_attempt_complete(attempt_id, v2_integration_attempt_complete_request, location=location)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_attempt_complete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt_id** | **str**|  | 
 **v2_integration_attempt_complete_request** | [**V2IntegrationAttemptCompleteRequest**](V2IntegrationAttemptCompleteRequest.md)|  | 
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

# **v2_integration_attempt_status**
> V2IntegrationAttemptStatus200Response v2_integration_attempt_status(attempt_id, location=location)

**Synchronous variant:** `v2_integration_attempt_status_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get OAuth attempt status

Poll the current status of an OAuth attempt.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_integration_attempt_status200_response import V2IntegrationAttemptStatus200Response
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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    attempt_id = 'attempt_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Get OAuth attempt status
        api_response = await api_instance.v2_integration_attempt_status(attempt_id, location=location)
        print("The response of IntegrationsApi->v2_integration_attempt_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_attempt_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attempt_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2IntegrationAttemptStatus200Response**](V2IntegrationAttemptStatus200Response.md)

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

# **v2_integration_connect_key**
> v2_integration_connect_key(integration_id, v2_integration_connect_key_request, location=location)

**Synchronous variant:** `v2_integration_connect_key_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Connect with key

Run a key authentication method and store the resulting credential.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_integration_connect_key_request import V2IntegrationConnectKeyRequest
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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    integration_id = 'integration_id_example' # str | 
    v2_integration_connect_key_request = opencode_sdk.V2IntegrationConnectKeyRequest() # V2IntegrationConnectKeyRequest | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Connect with key
        await api_instance.v2_integration_connect_key(integration_id, v2_integration_connect_key_request, location=location)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_connect_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_id** | **str**|  | 
 **v2_integration_connect_key_request** | [**V2IntegrationConnectKeyRequest**](V2IntegrationConnectKeyRequest.md)|  | 
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

# **v2_integration_connect_oauth**
> V2IntegrationConnectOauth200Response v2_integration_connect_oauth(integration_id, v2_integration_connect_oauth_request, location=location)

**Synchronous variant:** `v2_integration_connect_oauth_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Begin OAuth connection

Start an OAuth attempt and return the authorization details.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_integration_connect_oauth200_response import V2IntegrationConnectOauth200Response
from opencode_sdk.models.v2_integration_connect_oauth_request import V2IntegrationConnectOauthRequest
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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    integration_id = 'integration_id_example' # str | 
    v2_integration_connect_oauth_request = opencode_sdk.V2IntegrationConnectOauthRequest() # V2IntegrationConnectOauthRequest | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Begin OAuth connection
        api_response = await api_instance.v2_integration_connect_oauth(integration_id, v2_integration_connect_oauth_request, location=location)
        print("The response of IntegrationsApi->v2_integration_connect_oauth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_connect_oauth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_id** | **str**|  | 
 **v2_integration_connect_oauth_request** | [**V2IntegrationConnectOauthRequest**](V2IntegrationConnectOauthRequest.md)|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2IntegrationConnectOauth200Response**](V2IntegrationConnectOauth200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | InvalidRequestError |  -  |
**401** | UnauthorizedError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_integration_get**
> V2IntegrationGet200Response v2_integration_get(integration_id, location=location)

**Synchronous variant:** `v2_integration_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get integration

Retrieve one integration and its authentication methods.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_integration_get200_response import V2IntegrationGet200Response
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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    integration_id = 'integration_id_example' # str | 
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # Get integration
        api_response = await api_instance.v2_integration_get(integration_id, location=location)
        print("The response of IntegrationsApi->v2_integration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integration_id** | **str**|  | 
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2IntegrationGet200Response**](V2IntegrationGet200Response.md)

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

# **v2_integration_list**
> V2IntegrationList200Response v2_integration_list(location=location)

**Synchronous variant:** `v2_integration_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List integrations

Retrieve available integrations and their authentication methods.

### Example


```python
import opencode_sdk
from opencode_sdk.models.v2_agent_list_location_parameter import V2AgentListLocationParameter
from opencode_sdk.models.v2_integration_list200_response import V2IntegrationList200Response
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
    api_instance = opencode_sdk.IntegrationsApi(api_client)
    location = opencode_sdk.V2AgentListLocationParameter() # V2AgentListLocationParameter |  (optional)

    try:
        # List integrations
        api_response = await api_instance.v2_integration_list(location=location)
        print("The response of IntegrationsApi->v2_integration_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->v2_integration_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | [**V2AgentListLocationParameter**](.md)|  | [optional] 

### Return type

[**V2IntegrationList200Response**](V2IntegrationList200Response.md)

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

