# PtyExited


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf57Properties**](GlobalEventPayloadAnyOf57Properties.md) |  | 

## Example

```python
from opencode_sdk.models.pty_exited import PtyExited

# TODO update the JSON string below
json = "{}"
# create an instance of PtyExited from a JSON string
pty_exited_instance = PtyExited.from_json(json)
# print the JSON string representation of the object
print(PtyExited.to_json())

# convert the object into a dict
pty_exited_dict = pty_exited_instance.to_dict()
# create an instance of PtyExited from a dict
pty_exited_from_dict = PtyExited.from_dict(pty_exited_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


