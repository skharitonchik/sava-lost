function addToggleBtn(){
    // Логика сворачивания/разворачивания блока с чекбоксами
    const toggleButton = document.getElementById('toggle-controls');
    const controlsContainer = document.getElementById('controls');

    toggleButton.addEventListener('click', () => {
        const isHidden = controlsContainer.classList.toggle('hidden');
        toggleButton.textContent = isHidden ? 'Развернуть' : 'Свернуть';
    });
}

function init(){
    const leafletMap = L.map('map').setView(CENTER_COORDS, INIT_ZOOM);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletMap);

    initCircles(leafletMap);
    initPoints(leafletMap);
    initGeolocation(leafletMap);
    initStreets(leafletMap);

    addToggleBtn();
}


init();