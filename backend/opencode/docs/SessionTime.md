# SessionTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** |  | 
**updated** | **int** |  | 
**compacting** | **int** |  | [optional] 
**archived** | **float** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_time import SessionTime

# TODO update the JSON string below
json = "{}"
# create an instance of SessionTime from a JSON string
session_time_instance = SessionTime.from_json(json)
# print the JSON string representation of the object
print(SessionTime.to_json())

# convert the object into a dict
session_time_dict = session_time_instance.to_dict()
# create an instance of SessionTime from a dict
session_time_from_dict = SessionTime.from_dict(session_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


