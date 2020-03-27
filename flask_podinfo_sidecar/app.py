from flask import Flask,jsonify,make_response,request
import os
import requests
import ipinfo
import urllib

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
        print(e)
        public_ip="not available"

    podinfo['public_ip']=public_ip



    #get information about instance
    cloud,region=cloud_info()

    podinfo['labels']['cloud']=cloud
    podinfo['labels']['region']=region


    #create final response with CORS headers
    response=jsonify(podinfo)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response


def cloud_info():
    """Get information about instance"""
    on_ec2=is_ec2_instance()
    on_gcp=is_gcp_instance()
    on_azure=is_azure_instance()

    if on_ec2:
        region=get_aws_region()
        cloud="aws"

    elif on_gcp:
        region=get_gcp_region()
        cloud="gcp"
    elif on_azure:
        #to do implementation
        pass    
    else:
        cloud="private"
        region="unknown"


    return (cloud,region)
    


def get_aws_region():
    req=urllib.request.Request('http://169.254.169.254/latest/meta-data/hostname')
    result =urllib.request.urlopen(req)
    hostname = result.read().decode()
    region=hostname.split(".")[1]
    return region


def get_gcp_region():
    req=urllib.request.Request('http://169.254.169.254/computeMetadata/v1/instance/hostname',headers={"Metadata-Flavor": "Google"})
    result =urllib.request.urlopen(req)
    hostname = result.read().decode()
    region="-".join(hostname.split(".")[1].split("-")[:2])
    return region


def is_ec2_instance():
    """Check if an instance is running on AWS."""
    result = False
    meta = 'http://169.254.169.254/latest/meta-data/public-ipv4'
    try:
        result = urllib.request.urlopen(meta,timeout=2).status == 200
    except Exception:
        return result
    return result

def is_gcp_instance():
    """Check if an instance is running on GCP."""
    result = False
    req=urllib.request.Request('http://169.254.169.254/computeMetadata/v1/instance/hostname',headers={"Metadata-Flavor": "Google"})
    try:
        result = urllib.request.urlopen(req,timeout=2).status == 200
    except Exception:
        return result
    return result


#still need to implement
def is_azure_instance():
    """Check if an instance is running on AZURE."""
    result = False
    req=urllib.request.Request('http://169.254.169.254/metadata/instance?api-version=2017-04-02',headers={"Metadata": "true"})
    try:
        result = urllib.request.urlopen(req,timeout=2).status == 200
    except Exception:
        return result
    return result



if __name__ == "__main__":
    app.run("0.0.0.0",port=8080)