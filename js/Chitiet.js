$(document).ready(function() {
    function checkVisibility() {
        $('.item').each(function() {
            var itemBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (itemBottom < windowBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility(); 
});
$(document).ready(function() {
    function checkVisibility() {
        $('.item1').each(function() {
            var itemBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (itemBottom < windowBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();
});
$(document).ready(function() {
    function checkVisibility() {
        $('.item2').each(function() {
            var itemBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (itemBottom < windowBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();
});
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.list-item');
    document.querySelector('.lists').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.list-item');
    document.querySelector('.lists').prepend(lists[lists.length - 1]);
}
// setInterval(function(){
//     let lists = document.querySelectorAll('.list-item');
//     document.querySelector('.lists').appendChild(lists[0]);
// }, 2000)
// document.getElementById('moveButton').addEventListener('click', function() {
//     const box = document.getElementById('box');
//     box.classList.toggle('move-down');
// });
// toggle Change Language
let A = document.querySelector(".change-language");
let B = document.querySelector(".changeSub");
A.addEventListener("click", () =>{
    B.classList.toggle("change-language-active");
});
// language
document.querySelector('.select-selected').addEventListener('click', function() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('select-hide');
});

document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', function() {
        let selected = this.parentNode.previousElementSibling;
        selected.innerHTML = this.innerHTML + '<span class="caret">▼</span>';
        selected.classList.remove('active');
        this.parentNode.classList.add('select-hide');
    });
});
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