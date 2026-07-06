# V2FsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**List[FileSystemEntry]**](FileSystemEntry.md) |  | 

## Example

```python
from opencode_sdk.models.v2_fs_list200_response import V2FsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2FsList200Response from a JSON string
v2_fs_list200_response_instance = V2FsList200Response.from_json(json)
# print the JSON string representation of the object
print(V2FsList200Response.to_json())

# convert the object into a dict
v2_fs_list200_response_dict = v2_fs_list200_response_instance.to_dict()
# create an instance of V2FsList200Response from a dict
v2_fs_list200_response_from_dict = V2FsList200Response.from_dict(v2_fs_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


