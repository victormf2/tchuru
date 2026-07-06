# SessionStatusDurable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_id** | **str** |  | 
**seq** | **int** |  | 
**version** | **int** |  | 

## Example

```python
from opencode_sdk.models.session_status_durable import SessionStatusDurable

# TODO update the JSON string below
json = "{}"
# create an instance of SessionStatusDurable from a JSON string
session_status_durable_instance = SessionStatusDurable.from_json(json)
# print the JSON string representation of the object
print(SessionStatusDurable.to_json())

# convert the object into a dict
session_status_durable_dict = session_status_durable_instance.to_dict()
# create an instance of SessionStatusDurable from a dict
session_status_durable_from_dict = SessionStatusDurable.from_dict(session_status_durable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


