const map = require("./map");
const location = require("./datacenter_location");
//test aws Frankfurt

test_aws_frankfurt = {
  title: "Frankfurt",
  latitude: 50.110924,
  longitude: 8.68212,
  region: "eu-central-1"
};
test_aws_frankfurt_podinfo = {
  success: true,
  annotations: {},
  hostip: "",
  labels: { cloud: "aws", region: "eu-central-1" },
  name: "Something went wrong...",
  nodename: "",
  os: "",
  podip: "Try to refresh Page",
  public_ip: "123.2.2.2.",
  pub_ip_info: { city: "Zug", location: "-1.3,23.3" }
};

test("aws frankfurt", () => {
  expect(map.get_location(test_aws_frankfurt_podinfo)).toStrictEqual(
    test_aws_frankfurt
  );
});

//test gcp Sao Paulo
test_gcp_sao = {
  title: "Sao Paulo",
  latitude: -23.533773,
  longitude: -46.62529,
  region: "southamerica-east1"
};
test_gcp_sao_podinfo = {
  success: true,
  annotations: {},
  hostip: "",
  labels: { cloud: "gcp", region: "southamerica-east1" },
  name: "",
  nodename: "",
  os: "",
  podip: "Try to refresh Page",
  public_ip: ""
};

test("gcp sao paulo", () => {
  expect(map.get_location(test_gcp_sao_podinfo)).toStrictEqual(test_gcp_sao);
});

//test no public cloud no public ip
test_nocloud_nopublicip = {
  title: "Unknown Location",
  latitude: 25,
  longitude: 0.1
};
test_nocloud_nopublicip_podinfo = {
  success: true,
  annotations: {},
  hostip: "",
  labels: { cloud: "vmware", region: "" },
  name: "Something went wrong...",
  nodename: "",
  os: "",
  podip: "Try to refresh Page",
  public_ip: "not available"
};

test("no public cloud no public i", () => {
  expect(map.get_location(test_nocloud_nopublicip_podinfo)).toStrictEqual(
    test_nocloud_nopublicip
  );
});

//test no public cloud public ip
test_nocloud_publicip = {
  title: "Zug",
  latitude: -1.3,
  longitude: 23.3
};
test_nocloud_publicip_podinfo = {
  success: true,
  annotations: {},
  hostip: "",
  labels: { cloud: "vmware", region: "" },
  name: "Something went wrong...",
  nodename: "",
  os: "",
  podip: "Try to refresh Page",
  public_ip: "123.2.2.2",
  pub_ip_info: { city: "Zug", location: "-1.3,23.3" }
};

test("no public cloud public ip", () => {
  expect(map.get_location(test_nocloud_publicip_podinfo)).toStrictEqual(
    test_nocloud_publicip
  );
});

test_gcp_singapore = {
  title: "Iowa",
  latitude: 41.619549,
  longitude: -93.598022,
  region: "us-central1"
};
test_gcp_singapore_podinfo = {
  annotations: {
    build: "best",
    builder: "tim",
    "kubernetes.io/config.seen": "2020-03-27T13:48:34.388645693Z",
    "kubernetes.io/config.source": "api",
    "kubernetes.io/limit-ranger":
      "LimitRanger plugin set: cpu request for container webapp; cpu request for container flask-podinfo-sidecar"
  },
  hostip: "10.128.0.5",
  labels: {
    app: "webapp",
    cloud: "gcp",
    "pod-template-hash": "c7895f7df",
    region: "us-central1"
  },
  name: "webapp-demo-c7895f7df-7v9bp",
  nodename: "gke-cluster-us-default-pool-46444157-cfj1",
  os: "posix",
  podip: "10.4.0.16",
  public_ip: "not available",
  success: true
};

test("gcp singapore ", () => {
  expect(map.get_location(test_gcp_singapore_podinfo)).toStrictEqual(
    test_gcp_singapore
  );
});
