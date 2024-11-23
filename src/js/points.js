function initPoints(leafletMap) {
    const pointMarkers = points.map(({coords, description, iconColor, text}) => {
        // Создание кастомной иконки
        const customIcon = L.divIcon({
            className: "custom-icon",
            html: `<div 
                    style="
                        background-color: ${iconColor}; 
                        width: 20px; 
                        height: 20px; 
                        text-align: center;
                        margin-top: 5px;
                        border-radius: 50%;">
                        ${text ?? ''}
                    </div>`,
        });

        // Добавление точки на карту
        return L.marker(coords, {icon: customIcon})
            .addTo(leafletMap)
            .bindPopup(description); // Используется динамически созданный текст
    });

    document.getElementById('toggle-points').addEventListener('change', (e) => {
        const show = e.target.checked;
        pointMarkers.forEach((marker) => {
            if (show) {
                marker.addTo(leafletMap);
            } else {
                leafletMap.removeLayer(marker);
            }
        });
    });

}