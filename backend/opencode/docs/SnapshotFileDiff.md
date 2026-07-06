# SnapshotFileDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **str** |  | [optional] 
**patch** | **str** |  | [optional] 
**additions** | **float** |  | 
**deletions** | **float** |  | 
**status** | **str** |  | [optional] 

## Example

```python
from opencode_sdk.models.snapshot_file_diff import SnapshotFileDiff

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotFileDiff from a JSON string
snapshot_file_diff_instance = SnapshotFileDiff.from_json(json)
# print the JSON string representation of the object
print(SnapshotFileDiff.to_json())

# convert the object into a dict
snapshot_file_diff_dict = snapshot_file_diff_instance.to_dict()
# create an instance of SnapshotFileDiff from a dict
snapshot_file_diff_from_dict = SnapshotFileDiff.from_dict(snapshot_file_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


