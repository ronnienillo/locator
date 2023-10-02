
document.addEventListener("DOMContentLoaded", function() {
    const btnFilter = document.querySelector('.js--btn-filter');
    const btnCloseFilter = document.querySelector('.js--btn-close-filter');
    const filters = document.querySelector('.js--filters');
    const mobileMapToggle = document.querySelector('.js--mobile-map-toggle');
    const mobileListToggle = document.querySelector('.js--mobile-list-toggle')
    const mobileMap = document.querySelector('.js--mobile-map');

    btnFilter.addEventListener('click', function(){
        filters.classList.toggle('show');
    });

    btnCloseFilter.addEventListener('click', function(){
        filters.classList.remove('show');
    });

    mobileMapToggle.addEventListener('click', function(){
        mobileMap.classList.add('show');
    })

    mobileListToggle.addEventListener('click', function(){
        mobileMap.classList.remove('show');
    })

});