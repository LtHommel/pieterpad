var mymap = new L.map('mymap')
    .setView([52.849686, 6.348279], 9);

L.tileLayer.provider('Stamen.Terrain').addTo(mymap);

// ------ gpx ------

var gpx = 'assets/gpx/01_pieterburen_winsum.gpx' // URL to your GPX file or the GPX itself
new L.GPX(gpx, {
  async: true,
  marker_options: {
    startIconUrl: 'assets/imgs/pin-icon-start.png',
    endIconUrl:   'assets/imgs/pin-icon-end.png',
    shadowUrl:    'assets/imgs/pin-shadow.png'}
}).on('loaded', function(e) {
  mymap.fitBounds(e.target.getBounds());
}).addTo(mymap);


// ----- IMGs -----

L.marker([53.393719, 6.359244])
    .addTo(mymap)
    .bindPopup("<img class=\"popup\" src=\"assets/imgs/IMG_1152.JPG\"/>");

L.marker([53.290192, 6.366372])
    .addTo(mymap)
    .bindPopup("<img class=\"popup\" src=\"assets/imgs/IMG_1145.JPG\"/>");

L.marker([53.398758, 6.454925])
    .addTo(mymap)
    .bindPopup("<img class=\"popup\" src=\"assets/imgs/IMG_1174.JPG\"/>");


// ------ dev -------

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);