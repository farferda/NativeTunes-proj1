var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",
  "theme": "light",
  "projection": "miller",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#f1fbff"
  },
  "smallMap": {},
  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );


map.addListener("clickMapObject", function(event) {
  console.log(event);
  console.log(event.mapObject.id);
  console.log(event.mapObject.title)
  document.getElementById("info").innerHTML = 'You Selected: ' 
  + 
  // event.mapObject.id + 
   ' ' + event.mapObject.title + '';

   // $.ajax({
   //    url: "https://api.spotify.com/v1/browse/new-releases?country=" + event.mapObject.id,
   //    method: "GET", 
   //    headers: {
   //      Authorization: "Bearer BQBCm_NfL6Xbmnmu7MX73ctEbsJ41uIWdAHWFR9UYIO3Smz1HJsAtubAgcrfWe9VuE2KfHSr3FrcSoeUz1T2msachaTQHRq8mJK72ggevQYFebJwygsfvg-nyMVzcr8JbsCSNax2qhw"
   //    }
   //  }).done(function(response) {
   //    console.log(response.albums.items)

   //  })


$.ajax({
    url: "https://api.spotify.com/v1/browse/categories/party/playlists?country=" + event.mapObject.id,
    method: "GET",
    headers: {
      Authorization: "Bearer BQAuw1rJkS3d3dTTRylnj17vRvnMqpBxv7RjTSWyrfXTQc-CSeVxmTBWh2KEd4RnZIYIctovUBmWF-NV-elmaKsNb6BZdpEubreyviC8CGANQLMRJ8sZLoVcamIAB7dgrEJGGysDHio"
    }
  }).done(function(response) {
    console.log(response),
    console.log(response.playlists.items[Math.floor((Math.random() * 10) + 1)].id)
    document.getElementById("randomID").innerHTML
  })


});


//grab value of EN title 
// https://www.amcharts.com/kbase/?s=events&kbc=

