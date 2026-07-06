# Part


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**text** | **str** |  | 
**synthetic** | **bool** |  | [optional] 
**ignored** | **bool** |  | [optional] 
**time** | [**RetryPartTime**](RetryPartTime.md) |  | 
**metadata** | **object** |  | [optional] 
**prompt** | **str** |  | 
**description** | **str** |  | 
**agent** | **str** |  | 
**model** | [**SessionPromptAsyncRequestModel**](SessionPromptAsyncRequestModel.md) |  | [optional] 
**command** | **str** |  | [optional] 
**mime** | **str** |  | 
**filename** | **str** |  | [optional] 
**url** | **str** |  | 
**source** | [**AgentPartSource**](AgentPartSource.md) |  | [optional] 
**call_id** | **str** |  | 
**tool** | **str** |  | 
**state** | [**ToolState**](ToolState.md) |  | 
**snapshot** | **str** |  | 
**reason** | **str** |  | 
**cost** | **float** |  | 
**tokens** | [**AssistantMessageTokens**](AssistantMessageTokens.md) |  | 
**hash** | **str** |  | 
**files** | **List[str]** |  | 
**name** | **str** |  | 
**attempt** | **int** |  | 
**error** | [**APIError**](APIError.md) |  | 
**auto** | **bool** |  | 
**overflow** | **bool** |  | [optional] 
**tail_start_id** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.part import Part

# TODO update the JSON string below
json = "{}"
# create an instance of Part from a JSON string
part_instance = Part.from_json(json)
# print the JSON string representation of the object
print(Part.to_json())

# convert the object into a dict
part_dict = part_instance.to_dict()
# create an instance of Part from a dict
part_from_dict = Part.from_dict(part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


