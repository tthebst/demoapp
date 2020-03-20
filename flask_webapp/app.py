from flask import Flask,jsonify,make_response,request,render_template
import os
import requests
import json
app = Flask(__name__)






@app.route('/home' ,methods=["GET"])
def home():

    try:
        resp=requests.get("http://localhost:8080/v1/get_podinfo")
        podinfo = resp.json()
    except Exception as e:
        print(e,flush=True)
        print("failed to get podinff use dumuuy",flush=True)
        podinfo={'annotations': {}, 'hostip': '', 'labels': {}, 'name': 'Something went wrong...', '': 'm01', 'os': '', 'podip': 'Try to refresh Page','public_ip':''}
    
    print(podinfo,flush=True)


    return render_template('home.html',podinfo=podinfo)


if __name__ == "__main__":
    app.run("0.0.0.0",port=8088,debug=True)