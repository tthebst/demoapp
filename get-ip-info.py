import requests
import ipinfo
import os
ip = requests.get('https://checkip.amazonaws.com').text.strip()
print(ip)
gcp='34.65.247.138'

access_token = os.getenv("accesstoken_ipinfo")
handler = ipinfo.getHandler(access_token)
details = handler.getDetails(gcp)
import pprint
pprint.pprint(details.all)