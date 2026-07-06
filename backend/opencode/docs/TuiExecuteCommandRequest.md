# TuiExecuteCommandRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** |  | 

## Example

```python
from opencode_sdk.models.tui_execute_command_request import TuiExecuteCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TuiExecuteCommandRequest from a JSON string
tui_execute_command_request_instance = TuiExecuteCommandRequest.from_json(json)
# print the JSON string representation of the object
print(TuiExecuteCommandRequest.to_json())

# convert the object into a dict
tui_execute_command_request_dict = tui_execute_command_request_instance.to_dict()
# create an instance of TuiExecuteCommandRequest from a dict
tui_execute_command_request_from_dict = TuiExecuteCommandRequest.from_dict(tui_execute_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


