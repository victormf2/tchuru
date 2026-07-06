# PtyCreated


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
from opencode_sdk.models.pty_created import PtyCreated

# TODO update the JSON string below
json = "{}"
# create an instance of PtyCreated from a JSON string
pty_created_instance = PtyCreated.from_json(json)
# print the JSON string representation of the object
print(PtyCreated.to_json())

# convert the object into a dict
pty_created_dict = pty_created_instance.to_dict()
# create an instance of PtyCreated from a dict
pty_created_from_dict = PtyCreated.from_dict(pty_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


