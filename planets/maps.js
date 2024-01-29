// https://www.openplanetary.org/opm/basemaps

// Same but for moon map
let moonMap = L.map('moon-map')
moonMap.setView([0, 0], 3)

var baselayer = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png')
    .addTo(moonMap)
    .setZIndex(0);
