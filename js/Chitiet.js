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
setInterval(function(){
    let lists = document.querySelectorAll('.list-item');
    document.querySelector('.lists').appendChild(lists[0]);
}, 2000)
document.getElementById('moveButton').addEventListener('click', function() {
    const box = document.getElementById('box');
    box.classList.toggle('move-down');
});