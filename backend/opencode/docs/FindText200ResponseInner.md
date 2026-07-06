# FindText200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | [**FindText200ResponseInnerPath**](FindText200ResponseInnerPath.md) |  | 
**lines** | [**FindText200ResponseInnerPath**](FindText200ResponseInnerPath.md) |  | 
**line_number** | **int** |  | 
**absolute_offset** | **int** |  | 
**submatches** | [**List[FindText200ResponseInnerSubmatchesInner]**](FindText200ResponseInnerSubmatchesInner.md) |  | 

## Example

```python
from opencode_sdk.models.find_text200_response_inner import FindText200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of FindText200ResponseInner from a JSON string
find_text200_response_inner_instance = FindText200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(FindText200ResponseInner.to_json())

# convert the object into a dict
find_text200_response_inner_dict = find_text200_response_inner_instance.to_dict()
# create an instance of FindText200ResponseInner from a dict
find_text200_response_inner_from_dict = FindText200ResponseInner.from_dict(find_text200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


