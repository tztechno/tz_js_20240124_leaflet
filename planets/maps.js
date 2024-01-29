// https://www.openplanetary.org/opm/basemaps
// Same but for moon map

let moonMap = L.map('moon-map')
moonMap.setView([13.3160, 25.2510], 6)

var baselayer = new L.tileLayer('https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-moon-basemap-v0-1/all/{z}/{x}/{y}.png')
    .addTo(moonMap)
    .setZIndex(0);

/////////////////////////////////////////

var marker = L.marker([13.3160, 25.2510]).addTo(moonMap); // マーカーの座標を設定
marker.bindPopup("SLIM\nLAT:13.3160,LNG:25.2510").openPopup(); // マーカーにポップアップを追加
