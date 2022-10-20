
const slideShow1 = document.querySelector(".showcase1");
slideShow1.style.background= `/img/server-room-zoom.jpg` ;

var i = 0; 
var images = [];
var time = 3000;
images[0] = "/img/server-room-zoom.jpg";
images [1] = "/img/data-center-2.jpg";
images[2] = "/img/gaming.jpg";
images[3] = "/img/antartica.jpg";
images[4] = "/img/women-standing.jpg";
images[5] = "/img/women-using.jpg";


function changeImg(){ 
    const slideShow1 = document.querySelector(".showcase1");
    slideShow1.style.background= `url(${images[i]}) no-repeat` ;
    if(i < images.length -1){
      i++
    }else{
      i = 0;
    }

  setTimeout("changeImg()", time)
}

changeImg()