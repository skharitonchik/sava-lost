function addMenuIcon() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('open');
        menu.classList.toggle('open');
    });
}

function addSettingsIcon() {
    const settingsMenuIcon = document.getElementById('settings-menu-icon');
    const settingsMenu = document.getElementById('settings-menu');

    settingsMenuIcon.addEventListener('click', () => {
        settingsMenu.classList.toggle('open');
        settingsMenuIcon.classList.toggle('open');
    });
}

function outerAreaClicks() {
    const mainMenu = document.getElementById('menu');
    const mainMenuIcon = document.getElementById('menu-icon');

    const settingsMenu = document.getElementById('settings-menu');
    const settingsMenuIcon = document.getElementById('settings-menu-icon');

    document.addEventListener('click', (event) => {
        if (!mainMenu.contains(event.target) && !mainMenuIcon.contains(event.target)) {
            mainMenu.classList.remove('open');
            mainMenuIcon.classList.remove('open');
        }

        if (!settingsMenu.contains(event.target) && !settingsMenuIcon.contains(event.target)) {
            settingsMenu.classList.remove('open');
            settingsMenuIcon.classList.remove('open');
        }
    });
}

function initMenuHandler() {
    const menuItems = document.querySelectorAll('.menu-item');
    const pages = document.querySelectorAll('.page');

    const mainMenu = document.getElementById('menu');
    const mainMenuIcon = document.getElementById('menu-icon');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(menu => menu.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            const pageName = item.getAttribute('data-page');
            document.getElementById(`page-${pageName}`).classList.add('active');
            item.classList.add('active');

            mainMenu.classList.remove('open');
            mainMenuIcon.classList.remove('open');
        });
    });
}

function setuperWithErrorHandler(setupFn, errorName) {
    try {
        setupFn();
    } catch (e) {
        console.info(`%c  SERGEY e ${errorName}`, 'background: #222; color: #bada55', e);
    }
}

function galleryHandler() {
    // Получаем элементы
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close-button');

    // Добавляем обработчик клика на каждую картинку
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            fullscreenImage.src = item.src; // Устанавливаем src выбранного изображения
            fullscreen.classList.add('active'); // Показываем fullscreen
        });
    });

    // Закрытие fullscreen по клику на кнопку
    closeButton.addEventListener('click', () => {
        fullscreen.classList.remove('active'); // Убираем fullscreen
    });

    // Закрытие fullscreen по клику вне изображения
    fullscreen.addEventListener('click', (event) => {
        if (event.target === fullscreen) {
            fullscreen.classList.remove('active');
        }
    });
}


function init() {
    const leafletMap = L.map('map').setView(CENTER_COORDS, INIT_ZOOM);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletMap);

    setuperWithErrorHandler(() => initCircles(leafletMap), 'CIRCLES');
    setuperWithErrorHandler(() => initPoints(leafletMap), 'POINTS');
    setuperWithErrorHandler(() => initGeolocation(leafletMap), 'GEO');
    setuperWithErrorHandler(() => initStreets(leafletMap), 'STREETS');
    setuperWithErrorHandler(addMenuIcon, 'MENU ICON');
    setuperWithErrorHandler(addSettingsIcon, 'SETTINGS');
    setuperWithErrorHandler(galleryHandler, 'GALLERY');

    document.addEventListener('DOMContentLoaded', () => {
        setuperWithErrorHandler(initMenuHandler, 'MENU');
        setuperWithErrorHandler(outerAreaClicks, 'AREA CLICKS');
    });
}


init();