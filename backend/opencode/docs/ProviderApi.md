# opencode_sdk.ProviderApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provider_auth**](ProviderApi.md#provider_auth) | **GET** /provider/auth | Get provider auth methods
[**provider_list**](ProviderApi.md#provider_list) | **GET** /provider | List providers
[**provider_oauth_authorize**](ProviderApi.md#provider_oauth_authorize) | **POST** /provider/{providerID}/oauth/authorize | Start OAuth authorization
[**provider_oauth_callback**](ProviderApi.md#provider_oauth_callback) | **POST** /provider/{providerID}/oauth/callback | Handle OAuth callback


# **provider_auth**
> Dict[str, List[ProviderAuthMethod]] provider_auth(directory=directory, workspace=workspace)

**Synchronous variant:** `provider_auth_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get provider auth methods

Retrieve available authentication methods for all AI providers.

### Example


```python
import opencode_sdk
from opencode_sdk.models.provider_auth_method import ProviderAuthMethod
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
    api_instance = opencode_sdk.ProviderApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get provider auth methods
        api_response = await api_instance.provider_auth(directory=directory, workspace=workspace)
        print("The response of ProviderApi->provider_auth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_auth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

**Dict[str, List[ProviderAuthMethod]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Provider auth methods |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_list**
> ProviderList200Response provider_list(directory=directory, workspace=workspace)

**Synchronous variant:** `provider_list_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List providers

Get a list of all available AI providers, including both available and connected ones.

### Example


```python
import opencode_sdk
from opencode_sdk.models.provider_list200_response import ProviderList200Response
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
    api_instance = opencode_sdk.ProviderApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List providers
        api_response = await api_instance.provider_list(directory=directory, workspace=workspace)
        print("The response of ProviderApi->provider_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**ProviderList200Response**](ProviderList200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of providers |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_oauth_authorize**
> ProviderAuthAuthorization provider_oauth_authorize(provider_id, directory=directory, workspace=workspace, provider_oauth_authorize_request=provider_oauth_authorize_request)

**Synchronous variant:** `provider_oauth_authorize_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Start OAuth authorization

Start the OAuth authorization flow for a provider.

### Example


```python
import opencode_sdk
from opencode_sdk.models.provider_auth_authorization import ProviderAuthAuthorization
from opencode_sdk.models.provider_oauth_authorize_request import ProviderOauthAuthorizeRequest
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
    api_instance = opencode_sdk.ProviderApi(api_client)
    provider_id = 'provider_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    provider_oauth_authorize_request = opencode_sdk.ProviderOauthAuthorizeRequest() # ProviderOauthAuthorizeRequest |  (optional)

    try:
        # Start OAuth authorization
        api_response = await api_instance.provider_oauth_authorize(provider_id, directory=directory, workspace=workspace, provider_oauth_authorize_request=provider_oauth_authorize_request)
        print("The response of ProviderApi->provider_oauth_authorize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_oauth_authorize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **provider_oauth_authorize_request** | [**ProviderOauthAuthorizeRequest**](ProviderOauthAuthorizeRequest.md)|  | [optional] 

### Return type

[**ProviderAuthAuthorization**](ProviderAuthAuthorization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization URL and method |  -  |
**400** | ProviderAuthError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_oauth_callback**
> bool provider_oauth_callback(provider_id, directory=directory, workspace=workspace, provider_oauth_callback_request=provider_oauth_callback_request)

**Synchronous variant:** `provider_oauth_callback_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Handle OAuth callback

Handle the OAuth callback from a provider after user authorization.

### Example


```python
import opencode_sdk
from opencode_sdk.models.provider_oauth_callback_request import ProviderOauthCallbackRequest
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
    api_instance = opencode_sdk.ProviderApi(api_client)
    provider_id = 'provider_id_example' # str | 
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    provider_oauth_callback_request = opencode_sdk.ProviderOauthCallbackRequest() # ProviderOauthCallbackRequest |  (optional)

    try:
        # Handle OAuth callback
        api_response = await api_instance.provider_oauth_callback(provider_id, directory=directory, workspace=workspace, provider_oauth_callback_request=provider_oauth_callback_request)
        print("The response of ProviderApi->provider_oauth_callback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_oauth_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **provider_oauth_callback_request** | [**ProviderOauthCallbackRequest**](ProviderOauthCallbackRequest.md)|  | [optional] 

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
**200** | OAuth callback processed successfully |  -  |
**400** | ProviderAuthError | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

