const swapCoordinates = (coordinates) => coordinates.map(([lat, lng]) => [lng, lat]);

function getFeature({name, streetCoords, color}) {
    return {
        type: "Feature",
        properties: {name},
        color: color ?? COLOR_FOR_MARKED_STREETS,
        geometry: {
            type: "LineString",
            coordinates: swapCoordinates(streetCoords)
        }
    }
}

function getFeatures() {
    return STREETS.map((streetCoords) => getFeature({
            name: "Улица обклеена",
            streetCoords,
        })
    );
}

function getFeatureCollection() {
    const features = getFeatures();

    if (SHOW_CAT_ROUTE) {
        features.push(getFeature({name: "Путь Савы", color: COLOR_FOR_CAT_ROUTE, streetCoords: CAT_ROUTE}))
    }

    if (STREETS_TO_MARK.length > 0) {
        const streets = STREETS_TO_MARK.map((streetCoords) =>
            getFeature({name: "Улица для обклейки", streetCoords, color: COLOR_FOR_NON_MARKED_STREETS})
        )

        features.push(...streets);
    }

    if (STREETS_TO_CHECK.length > 0) {
        const streets = STREETS_TO_CHECK.map((streetCoords) => getFeature({
                name: "Улица для проверки",
                streetCoords,
                color: COLOR_FOR_STREETS_TO_CHECK
            })
        );

        features.push(...streets);
    }

    return {
        type: "FeatureCollection",
        features
    }
}

// Функция для управления видимостью улиц
function toggleStreets(checkbox, leafletMap, streetLayer) {
    if (checkbox.checked) {
        // Добавляем слой обратно на карту
        streetLayer.addTo(leafletMap);
        localStorage.setItem('toggle-streets', 'true')
    } else {
        // Удаляем слой с карты
        leafletMap.removeLayer(streetLayer);
        localStorage.setItem('toggle-streets', 'false');
    }
}

function initStreets(leafletMap) {
    const features = getFeatureCollection();
    const isChecked = JSON.parse(localStorage.getItem('toggle-streets'));
    const streetCheckbox = document.getElementById('toggle-streets');
    const streetLayer = L.geoJSON(features, {
        style: (feature) => {
            const {color} = feature;

            return {
                color,
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

    if (isChecked) {
        streetLayer.addTo(leafletMap);
        streetCheckbox.checked = true;
    } else {
        leafletMap.removeLayer(streetLayer);
        streetCheckbox.checked = false;
    }

    streetCheckbox.addEventListener('change', (event) => {
        toggleStreets(event.target, leafletMap, streetLayer);
    });
}