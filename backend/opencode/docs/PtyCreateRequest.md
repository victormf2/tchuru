# PtyCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** |  | [optional] 
**args** | **List[str]** |  | [optional] 
**cwd** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**env** | **Dict[str, str]** |  | [optional] 

## Example

```python
from opencode_sdk.models.pty_create_request import PtyCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PtyCreateRequest from a JSON string
pty_create_request_instance = PtyCreateRequest.from_json(json)
# print the JSON string representation of the object
print(PtyCreateRequest.to_json())

# convert the object into a dict
pty_create_request_dict = pty_create_request_instance.to_dict()
# create an instance of PtyCreateRequest from a dict
pty_create_request_from_dict = PtyCreateRequest.from_dict(pty_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


