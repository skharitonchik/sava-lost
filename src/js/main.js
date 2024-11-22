function init(){
    const leafletMap = L.map('map').setView(CENTER_COORDS, INIT_ZOOM);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletMap);

    initCircles(leafletMap);
    initPoints(leafletMap);
    initGeolocation(leafletMap);
}


init();