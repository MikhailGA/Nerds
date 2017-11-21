var slides = document.querySelectorAll(".slider-abilities .slide");
var slide_selector = document.querySelectorAll("[name=slide-selector]");
var model_content = document.querySelector(".modal-content");
var btn_write_us = document.querySelector(".address .btn");
var btn_close_modal = document.querySelector(".modal-btn-close");
var user_name = model_content.querySelector("[name=username]");


btn_write_us.addEventListener("click", function (event) {
    event.preventDefault();
    model_content.classList.add("modal-content-show");
    user_name.focus();
});

btn_close_modal.addEventListener("click", function (event) {
    event.preventDefault();
    model_content.classList.remove("modal-content-show");
})


var i = 0;
while (slide_selector.length>i){
    slide_selector[i].addEventListener("click", function () {
        var j = 0;
        while (slides.length>j){
            if (slides[j].classList.contains("active-slide")){
                slides[j].classList.remove("active-slide");
            }
            ++j;
        }
        var k = 0;
        while (slide_selector.length>k){
            if (slide_selector[k].checked){
                slides[k].classList.add("active-slide");
            }
            ++k;
        }
    });
    ++i;
}