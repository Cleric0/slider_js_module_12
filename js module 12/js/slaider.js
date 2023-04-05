let imgs = [
    {
        parCity: 'Rostov-on-Don<br> LCD admiral',
        parArea: '81 m2',
        parTime: '3.5 months',
        url: 'img/image1.png',
        linc: 'Rostov-on-Don, admiral'
    },
    {
        parCity: 'Sochi<br>Thieves',
        parArea: '105 m2',
        parTime: '4 months',
        url: 'img/image2.png',
        linc: 'Sochi Thieves'
    },
    {
        parCity: 'Rostov-on-Don<br> Patriotic',
        parArea: '93 m2',
        parTime: '3 months',
        url: 'img/image3.png',
        linc: 'Rostov-on-Don Patriotic'
    }
];

function initSlider(){
    if (!imgs || !imgs.length) return;

    let sliderImgs = document.querySelector(".slider_img");
    let arrows = document.querySelector(".arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let city = document.querySelector(".city");
    let area = document.querySelector(".area");
    let time = document.querySelector(".time");
    let sliderCityLinc = document.querySelector(".list-city");

    initImg();
    initArrows();
    initDots();
    initTextCity();
    initTextArea();
    initTextTime();
    lincsCitys();

    function initImg() {
        imgs.forEach((image, index) => {
            let imgDiv = `<div class="image n${index} ${index === 0? "active" : ""}" 
            style="background-image: url(${imgs[index].url});" data-index="${index}"></div>`;
            sliderImgs.innerHTML += imgDiv
        
        })
    }
    function initArrows() {
        arrows.querySelectorAll(".slider_arrow").forEach(arrow => {
            arrow.addEventListener("click", function(){
                let curNum = +sliderImgs.querySelector(".active").dataset.index;
                let NextNum;
                if (arrow.classList.contains("left")){
                    NextNum = curNum === 0? imgs.length - 1 : curNum - 1;
                } else {
                    NextNum = curNum === imgs.length - 1? 0 : curNum + 1;
                }
                moveSlider(NextNum);
            });
        });
    }
    function initDots() {
        imgs.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        });
    }
    function lincsCitys() {
        imgs.forEach((image, index) => {
            let link = `<a class="city-linc n${index} ${index === 0? "active" : ""}" data-index="${index}">${imgs[index].linc}</a>`;
            sliderCityLinc.innerHTML += link;
        });
        sliderCityLinc.querySelectorAll(".city-linc").forEach(linc => {
          linc.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
    }

    
    function moveSlider(num) {
        sliderImgs.querySelector(".active").classList.remove("active");
        sliderImgs.querySelector(".n" + num).classList.add("active");

        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");

        changeTextCity(num);
        changeTextArea(num);
        changeTextTime(num);

        sliderCityLinc.querySelector(".active").classList.remove("active");
        sliderCityLinc.querySelector(".n" + num).classList.add("active");

    }
    
    
    function initTextCity() {
        let cityDiv = `<div class="parmtr-city">${imgs[0].parCity}</div>`;
        city.innerHTML += cityDiv;
    }
    function changeTextCity(num) {
        if (!imgs[num].parCity) return;
        let cityText = city.querySelector(".parmtr-city");
        cityText.innerHTML = imgs[num].parCity;
    }

    function initTextArea() {
        let areaDiv = `<div class="parmtr-area">${imgs[0].parArea}</div>`;
        area.innerHTML += areaDiv;
    }
    function changeTextArea(num) {
        if (!imgs[num].parArea) return;
        let areaText = area.querySelector(".parmtr-area");
        areaText.innerHTML = imgs[num].parArea;
    }

    function initTextTime() {
        let timeDiv = `<div class="parmtr-time">${imgs[0].parTime}</div>`;
        time.innerHTML += timeDiv;
    }
    function changeTextTime(num) {
        if (!imgs[num].parTime) return;
        let timeText = time.querySelector(".parmtr-time");
        timeText.innerHTML = imgs[num].parTime;
    }
}

document.addEventListener("DOMContentLoaded", initSlider);