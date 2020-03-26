from app import app
import pytest
import json
import os

def test_assert():
    assert True

def test_home_page(client):
  response = client.get('/v1/get_podinfo')
  assert response.status_code == 200

def test_annotations(client):
  response = client.get('/v1/get_podinfo')
  data=response.get_json()
  assert not data['annotations']

def test_labels(client):
  response = client.get('/v1/get_podinfo')
  data=response.get_json()
  assert data['labels']['cloud']=="private" and data['labels']['region']=="unknown"

def test_os(client):
  response = client.get('/v1/get_podinfo')
  data=response.get_json()
  assert data['os']==os.name


def test_hostip(client):
  response = client.get('/v1/get_podinfo')
  data=response.get_json()
  assert data['hostip']=="not available"



def test_nodename(client):
  response = client.get('/v1/get_podinfo')
  data=response.get_json()
  assert data['nodename']=="not available"





@pytest.fixture
def client():
  client = app.test_client()
  return client