var map = new L.map('map', {
  maxZoom: 13
}).setView([52.11313000414521, 6.245880005881190], 8);

// ------ tiles ------
var Stadia_StamenTerrain = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
});

Stadia_StamenTerrain.addTo(map);

// ------ gpx ------
const gpxs = [
    'assets/gpx/track/01_pieterburen_groningen.gpx',
    'assets/gpx/track/02_groningen_zeegse.gpx',
    'assets/gpx/track/03_zeegse_rolde.gpx'
]

new L.GPX('assets/gpx/pieterpad.gpx', {
    async: true,
    marker_options: {
        startIconUrl: false,
        endIconUrl: false,
        shadowUrl: false
    },
    polyline_options: {
      color: 'blue',
      opacity: 0.75,
      weight: 3,
      lineCap: 'round'
    }
}).on('loaded', function (e) {
    console.log('loaded: ', e);
    map.fitBounds(e.target.getBounds());
}).addTo(map);

gpxs.forEach((gpx, i) => {
  var color = i % 2 === 0 ? 'red':'orange';

  new L.GPX(gpx, {
    async: true,
    marker_options: {
      startIconUrl: false,
      endIconUrl: false,
      shadowUrl: false,
    },
    polyline_options: {
      color: color,
      opacity: 1,
      weight: 2,
      lineCap: 'round',
      dashArray: '5,5'
    }
  }).addTo(map);
});

// ----- IMGs -----
var photoIcon = L.icon({
  iconUrl: 'assets/imgs/icons8-camera-48.png',
  shadowUrl: false,

  iconSize:     [16, 16], // size of the icon
  shadowSize:   [0, 0], // size of the shadow
  iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0],  // the same for the shadow
  popupAnchor:  [0, -4] // point from which the popup should open relative to the iconAnchor
});

var markers = L.markerClusterGroup({
  maxClusterRadius: 40,
});

photos.forEach(photo  => {
  markers.addLayer(L.marker([photo.GPSLatitude, photo.GPSLongitude], {icon: photoIcon})
  .bindPopup(`<img class=\"popup\" src="./assets/imgs/photos/${photo.SourceFile}" />`));
});

document.querySelector('.leaflet-popup-pane').addEventListener(
  'load', (event) => {
    var popup = map._popup;
    // handmatig updaten van de updated flag is nodig om een oneindige loop te voorkomen. 
    // zie https://stackoverflow.com/questions/51732698/leaflet-popup-update-resizing-solution-recreating-a-popup-everytime-unable
    if (event.target.tagName === 'IMG' && popup && !popup._updated) {
      popup._updated = true; 
      popup.update();
    }
  }, true
);

map.addLayer(markers);
