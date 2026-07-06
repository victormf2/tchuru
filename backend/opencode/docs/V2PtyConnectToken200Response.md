# V2PtyConnectToken200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**LocationInfo**](LocationInfo.md) |  | 
**data** | [**PtyTicketConnectToken**](PtyTicketConnectToken.md) |  | 

## Example

```python
from opencode_sdk.models.v2_pty_connect_token200_response import V2PtyConnectToken200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V2PtyConnectToken200Response from a JSON string
v2_pty_connect_token200_response_instance = V2PtyConnectToken200Response.from_json(json)
# print the JSON string representation of the object
print(V2PtyConnectToken200Response.to_json())

# convert the object into a dict
v2_pty_connect_token200_response_dict = v2_pty_connect_token200_response_instance.to_dict()
# create an instance of V2PtyConnectToken200Response from a dict
v2_pty_connect_token200_response_from_dict = V2PtyConnectToken200Response.from_dict(v2_pty_connect_token200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


