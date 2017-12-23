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
});

//grab value of EN title 
// https://www.amcharts.com/kbase/?s=events&kbc=