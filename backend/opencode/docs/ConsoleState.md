# ConsoleState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**console_managed_providers** | **List[str]** |  | 
**active_org_name** | **str** |  | [optional] 
**switchable_org_count** | **int** |  | 

## Example

```python
from opencode_sdk.models.console_state import ConsoleState

# TODO update the JSON string below
json = "{}"
# create an instance of ConsoleState from a JSON string
console_state_instance = ConsoleState.from_json(json)
# print the JSON string representation of the object
print(ConsoleState.to_json())

# convert the object into a dict
console_state_dict = console_state_instance.to_dict()
# create an instance of ConsoleState from a dict
console_state_from_dict = ConsoleState.from_dict(console_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


