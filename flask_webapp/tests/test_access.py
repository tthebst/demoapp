from app import app
import pytest

def test_assert():
    assert True

def test_home_page(client):
  response = client.get('/home')
  assert response.status_code == 200

@pytest.fixture
def client():
  client = app.test_client()
  return client