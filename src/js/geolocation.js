let userMarker = null;
let lastUserPosition = null;

// Функция для обновления текущего местоположения
function updateUserPosition({position, leafletMap}) {
    const {latitude, longitude} = position.coords;
    lastUserPosition = {latitude, longitude};

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
}

function addCenterIconHandler (leafletMap) {
    document.getElementById('center-icon').addEventListener('click', () => {
        if (lastUserPosition) {
            const {latitude, longitude} = lastUserPosition;

            leafletMap.setView([latitude, longitude], INIT_ZOOM);
        }
    });
}

function initGeolocation(leafletMap) {
    if ('geolocation' in navigator) {
        addCenterIconHandler(leafletMap);

        navigator.geolocation.watchPosition(
            (position) => {
                updateUserPosition({position, leafletMap})
            },
            (error) => {
                console.error('Ошибка получения местоположения:', error);
            },
            {enableHighAccuracy: true, maximumAge: 30000}
        );
    } else {
        console.error('Geolocation API не поддерживается в этом браузере.');
    }
}