# opencode_sdk.GlobalApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_config_get**](GlobalApi.md#global_config_get) | **GET** /global/config | Get global configuration
[**global_config_update**](GlobalApi.md#global_config_update) | **PATCH** /global/config | Update global configuration
[**global_dispose**](GlobalApi.md#global_dispose) | **POST** /global/dispose | Dispose instance
[**global_event**](GlobalApi.md#global_event) | **GET** /global/event | Get global events
[**global_health**](GlobalApi.md#global_health) | **GET** /global/health | Get health
[**global_upgrade**](GlobalApi.md#global_upgrade) | **POST** /global/upgrade | Upgrade opencode


# **global_config_get**
> Config global_config_get()

**Synchronous variant:** `global_config_get_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get global configuration

Retrieve the current global OpenCode configuration settings and preferences.

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
    api_instance = opencode_sdk.GlobalApi(api_client)

    try:
        # Get global configuration
        api_response = await api_instance.global_config_get()
        print("The response of GlobalApi->global_config_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_config_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Get global config info |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_config_update**
> Config global_config_update(config=config)

**Synchronous variant:** `global_config_update_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Update global configuration

Update global OpenCode configuration settings and preferences.

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
    api_instance = opencode_sdk.GlobalApi(api_client)
    config = opencode_sdk.Config() # Config |  (optional)

    try:
        # Update global configuration
        api_response = await api_instance.global_config_update(config=config)
        print("The response of GlobalApi->global_config_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_config_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | Successfully updated global config |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_dispose**
> bool global_dispose()

**Synchronous variant:** `global_dispose_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Dispose instance

Clean up and dispose all OpenCode instances, releasing all resources.

### Example


```python
import opencode_sdk
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
    api_instance = opencode_sdk.GlobalApi(api_client)

    try:
        # Dispose instance
        api_response = await api_instance.global_dispose()
        print("The response of GlobalApi->global_dispose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_dispose: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Global disposed |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_event**
> GlobalEvent global_event()

**Synchronous variant:** `global_event_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get global events

Subscribe to global events from the OpenCode system using server-sent events.

### Example


```python
import opencode_sdk
from opencode_sdk.models.global_event import GlobalEvent
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
    api_instance = opencode_sdk.GlobalApi(api_client)

    try:
        # Get global events
        api_response = await api_instance.global_event()
        print("The response of GlobalApi->global_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_event: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GlobalEvent**](GlobalEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event stream |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_health**
> GlobalHealth200Response global_health()

**Synchronous variant:** `global_health_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Get health

Get health information about the OpenCode server.

### Example


```python
import opencode_sdk
from opencode_sdk.models.global_health200_response import GlobalHealth200Response
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
    api_instance = opencode_sdk.GlobalApi(api_client)

    try:
        # Get health
        api_response = await api_instance.global_health()
        print("The response of GlobalApi->global_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_health: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GlobalHealth200Response**](GlobalHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Health information |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_upgrade**
> GlobalUpgrade200Response global_upgrade(global_upgrade_request=global_upgrade_request)

**Synchronous variant:** `global_upgrade_sync(...)` — same parameters and return type, but blocks until completion instead of requiring `await`.

Upgrade opencode

Upgrade opencode to the specified version or latest if not specified.

### Example


```python
import opencode_sdk
from opencode_sdk.models.global_upgrade200_response import GlobalUpgrade200Response
from opencode_sdk.models.global_upgrade_request import GlobalUpgradeRequest
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
    api_instance = opencode_sdk.GlobalApi(api_client)
    global_upgrade_request = opencode_sdk.GlobalUpgradeRequest() # GlobalUpgradeRequest |  (optional)

    try:
        # Upgrade opencode
        api_response = await api_instance.global_upgrade(global_upgrade_request=global_upgrade_request)
        print("The response of GlobalApi->global_upgrade:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_upgrade_request** | [**GlobalUpgradeRequest**](GlobalUpgradeRequest.md)|  | [optional] 

### Return type

[**GlobalUpgrade200Response**](GlobalUpgrade200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upgrade result |  -  |
**400** | BadRequest | InvalidRequestError |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

