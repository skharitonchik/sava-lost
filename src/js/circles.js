function addCircleCheckbox({circle, name, leafletMap, index, radius}) {
    const controlContainer = document.getElementById('circle-controls');
    const label = document.createElement('label');
    const checkBoxId = `toggle-circle-${index}`;
    const isChecked = JSON.parse(localStorage.getItem(checkBoxId));

    label.innerHTML =
        `<input type="checkbox" id="${checkBoxId}" ${isChecked ? 'checked' : ''}>${name} (Радиус: ${radius} м)`;
    controlContainer.appendChild(label);

    if(isChecked){
        circle.addTo(leafletMap);
    } else {
        leafletMap.removeLayer(circle);
    }

    document.getElementById(`toggle-circle-${index}`).addEventListener('change', (e) => {
        if (e.target.checked) {
            circle.addTo(leafletMap);
            localStorage.setItem(checkBoxId, 'true');
        } else {
            leafletMap.removeLayer(circle);
            localStorage.setItem(checkBoxId, 'false');
        }
    });
}

function setupCirclesLayers(leafletMap) {
    let fillOpacity = 0;

    return CIRCLES.map(({center, name, radius, color, fillColor}, index) => {
        fillOpacity += index === 0 ? INIT_CIRCLE_OPACITY : CIRCLE_OPACITY_STEP;

        const circle = L.circle(center, {
            radius,
            color,
            fillColor,
            fillOpacity
        }).addTo(leafletMap);


        addCircleCheckbox({circle, name, leafletMap, index, radius});

        return circle;
    });
}

function initCircles(leafletMap) {
    const circleLayers = setupCirclesLayers(leafletMap);
}