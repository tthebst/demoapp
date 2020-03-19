from flask import Flask,jsonify
import os
app = Flask(__name__)

@app.route('/v1/get_podinfo')
def get_podinfo():
    podinfo={}
    try:
        podinfo['os']=os.name
    except:
        podinfo['os']=""

    #read in environment information
    podinfo['hostip']=os.getenv("HOSTIP","")
    podinfo['podip']=os.getenv("PODIP","")
    podinfo['nodename']=os.getenv("NODENAME","")

    #read in labels
    try:
        with open("/etc/podinfo/labels","r") as f:
            labels={}
            for line in f:
                labels[str(line).split("=")[0]]=str(line).split("=")[1]
        podinfo["labels"]=labels
    except FileNotFoundError as fn:
        print(fn)

    try:
        #read in annotations
        with open("/etc/podinfo/annotations","r") as f:
            annotations={}
            for line in f:
                annotations[str(line).split("=")[0]]=str(line).split("=")[1]
        podinfo["annotations"]=annotations
    except FileNotFoundError as fn:
        print(fn)

    try:
        #read in name
        with open("/etc/podinfo/name","r") as f:
            name=f.readline()
        podinfo["name"]=name
    except FileNotFoundError as fn:
        print(fn)


    print(podinfo)
    return jsonify(podinfo)


if __name__ == "__main__":
    app.run("0.0.0.0",port=8080)