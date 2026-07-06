# TuiPublishRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**properties** | [**TuiSelectSessionRequest**](TuiSelectSessionRequest.md) |  | 

## Example

```python
from opencode_sdk.models.tui_publish_request import TuiPublishRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TuiPublishRequest from a JSON string
tui_publish_request_instance = TuiPublishRequest.from_json(json)
# print the JSON string representation of the object
print(TuiPublishRequest.to_json())

# convert the object into a dict
tui_publish_request_dict = tui_publish_request_instance.to_dict()
# create an instance of TuiPublishRequest from a dict
tui_publish_request_from_dict = TuiPublishRequest.from_dict(tui_publish_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


