const swapCoordinates = (coordinates) => coordinates.map(([lat, lng]) => [lng, lat]);


function getFeatures() {

    return STREETS.map((streetCoords) => {
        return {
            "type": "Feature",
            "properties": {"name": "Улица обклеена"},
            "geometry": {
                "type": "LineString",
                "coordinates": swapCoordinates(streetCoords)
            }
        }
    });
}

function getFeatureCollection() {
    return {
        "type": "FeatureCollection",
        "features": getFeatures()
    }
}


function initStreets(leafletMap) {
    const features = getFeatureCollection();

    L.geoJSON(features, {
        style: (feature) => {
            return {
                color: "red",
                weight: 6,
                opacity: 0.8
            };
        },
        onEachFeature: (feature, layer) => {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(`${feature.properties.name}`);
            }
        }
    }).addTo(leafletMap);

}