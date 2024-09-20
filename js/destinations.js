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
 
// ----------------------------------------------

imgCard = document.querySelectorAll(".img-card");

imgCard.forEach(element => {

    element.addEventListener("click", function (e) {

        //remove active class
        imgCard.forEach(el => {
            el.classList.remove("active");
        });

        element.classList.add("active");
    })
});



