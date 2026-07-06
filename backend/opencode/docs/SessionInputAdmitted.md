# SessionInputAdmitted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admitted_seq** | **int** |  | 
**id** | **str** |  | 
**session_id** | **str** |  | 
**prompt** | [**Prompt**](Prompt.md) |  | 
**delivery** | **str** |  | 
**time_created** | **float** |  | 
**promoted_seq** | **int** |  | [optional] 

## Example

```python
from opencode_sdk.models.session_input_admitted import SessionInputAdmitted

# TODO update the JSON string below
json = "{}"
# create an instance of SessionInputAdmitted from a JSON string
session_input_admitted_instance = SessionInputAdmitted.from_json(json)
# print the JSON string representation of the object
print(SessionInputAdmitted.to_json())

# convert the object into a dict
session_input_admitted_dict = session_input_admitted_instance.to_dict()
# create an instance of SessionInputAdmitted from a dict
session_input_admitted_from_dict = SessionInputAdmitted.from_dict(session_input_admitted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


