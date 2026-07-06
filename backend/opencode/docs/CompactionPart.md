# CompactionPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**auto** | **bool** |  | 
**overflow** | **bool** |  | [optional] 
**tail_start_id** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.compaction_part import CompactionPart

# TODO update the JSON string below
json = "{}"
# create an instance of CompactionPart from a JSON string
compaction_part_instance = CompactionPart.from_json(json)
# print the JSON string representation of the object
print(CompactionPart.to_json())

# convert the object into a dict
compaction_part_dict = compaction_part_instance.to_dict()
# create an instance of CompactionPart from a dict
compaction_part_from_dict = CompactionPart.from_dict(compaction_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


