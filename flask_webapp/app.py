from flask import Flask,jsonify,make_response,request,render_template,redirect
import os
import requests
import json
app = Flask(__name__)


def get_podinfo():
    """Return a dictionary

    Will make a call to podinfo api server running in same pod, which returns information about current pod
    """
    try:
        resp=requests.get("http://localhost:8080/v1/get_podinfo")
        podinfo = resp.json()
    except Exception as e:
        print(e,flush=True)
        print("failed to get podinff use dumuuy",flush=True)
        podinfo={'success': True, 'annotations': {}, 'hostip': '', 'labels': {'cloud': "aws",'code': "eu-central-1"}, 'name': 'Something went wrong...', '': 'm01', 'os': '', 'podip': 'Try to refresh Page','public_ip':'123.2.2.2.','pub_ip_info': {'city': 'Zug', 'location': "-1.3,23.3"}}
    return podinfo


@app.route('/' ,methods=["GET"])
def landing():
    return redirect("/home", code=302)


@app.route('/multicloud' ,methods=["GET"])
def multicloud():
    
    #get information about pod in which this applications runs
    podinfo=get_podinfo()
    print(podinfo,flush=True)
    return render_template('multicloud.html',podinfo=podinfo)

@app.route('/machinelearning' ,methods=["GET"])
def machinelearning():

    #get information about pod in which this applications runs
    podinfo=get_podinfo()
    print(podinfo,flush=True)
    return render_template('mldemo.html',podinfo=podinfo)


@app.route('/home' ,methods=["GET"])
def home():

    #get information about pod in which this applications runs
    podinfo=get_podinfo()
    print(podinfo,flush=True)
    return render_template('home.html',podinfo=podinfo)

@app.route('/about' ,methods=["GET"])
def about():

    #get information about pod in which this applications runs
    podinfo=get_podinfo()
    print(podinfo,flush=True)

    return render_template('about.html',podinfo=podinfo)






if __name__ == "__main__":
    app.run("0.0.0.0",port=8088,debug=True)