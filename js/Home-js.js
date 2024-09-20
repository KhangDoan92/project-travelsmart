// Datetimepicker 
flatpickr("#myID", {
    minDate: "today"
});

// toggle Change Language
let A = document.querySelector(".change-language");
let B = document.querySelector(".changeSub");
A.addEventListener("click", () =>{
    B.classList.toggle("change-language-active");
});

// toggle Change menu right
let iconMenuMobile = document.querySelector(".icon-menu-mobile");
let menuMobile = document.querySelector(".toolbar-header");
let closeMenu = document.querySelector(".close-toolbar-mobile");
console.log(closeMenu);
iconMenuMobile.addEventListener("click", () =>{
    menuMobile.classList.toggle("change-menu-mobile");
});
closeMenu.addEventListener("click", () =>{
    menuMobile.classList.toggle("change-menu-mobile");
});

// Product list

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.list-item');
    document.querySelector('.lists').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.list-item');
    document.querySelector('.lists').prepend(lists[lists.length - 1]);
}
setInterval(function(){
    let lists = document.querySelectorAll('.list-item');
    document.querySelector('.lists').appendChild(lists[0]);
}, 2500)

// --------recomment
document.getElementById('next-recomment').onclick = function(){
    let lists = document.querySelectorAll('.list-item-recomment');
    document.querySelector('.lists-recomment').appendChild(lists[0]);
}
document.getElementById('prev-recomment').onclick = function(){
    let lists = document.querySelectorAll('.list-item-recomment');
    document.querySelector('.lists-recomment').prepend(lists[lists.length - 1]);
}
setInterval(function(){
    let lists = document.querySelectorAll('.list-item-recomment');
    document.querySelector('.lists-recomment').appendChild(lists[0]);
}, 2500)
//  Gallery
$(document).ready(function(){
    let $galleryContainer = $('.wrapper-gallery .gallery').isotope({
        itemSelector: '.wrapper-gallery .item',
          layoutMode: 'fitRows'
    })
    $('.wrapper-gallery .button-group .button').on('click', function(){
        $('.wrapper-gallery .button-group .button').removeClass('active');
        $(this).addClass('active');
        var value = $(this).attr('data-filter');
        $galleryContainer.isotope({
            filter: value
        })  
    })
})