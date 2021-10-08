var map = new L.map('map')
    .setView([52.11313000414521, 6.245880005881190], 8);

L.tileLayer.provider('Stamen.Terrain').addTo(map);

// ------ gpx ------

const gpxs = [
    'assets/gpx/etappes/01_pieterburen_winsum.gpx',
    'assets/gpx/etappes/02_winsum_groningen_incl_omleiding.gpx',
    'assets/gpx/etappes/03_groningen_zuidlaren.gpx',
    'assets/gpx/etappes/04_zuidlaren_rolde.gpx',
    'assets/gpx/etappes/05_rolde_schoonloo.gpx',
    'assets/gpx/etappes/06_schoonloo_sleen.gpx',
    'assets/gpx/etappes/07_sleen_coevorden.gpx',
    'assets/gpx/etappes/08_coevorden_hardenberg.gpx',
    'assets/gpx/etappes/09_hardenberg_ommen.gpx',
    'assets/gpx/etappes/10_ommen_hellendoorn.gpx',
    'assets/gpx/etappes/11_hellendoorn_holten.gpx',
    'assets/gpx/etappes/12_holten_laren.gpx',
    'assets/gpx/etappes/13_laren_vorden.gpx',
    'assets/gpx/etappes/14_vorden_zelhem.gpx',
    'assets/gpx/etappes/15_zelhem_braamt.gpx',
    'assets/gpx/etappes/16_braamt_millingen.gpx',
    'assets/gpx/etappes/17_millingen_groesbeek.gpx',
    'assets/gpx/etappes/18_groesbeek_gennep.gpx',
    'assets/gpx/etappes/19_gennep_vierlingsbeek.gpx',
    'assets/gpx/etappes/20_vierlingsbeek_swolgen.gpx',
    'assets/gpx/etappes/21_swolgen_venlo.gpx',
    'assets/gpx/etappes/22_venlo_swalmen.gpx',
    'assets/gpx/etappes/23_swalmen_montfort.gpx',
    'assets/gpx/etappes/24_montfort_sittard.gpx',
    'assets/gpx/etappes/25_sittard_strabeek.gpx',
    'assets/gpx/etappes/26_strabeek_maastricht.gpx'
]

// gpxs.forEach(gpx => {
//     new L.GPX(gpx, {
//         async: true,
//         marker_options: {
//             startIconUrl: false,
//             endIconUrl: false,
//             shadowUrl: false
//         }
//     // }).on('loaded', function (e) {
//     //     map.fitBounds(e.target.getBounds());
//     }).addTo(map);
// });

new L.GPX('assets/gpx/pieterpad.gpx', {
    async: true,
    marker_options: {
        startIconUrl: false,
        endIconUrl: 'assets/imgs/icons8-signpost-48.png',
        wptIconUrls: {'': 'assets/imgs/icons8-signpost-48.png'},
        shadowUrl: false
    }
}).on('loaded', function (e) {
    console.log('loaded: ', e);
    map.fitBounds(e.target.getBounds());
}).addTo(map);

new L.GPX('assets/gpx/snurk.gpx', {
  async: true,
  marker_options: {
      startIconUrl: false,
      endIconUrl: false,
      wptIconUrls: {'': 'assets/imgs/icons8-sleeping-in-bed-48.png'},
      shadowUrl: false
  }
}).on('loaded', function (e) {
  console.log('loaded: ', e);
  map.fitBounds(e.target.getBounds());
}).addTo(map);



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

L.marker([53.393719, 6.359244], {icon: photoIcon})
    .addTo(map)
    .bindPopup("<img class=\"popup\" src=\"assets/imgs/IMG_1152.JPG\"/>");

L.marker([53.290192, 6.366372], {icon: photoIcon})
    .addTo(map)
    .bindPopup("<img class=\"popup\" src=\"assets/imgs/IMG_1145.JPG\"/>");

L.marker([53.398758, 6.454925], {icon: photoIcon})
    .addTo(map)
    .bindPopup("<img class=\"popup\" src=\"assets/imgs/IMG_1174.JPG\"/>");
