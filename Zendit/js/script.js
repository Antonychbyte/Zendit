function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

function scrollHeader(){
    let header =document.querySelector('.header');
    window.addEventListener('scroll', function(){
        if(window.scrollY>100){
            header.classList.add('header_scroll');
        }else{
            header.classList.remove('header_scroll');
        }
    })
}
scrollHeader();



function addActive(){
    let burger = document.querySelector('.burger');
    let aside = document.querySelector('.aside');

    burger.addEventListener('click', function(){
        aside.classList.toggle('active');
    });
    burger.addEventListener('click', addLock);
    aside.addEventListener('click', addLock);
    aside.addEventListener('click', function(){
        aside.classList.toggle('active');
    });
}
addActive();
function addLock(){
    let body = document.querySelector('body');
    body.classList.toggle('lock');
}

