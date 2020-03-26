am4core.ready(function() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  /**
   * Define SVG path for target icon
   */
  var targetSVG =
    "M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z";

  // Create map instance
  var chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Exclude Antartica
  polygonSeries.exclude = ["AQ"];

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.strokeOpacity = 0.5;
  polygonTemplate.nonScalingStroke = true;

  // create capital markers
  var imageSeries = chart.series.push(new am4maps.MapImageSeries());

  //access podinfo

  // create template to display depending on cloud and location
  // error sign if podinfo requests failed
  var imageSeriesTemplate = imageSeries.mapImages.template;
  var marker = imageSeriesTemplate.createChild(am4core.Image);
  marker.width = 55;
  marker.height = 55;
  marker.nonScaling = true;
  marker.tooltipText = "{title}";
  marker.horizontalCenter = "middle";
  marker.verticalCenter = "middle";
  console.log(podinfo);
  if (podinfo["success"] == true) {
    console.log(podinfo["labels"]);
    if (podinfo["labels"]["cloud"] == "gcp") {
      marker.href = "static/images/gcp.svg";
    } else if (podinfo["labels"]["cloud"] == "aws") {
      marker.href = "static/images/aws.svg";
    } else if (podinfo["labels"]["cloud"] == "azure") {
      marker.href = "static/images/azure.svg";
    } else {
      marker.href = "static/images/cloud.svg";
    }
  } else {
    marker.href = "static/images/error.svg";
    marker.width = 90;
    marker.height = 90;
  }

  // define template

  // what about scale...

  // set propertyfields
  imageSeriesTemplate.propertyFields.latitude = "latitude";
  imageSeriesTemplate.propertyFields.longitude = "longitude";
  imageSeriesTemplate.horizontalCenter = "middle";
  imageSeriesTemplate.verticalCenter = "middle";
  imageSeriesTemplate.align = "center";
  imageSeriesTemplate.valign = "middle";
  imageSeriesTemplate.width = 8;
  imageSeriesTemplate.height = 8;
  imageSeriesTemplate.nonScaling = true;
  imageSeriesTemplate.tooltipText = "{title}";
  imageSeriesTemplate.fill = am4core.color("#000");
  imageSeriesTemplate.background.fillOpacity = 0;
  imageSeriesTemplate.background.fill = am4core.color("#ffffff");
  imageSeriesTemplate.setStateOnChildren = true;
  imageSeriesTemplate.states.create("hover");

  //logic to add location of origin of request depends on label provided by podinfo api
  // the identification is based on the code of the region provided by the cloud providers

  loc = get_location(podinfo);
  console.log(loc);
  imageSeries.data = [loc];

  console.log(imageSeries.data);
}); // end am4core.ready()

function get_location(podinfo) {
  if (podinfo["success"] == true) {
    if (podinfo["labels"]["cloud"] == "gcp") {
      for (const loc of gcp_loc) {
        if (loc["title"] == podinfo["labels"]["code"]) {
          console.log(loc);
          return loc;
        }
      }
    } else if (podinfo["labels"]["cloud"] == "aws") {
      for (const loc of aws_loc) {
        if (loc["title"] == podinfo["labels"]["code"]) {
          console.log(loc);
          return loc;
        }
      }
    } else if (podinfo["labels"]["cloud"] == "azure") {
      for (const loc of azure_loc) {
        if (loc["title"] == podinfo["labels"]["code"]) {
          console.log(loc);
          return loc;
        }
      }
    } else {
      if (podinfo["public_ip"] == "not available") {
        loc = {
          title: "Unknown Location",
          latitude: 25,
          longitude: 0.1
        };
        return loc;
      } else {
        loc = {
          title: podinfo["pub_ip_info"]["city"],
          latitude: parseFloat(
            podinfo["pub_ip_info"]["location"].split(",")[0]
          ),
          longitude: parseFloat(
            podinfo["pub_ip_info"]["location"].split(",")[1]
          )
        };
        return loc;
      }
    }
  } else {
    loc = {
      title: "Unknown Location",
      latitude: 25,
      longitude: 0.1
    };
    return loc;
  }
}
