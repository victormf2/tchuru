# PtyTicketConnectToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ticket** | **str** |  | 
**expires_in** | **int** |  | 

## Example

```python
from opencode_sdk.models.pty_ticket_connect_token import PtyTicketConnectToken

# TODO update the JSON string below
json = "{}"
# create an instance of PtyTicketConnectToken from a JSON string
pty_ticket_connect_token_instance = PtyTicketConnectToken.from_json(json)
# print the JSON string representation of the object
print(PtyTicketConnectToken.to_json())

# convert the object into a dict
pty_ticket_connect_token_dict = pty_ticket_connect_token_instance.to_dict()
# create an instance of PtyTicketConnectToken from a dict
pty_ticket_connect_token_from_dict = PtyTicketConnectToken.from_dict(pty_ticket_connect_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


