var current = document.querySelector('#current');
var images = document.querySelectorAll('.gallery-images img');
var opacity = 0.4;

images.forEach(function(img){
    img.addEventListener('click', function(e){
        images.forEach(function(img){
            img.style.opacity = 1;
        })
        current.src = e.target.src;
        e.target.style.opacity = opacity;
    })
});