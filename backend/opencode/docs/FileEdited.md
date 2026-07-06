# FileEdited


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**type** | **str** |  | 
**durable** | [**SessionStatusDurable**](SessionStatusDurable.md) |  | [optional] 
**location** | [**LocationRef**](LocationRef.md) |  | [optional] 
**data** | [**GlobalEventPayloadAnyOf48Properties**](GlobalEventPayloadAnyOf48Properties.md) |  | 

## Example

```python
from opencode_sdk.models.file_edited import FileEdited

# TODO update the JSON string below
json = "{}"
# create an instance of FileEdited from a JSON string
file_edited_instance = FileEdited.from_json(json)
# print the JSON string representation of the object
print(FileEdited.to_json())

# convert the object into a dict
file_edited_dict = file_edited_instance.to_dict()
# create an instance of FileEdited from a dict
file_edited_from_dict = FileEdited.from_dict(file_edited_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


