function initGeolocation(leafletMap) {
    // Определение текущего местоположения
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                // Добавляем маркер на текущее местоположение
                const userMarker = L.marker([latitude, longitude]).addTo(leafletMap);
                // userMarker.bindPopup('<b>Вы здесь!</b>').openPopup();

                // Перемещаем карту к текущему местоположению
                leafletMap.setView([latitude, longitude], 15);
            },
            (error) => {
                console.error('Ошибка получения местоположения:', error);
            }
        );
    } else {
        console.error('Geolocation API не поддерживается в этом браузере.');
    }
}