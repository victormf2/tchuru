# SessionsResponseCursor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous** | **str** |  | [optional] 
**next** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.sessions_response_cursor import SessionsResponseCursor

# TODO update the JSON string below
json = "{}"
# create an instance of SessionsResponseCursor from a JSON string
sessions_response_cursor_instance = SessionsResponseCursor.from_json(json)
# print the JSON string representation of the object
print(SessionsResponseCursor.to_json())

# convert the object into a dict
sessions_response_cursor_dict = sessions_response_cursor_instance.to_dict()
# create an instance of SessionsResponseCursor from a dict
sessions_response_cursor_from_dict = SessionsResponseCursor.from_dict(sessions_response_cursor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


