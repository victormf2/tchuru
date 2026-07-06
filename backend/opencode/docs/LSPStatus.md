# LSPStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**root** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from opencode_sdk.models.lsp_status import LSPStatus

# TODO update the JSON string below
json = "{}"
# create an instance of LSPStatus from a JSON string
lsp_status_instance = LSPStatus.from_json(json)
# print the JSON string representation of the object
print(LSPStatus.to_json())

# convert the object into a dict
lsp_status_dict = lsp_status_instance.to_dict()
# create an instance of LSPStatus from a dict
lsp_status_from_dict = LSPStatus.from_dict(lsp_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


