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


const pixiesetLinks = document.querySelectorAll('.pixieset-link');
const modal = document.getElementById('pixiesetModal');
const modalOk = document.getElementById('modalOk');
const modalCancel = document.getElementById('modalCancel');
let pendingUrl = null;

pixiesetLinks.forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault();
        pendingUrl = link.href;
        modal.classList.add('active');
    });
});

modalOk.addEventListener('click', function(){
    modal.classList.remove('active');
    if(pendingUrl){
        window.open(pendingUrl, '_blank');
    }
});

modalCancel.addEventListener('click', function(){
    modal.classList.remove('active');
    pendingUrl = null;
});

modal.addEventListener('click', function(event){
    if(event.target === modal){
        modal.classList.remove('active');
        pendingUrl = null;
    }
});