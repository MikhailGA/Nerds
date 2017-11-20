var slides = document.querySelectorAll(".slider-abilities .slide");
var slide_selector = document.querySelectorAll("[name=slide-selector]");

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