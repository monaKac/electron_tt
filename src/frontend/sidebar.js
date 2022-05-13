
console.log("sidebar.js");
const MENUE = document.querySelector('.menu');
const OPEN_MENUE = document.getElementById('open_menu');
const TEST = document.getElementById('test');

function open_menu() {
  MENUE.classList.toggle('menu--open');
}

OPEN_MENUE.addEventListener('click', open_menu);


const NAV_PAGE_TRACKING = document.getElementById('navPageTracking');
const NAV_PAGE_STATISTICS = document.getElementById('navPageStatistics');
const NAV_PAGE_HISTORY = document.getElementById('navPageHistory');
const NAV_PAGE_SETTINGS = document.getElementById('navPageSettings');


function loadPage(evt) {
  console.log("change Contenten: " + evt.currentTarget.sPath);
  //app.window.navigation.loadPage(evt.currentTarget.sPath)
  const MAIN_CONTENT_CONTAINER = document.getElementById('mainContentContainer');
  MAIN_CONTENT_CONTAINER.innerHTML = '<iframe src="' + evt.currentTarget.sPath + '" frameBorder="0">';
}

NAV_PAGE_TRACKING.addEventListener('click', loadPage);
NAV_PAGE_TRACKING.sPath = 'pages/timetracking.html';
NAV_PAGE_STATISTICS.addEventListener('click', loadPage);
NAV_PAGE_STATISTICS.sPath = 'pages/statistics.html';
NAV_PAGE_HISTORY.addEventListener('click', loadPage);
NAV_PAGE_HISTORY.sPath = 'pages/history.html';
NAV_PAGE_SETTINGS.addEventListener('click', loadPage);
NAV_PAGE_SETTINGS.sPath = 'pages/settings.html';






