var images;
var index = 0;
var border = 10;
// console.log("here");


var canvas = document.getElementById('slideshow');
var ctx = canvas.getContext('2d');

function start(){

  document.getElementById("start_button").addEventListener("click", start_show, false);
//   document.getElementById("stop_button").addEventListener("click", stopSlideShow, false);
//   document.getElementById("back_button").addEventListener("click", changeDirection, false);
//   document.getElementById("random_button").addEventListener("click", changeSequence, false);
  console.log("here");

  load_images();
}

function load_images(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '../shared/images/pics.json', true);

  xhr.onload = function(){
    if(this.status == 200) {
      images = JSON.parse(this.responseText);
    }
  }

  xhr.send();
}

function start_show(){
    document.getElementById('start_button').disabled = true;
    load_image(images[index].address);
}

function load_image(address)
{
  var image = new Image();
  console.log("in load image function");
  image.onload = function(){ 
    // canvas.width = image.naturalWidth+border;
    // canvas.height = image.naturalHeight+border;
    ctx.drawImage(image, 0, 0);
    // ctx.strokeStyle = '#7d8c99';
    // ctx.lineWidth = 10;
    // ctx.strokeRect(border/2, border/2, canvas.width-border, canvas.height-border);
  };

//   console.log(address);


  image.src = address;


}

window.addEventListener("load", start, false);