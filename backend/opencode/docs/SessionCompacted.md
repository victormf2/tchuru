# SessionCompacted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**SyncStealRequest**](SyncStealRequest.md) |  | 

## Example

```python
from opencode_sdk.models.session_compacted import SessionCompacted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionCompacted from a JSON string
session_compacted_instance = SessionCompacted.from_json(json)
# print the JSON string representation of the object
print(SessionCompacted.to_json())

# convert the object into a dict
session_compacted_dict = session_compacted_instance.to_dict()
# create an instance of SessionCompacted from a dict
session_compacted_from_dict = SessionCompacted.from_dict(session_compacted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


