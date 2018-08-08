const mapboxgl = require("mapbox-gl");
import markerMaker from './marker';
// .addTo(map)

mapboxgl.accessToken = 'pk.eyJ1IjoibWJ1bmdlcm90aCIsImEiOiJjamtrNGNuOGcxODdzM2twazVxYWpuMTJvIn0.hplNHvbKIaqiWOUExHH7Pg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


markerMaker([15, -6], 'hotel').addTo(map);
markerMaker([23, -12], 'activity').addTo(map);
markerMaker([-10, 8], 'restaurant').addTo(map);
