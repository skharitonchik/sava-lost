function addCircleCheckbox({circle, leafletMap, index, radius}) {
    const controlContainer = document.getElementById('circle-controls');
    const label = document.createElement('label');
    const checkBoxId = `toggle-circle-${index}`;
    const isChecked = JSON.parse(localStorage.getItem(checkBoxId));

    label.innerHTML =
        `<input type="checkbox" id="${checkBoxId}" ${isChecked ? 'checked' : ''}>(Радиус: ${radius} м)`;
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

    return CIRCLES.map(({radius, color, fillColor}, index) => {
        fillOpacity += index === 0 ? INIT_CIRCLE_OPACITY : CIRCLE_OPACITY_STEP;

        const circle = L.circle(CENTER_COORDS, {
            radius,
            color,
            fillColor,
            fillOpacity
        }).addTo(leafletMap);


        addCircleCheckbox({circle, leafletMap, index, radius});

        return circle;
    });
}

function setAllCircleCheckboxes(state) {
    // Получаем все чекбоксы внутри #circle-controls
    const checkboxes = document.querySelectorAll('#circle-controls input[type="checkbox"]');

    // Устанавливаем состояние для каждого чекбокса
    checkboxes.forEach((checkbox) => {
        checkbox.checked = state;
    });
}

function initCircles(leafletMap) {
    const circleLayers = setupCirclesLayers(leafletMap);

    document.getElementById('toggle-circle').addEventListener('change', (e) => {
        const show = e.target.checked;

        circleLayers.forEach((circle) => {
            if (show) {
                circle.addTo(leafletMap);
                setAllCircleCheckboxes(true);
            } else {
                leafletMap.removeLayer(circle);
                setAllCircleCheckboxes(false);
            }
        });

        // Синхронизируем индивидуальные чекбоксы
        circles.forEach((_, index) => {
            document.getElementById(`toggle-circle-${index}`).checked = show;
        });
    });
}