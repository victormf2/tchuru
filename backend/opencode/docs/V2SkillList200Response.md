# V2SkillList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**List[SkillV2Info]**](SkillV2Info.md) |  | 

## Example

```python
from opencode_sdk.models.v2_skill_list200_response import V2SkillList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2SkillList200Response from a JSON string
v2_skill_list200_response_instance = V2SkillList200Response.from_json(json)
# print the JSON string representation of the object
print(V2SkillList200Response.to_json())

# convert the object into a dict
v2_skill_list200_response_dict = v2_skill_list200_response_instance.to_dict()
# create an instance of V2SkillList200Response from a dict
v2_skill_list200_response_from_dict = V2SkillList200Response.from_dict(v2_skill_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


