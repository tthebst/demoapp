from flask import Flask,jsonify,make_response,request
import os
import requests
import ipinfo


app = Flask(__name__)

@app.route('/v1/get_podinfo' ,methods=["GET", "OPTIONS"])
def get_podinfo():

    # CORS preflight
    if request.method == "OPTIONS":
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response


    #get podinfo data form system
    podinfo={}
    podinfo['success']=True
    try:
        podinfo['os']=os.name
    except:
        podinfo['os']="not available"

    #read in environment information
    podinfo['hostip']=os.getenv("HOSTIP","not available")
    podinfo['podip']=os.getenv("PODIP","not available")
    podinfo['nodename']=os.getenv("NODENAME","not available")

    #read in labels
    try:
        with open("/etc/podinfo/labels","r") as f:
            lines=f.read().splitlines()
            labels={}
            for line in lines:
                labels[str(line).split("=")[0]]=str(line).split("=")[1].strip("\"")
        podinfo["labels"]=labels
    except FileNotFoundError as fn:
        labels={}
        podinfo['success']=False
        podinfo["labels"]=labels
        print(fn)




    try:
        #read in annotations
        with open("/etc/podinfo/annotations","r") as f:
            lines=f.read().splitlines()
            annotations={}
            for line in lines:
                annotations[str(line).split("=")[0]]=str(line).split("=")[1].strip("\"")
        podinfo["annotations"]=annotations
    except FileNotFoundError as fn:
        annotations={}
        podinfo['success']=False
        podinfo["annotations"]=annotations
        print(fn)

    try:
        #read in name
        with open("/etc/podinfo/name","r") as f:
            name=f.readline()
        podinfo["name"]=name
    except FileNotFoundError as fn:
        podinfo['success']=False
        podinfo["name"]=""
        print(fn)




    #get public ip information
    try:
        public_ip = requests.get('https://checkip.amazonaws.com').text.strip()
        pub_ip_info={}
        access_token = os.getenv("accesstoken_ipinfo")
        handler = ipinfo.getHandler(access_token)
        details = handler.getDetails(public_ip)
        pub_ip_info['Country']=details.country_name
        pub_ip_info['city']=details.city
        pub_ip_info['Location']=details.loc
        pub_ip_info['Organistion']=details.org
        podinfo['pub_ip_info']=pub_ip_info
    except Exception as e:
        podinfo['success']=False
        print(e)
        public_ip="not available"

    podinfo['public_ip']=public_ip


    #create final response with CORS headers
    response=jsonify(podinfo)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


if __name__ == "__main__":
    app.run("0.0.0.0",port=8080)