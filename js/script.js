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



