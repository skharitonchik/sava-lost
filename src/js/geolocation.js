// Функция для обновления текущего местоположения
function updateUserPosition({position, leafletMap, userMarker}) {
    const {latitude, longitude} = position.coords;

    // Если маркер уже существует, обновляем его координаты
    if (userMarker) {
        userMarker.setLatLng([latitude, longitude]);
    } else {
        // Создаем маркер для текущего местоположения
        userMarker = L.marker([latitude, longitude], {
            icon: L.divIcon({
                className: 'user-marker',
                html: `<div style="
                    width: 20px; 
                    height: 20px; 
                    background-color: blue; 
                    border-radius: 50%; 
                    border: 2px solid white;">
                </div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10],
            }),
        }).addTo(leafletMap);
    }

    // Центрируем карту на новом положении
    leafletMap.setView([latitude, longitude], INIT_ZOOM);
}


function initGeolocation(leafletMap) {
    let userMarker; // Глобальная переменная для маркера местоположения

// Запускаем отслеживание местоположения
    if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(
            (position) => {
                updateUserPosition({position, leafletMap, userMarker})
            },
            (error) => {
                console.error('Ошибка получения местоположения:', error);
            },
            {enableHighAccuracy: true, maximumAge: 20000}
        );
    } else {
        console.error('Geolocation API не поддерживается в этом браузере.');
    }

}