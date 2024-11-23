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
    const features = getFeatures();

    if(SHOW_CAT_ROUTE){
        features.push(
            {
                "type": "Feature",
                "properties": {"name": "Путь Савы"},
                color: 'blue',
                "geometry": {
                    "type": "LineString",
                    "coordinates": swapCoordinates(CAT_ROUTE)
                }
            }
        )
    }

    if(STREETS_TO_MARK.length > 0){
        const streets = STREETS_TO_MARK.map((streetCoords) => {
            return {
                "type": "Feature",
                "properties": {"name": "Улица для обклейки"},
                color: 'blue',
                "geometry": {
                    "type": "LineString",
                    "coordinates": swapCoordinates(streetCoords)
                }
            }
        });

        features.push(...streets);
    }

    return {
        type: "FeatureCollection",
        features
    }
}


function initStreets(leafletMap) {
    const features = getFeatureCollection();

    L.geoJSON(features, {
        style: (feature) => {
            const {color} = feature;
            return {
                color: color ?? "red",
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