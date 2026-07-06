# RetryPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**attempt** | **int** |  | 
**error** | [**APIError**](APIError.md) |  | 
**time** | [**RetryPartTime**](RetryPartTime.md) |  | 

## Example

```python
from opencode_sdk.models.retry_part import RetryPart

# TODO update the JSON string below
json = "{}"
# create an instance of RetryPart from a JSON string
retry_part_instance = RetryPart.from_json(json)
# print the JSON string representation of the object
print(RetryPart.to_json())

# convert the object into a dict
retry_part_dict = retry_part_instance.to_dict()
# create an instance of RetryPart from a dict
retry_part_from_dict = RetryPart.from_dict(retry_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


