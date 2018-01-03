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
      Authorization: "Bearer BQDJw5T6M2rX7mzIKTFUJQ-quwicttfQ8lddYPcdNtqTbsrDDB2cvSCiqvPd72hL9Ncg9EqJzVb-YDkR0ZaKqdg2bYJkweQXkKztYWxK80oBbQtRg9WGuX7lvZ7OdDK9ufcCe6ddjRU"
    }
  }).done(function(response) {

    var RandomNumber = Math.floor((Math.random() * 10) + 1);
    var playlistTitle = response.playlists.items[RandomNumber].name;
    console.log(response);
    console.log(response.playlists.items[RandomNumber].id);
    console.log(response.playlists.items[RandomNumber].name);

    document.getElementById("playlistName").innerHTML = 'You are now listening to: ' 
  + 
   ' ' + playlistTitle + '';
  })


});


//grab value of EN title 
// https://www.amcharts.com/kbase/?s=events&kbc=

