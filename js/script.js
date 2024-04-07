window.addEventListener("DOMContentLoaded", function() {

    // search

    document.querySelector('#search-btn').addEventListener('click', function () {
      document.querySelector('#search-open').classList.toggle('search-active');
      document.querySelector('#search-btn').classList.toggle('search-active')
    });

    document.querySelector('#search-close').addEventListener('click', function () {
      document.querySelector('#search-open').classList.toggle('search-active');
      document.querySelector('#search-btn').classList.toggle('search-active')
    });
});

let center = [55.75846806898367,37.60108849999989];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  })

  let placemark = new ymaps.Placemark (center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/marker-icon.svg',
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -20]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}



ymaps.ready(init);


