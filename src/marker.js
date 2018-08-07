const mapboxgl = require("mapbox-gl");

const typeURLS = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
}
const width = '32px';
const height = '39px';

const markerMaker = (coordinates, type) => {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = width;
  markerDomEl.style.height = height;
  markerDomEl.style.backgroundImage = `url(${typeURLS[type]})`;
  return (new mapboxgl.Marker(markerDomEl)
    .setLngLat(coordinates));
}

export default markerMaker;
