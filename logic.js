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

   $.ajax({
      url: "https://api.spotify.com/v1/browse/new-releases?country=" + event.mapObject.id,
      method: "GET", 
      headers: {
        Authorization: "Bearer BQCvUYCb07cCQ3802EWtIfntY5YXHXSfMpPOl7_VNo4R1tNbkkH-KlhVsHq63BTOTmPiQ-oNOTOeGnz7nsv8hFe2uLi1r01FVLvTYRSkwtRrfhnfo7frBCznPH3FYQKF_LuhnStUVQs"
      }
    }).done(function(response) {
      console.log(response)

    })

});

//grab value of EN title 
// https://www.amcharts.com/kbase/?s=events&kbc=

