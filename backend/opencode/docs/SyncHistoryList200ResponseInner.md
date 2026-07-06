# SyncHistoryList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**aggregate_id** | **str** |  | 
**seq** | **int** |  | 
**type** | **str** |  | 
**data** | **object** |  | 

## Example

```python
from opencode_sdk.models.sync_history_list200_response_inner import SyncHistoryList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SyncHistoryList200ResponseInner from a JSON string
sync_history_list200_response_inner_instance = SyncHistoryList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(SyncHistoryList200ResponseInner.to_json())

# convert the object into a dict
sync_history_list200_response_inner_dict = sync_history_list200_response_inner_instance.to_dict()
# create an instance of SyncHistoryList200ResponseInner from a dict
sync_history_list200_response_inner_from_dict = SyncHistoryList200ResponseInner.from_dict(sync_history_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


