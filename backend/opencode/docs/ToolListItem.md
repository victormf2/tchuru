# ToolListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**description** | **str** |  | 
**parameters** | **object** |  | 

## Example

```python
from opencode_sdk.models.tool_list_item import ToolListItem

# TODO update the JSON string below
json = "{}"
# create an instance of ToolListItem from a JSON string
tool_list_item_instance = ToolListItem.from_json(json)
# print the JSON string representation of the object
print(ToolListItem.to_json())

# convert the object into a dict
tool_list_item_dict = tool_list_item_instance.to_dict()
# create an instance of ToolListItem from a dict
tool_list_item_from_dict = ToolListItem.from_dict(tool_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


