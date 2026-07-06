# SnapshotPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**session_id** | **str** |  | 
**message_id** | **str** |  | 
**type** | **str** |  | 
**snapshot** | **str** |  | 

## Example

```python
from opencode_sdk.models.snapshot_part import SnapshotPart

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotPart from a JSON string
snapshot_part_instance = SnapshotPart.from_json(json)
# print the JSON string representation of the object
print(SnapshotPart.to_json())

# convert the object into a dict
snapshot_part_dict = snapshot_part_instance.to_dict()
# create an instance of SnapshotPart from a dict
snapshot_part_from_dict = SnapshotPart.from_dict(snapshot_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


