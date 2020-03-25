from app import app
import pytest

def test_assert():
    assert True

def test_home_page(client):
  response = client.get('/home')
  assert response.status_code == 200

def test_multicloud(client):
  response = client.get('/multicloud')
  assert response.status_code == 200

def test_about(client):
  response = client.get('/about')
  assert response.status_code == 200

def test_machinelearning(client):
  response = client.get('/machinelearning')
  assert response.status_code == 200
  
def test_home_redirect(client):
  response = client.get('/')
  assert response.status_code == 302



@pytest.fixture
def client():
  client = app.test_client()
  return client