# SymbolSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | [**FilePartSourceText**](FilePartSourceText.md) |  | 
**type** | **str** |  | 
**path** | **str** |  | 
**range** | [**Range**](Range.md) |  | 
**name** | **str** |  | 
**kind** | **int** |  | 

## Example

```python
from opencode_sdk.models.symbol_source import SymbolSource

# TODO update the JSON string below
json = "{}"
# create an instance of SymbolSource from a JSON string
symbol_source_instance = SymbolSource.from_json(json)
# print the JSON string representation of the object
print(SymbolSource.to_json())

# convert the object into a dict
symbol_source_dict = symbol_source_instance.to_dict()
# create an instance of SymbolSource from a dict
symbol_source_from_dict = SymbolSource.from_dict(symbol_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


