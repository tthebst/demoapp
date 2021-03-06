import sys
import json
from flask import Flask, render_template, redirect
import requests
import os
import pyformance
from concurrent.futures import ThreadPoolExecutor

app = Flask(__name__)


def get_podinfo():
    """Return a dictionary

    Will make a call to podinfo api server running in same pod, which returns information about current pod
    """
    try:
        resp = requests.get("http://localhost:8080/v1/get_podinfo")
        podinfo = resp.json()

    except requests.exceptions.ConnectionError as conerr:
        print("Connection Error: {0}".format(conerr), flush=True)
        podinfo = {'success': False, 'annotations': {}, 'hostip': '', 'labels': {'cloud': "aws", 'code': "eu-central-1"}, 'name': 'Something went wrong...',
                   '': 'm01', 'os': '', 'podip': 'Try to refresh Page', 'public_ip': '123.2.2.2.', 'pub_ip_info': {'city': 'Zug', 'location': "-1.3,23.3"}}
    except json.decoder.JSONDecodeError as err:
        print("JSON Decode error: {0}".format(err), flush=True)
        podinfo = {'success': False, 'annotations': {}, 'hostip': '', 'labels': {'cloud': "aws", 'code': "eu-central-1"}, 'name': 'Something went wrong...',
                   '': 'm01', 'os': '', 'podip': 'Try to refresh Page', 'public_ip': '123.2.2.2.', 'pub_ip_info': {'city': 'Zug', 'location': "-1.3,23.3"}}
    except:
        print("Unexpected error:", sys.exc_info()[0])
        raise

    return podinfo


@app.route('/', methods=["GET"])
def landing():
    """Landing page of webapp
        redirects to /home
    """

    return redirect("/home", code=302)


@app.route('/multicloud', methods=["GET"])
def multicloud():
    """
    Multicloud demo of webapp
    """

    # get information about pod in which this applications runs
    podinfo = get_podinfo()
    print(podinfo, flush=True)
    return render_template('multicloud.html', podinfo=podinfo)


@app.route('/machinelearning', methods=["GET"])
def machinelearning():
    """
    Machine Learning demo of webapp
    """

    # get information about pod in which this applications runs
    podinfo = get_podinfo()
    print(podinfo, flush=True)
    return render_template('mldemo.html', podinfo=podinfo)


@app.route('/home', methods=["GET"])
def home():
    """
    Landing Page of webapp
    """

    # get information about pod in which this applications runs
    podinfo = get_podinfo()
    print(podinfo, flush=True)
    return render_template('home.html', podinfo=podinfo)


@app.route('/about', methods=["GET"])
def about():
    """
    Information page of webpage
    """

    # get information about pod in which this applications runs
    podinfo = get_podinfo()
    print(podinfo, flush=True)

    return render_template('about.html', podinfo=podinfo)


if __name__ == "__main__":
    app.run("0.0.0.0", port=8088)
