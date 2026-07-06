# PtyUpdated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf55Properties**](GlobalEventPayloadAnyOf55Properties.md) |  | 

## Example

```python
from opencode_sdk.models.pty_updated import PtyUpdated

# TODO update the JSON string below
json = "{}"
# create an instance of PtyUpdated from a JSON string
pty_updated_instance = PtyUpdated.from_json(json)
# print the JSON string representation of the object
print(PtyUpdated.to_json())

# convert the object into a dict
pty_updated_dict = pty_updated_instance.to_dict()
# create an instance of PtyUpdated from a dict
pty_updated_from_dict = PtyUpdated.from_dict(pty_updated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


