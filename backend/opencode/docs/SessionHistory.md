# SessionHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SessionDurableEvent]**](SessionDurableEvent.md) |  | 
**has_more** | **bool** |  | 

## Example

```python
from opencode_sdk.models.session_history import SessionHistory

# TODO update the JSON string below
json = "{}"
# create an instance of SessionHistory from a JSON string
session_history_instance = SessionHistory.from_json(json)
# print the JSON string representation of the object
print(SessionHistory.to_json())

# convert the object into a dict
session_history_dict = session_history_instance.to_dict()
# create an instance of SessionHistory from a dict
session_history_from_dict = SessionHistory.from_dict(session_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


