provider "google-ch" {
  credentials = file("terraform-test-key.json")
  project     = "terraform-test-270912"
  region      = "europe-west6"
}
provider "google-us" {
  credentials = file("terraform-test-key.json")
  project     = "terraform-test-270912"
  region      = "us-central1"
}



//custer USA
resource "google_container_cluster" "cluster-us" {
  name     = "my-gke-cluster-us"
  location = "us-central1"

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  master_auth {
    username = ""
    password = ""

    client_certificate_config {
      issue_client_certificate = false
    }
  }
}

resource "google_container_node_pool" "us-nodes" {
  name       = "my-node-pool-us"
  location   = "us-central1"
  cluster    = google_container_cluster.primary.name
  node_count = 1
  node_config {
    preemptible  = true
    machine_type = "n1-standard-1"

    metadata = {
      disable-legacy-endpoints = "true"
    }
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}


//custer USA
resource "google_container_cluster" "cluster-zh" {
  name     = "my-gke-cluster-zh"
  location = "europe-west6"

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  master_auth {
    username = ""
    password = ""

    client_certificate_config {
      issue_client_certificate = false
    }
  }
}

resource "google_container_node_pool" "zh-nodes" {
  name       = "my-node-pool-zh"
  location   = "europe-west6"
  cluster    = google_container_cluster.cluster-zh.name
  node_count = 1
  node_config {
    preemptible  = true
    machine_type = "n1-standard-1"

    metadata = {
      disable-legacy-endpoints = "true"
    }
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}