const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('active');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(function(button){
    button.addEventListener('click', function(){

        // Actieve knop wisselen
        filterButtons.forEach(function(btn){
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const selectedFilter = button.getAttribute('data-filter');

        // Foto's tonen/verbergen op basis van categorie
        galleryItems.forEach(function(item){
            const itemCategory = item.getAttribute('data-category');

            if(selectedFilter === 'all' || selectedFilter === itemCategory){
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

    });
});