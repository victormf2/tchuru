# opencode_sdk.ConfigApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config_get**](ConfigApi.md#config_get) | **GET** /config | Get configuration
[**config_providers**](ConfigApi.md#config_providers) | **GET** /config/providers | List config providers
[**config_update**](ConfigApi.md#config_update) | **PATCH** /config | Update configuration


# **config_get**
> Config config_get(directory=directory, workspace=workspace)

**Synchronous variant:** `config_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get configuration

Retrieve the current OpenCode configuration settings and preferences.

### Example


```python
import opencode_sdk
from opencode_sdk.models.config import Config
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
    api_instance = opencode_sdk.ConfigApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # Get configuration
        api_response = await api_instance.config_get(directory=directory, workspace=workspace)
        print("The response of ConfigApi->config_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigApi->config_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**Config**](Config.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get config info |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **config_providers**
> ConfigProviders200Response config_providers(directory=directory, workspace=workspace)

**Synchronous variant:** `config_providers_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

List config providers

Get a list of all configured AI providers and their default models.

### Example


```python
import opencode_sdk
from opencode_sdk.models.config_providers200_response import ConfigProviders200Response
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
    api_instance = opencode_sdk.ConfigApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)

    try:
        # List config providers
        api_response = await api_instance.config_providers(directory=directory, workspace=workspace)
        print("The response of ConfigApi->config_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigApi->config_providers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 

### Return type

[**ConfigProviders200Response**](ConfigProviders200Response.md)

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

# **config_update**
> Config config_update(directory=directory, workspace=workspace, config=config)

**Synchronous variant:** `config_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update configuration

Update OpenCode configuration settings and preferences.

### Example


```python
import opencode_sdk
from opencode_sdk.models.config import Config
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
    api_instance = opencode_sdk.ConfigApi(api_client)
    directory = 'directory_example' # str |  (optional)
    workspace = 'workspace_example' # str |  (optional)
    config = opencode_sdk.Config() # Config |  (optional)

    try:
        # Update configuration
        api_response = await api_instance.config_update(directory=directory, workspace=workspace, config=config)
        print("The response of ConfigApi->config_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigApi->config_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**|  | [optional] 
 **workspace** | **str**|  | [optional] 
 **config** | [**Config**](Config.md)|  | [optional] 

### Return type

[**Config**](Config.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated config |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

