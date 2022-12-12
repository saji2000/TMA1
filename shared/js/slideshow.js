var images;
var index = 0;
var border = 10;
var continuing = true;
var timer;
// console.log("here");



var canvas = document.getElementById('slideshow');
var ctx = canvas.getContext('2d');

function start(){

  document.getElementById("start_button").addEventListener("click", start_show, false);
  document.getElementById("stop_button").addEventListener("click", stop_show, false);
  document.getElementById("back_button").addEventListener("click", back_show, false);
  document.getElementById("forward_button").addEventListener("click", forward_show, false);

//   document.getElementById("random_button").addEventListener("click", changeSequence, false);
//   console.log("here");

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

// begins the show
function start_show(){
    index = 0;
    document.getElementById('start_button').disabled = true;
    timer = setInterval(slide_show, 1000);
    slide_show();
}

// continuing the show
function slide_show(){
    load_image_caption(images[index]);
    if(index == images.length - 1){
        document.getElementById('start_button').disabled = false;
        clearInterval(timer);
        index = 0;
    }
    else{
        index++;
    }
}

// stops the ongoing show
function stop_show(){
    document.getElementById('start_button').disabled = false;
    clearInterval(timer);
}

// shows the next slide in order
function forward_show(){

    if(index >= images.length - 1){
        index = 0;
    }
    else{
        index++;
    }

    load_image_caption(images[index]);
}

// shows the previous slide in order
function back_show(){

    if(index < 0){
        index = images.length - 1;
    }
    else{
        index--;
    }

    load_image_caption(images[index]);
}



// loads the image and the caption
function load_image_caption(img){

  var image = new Image();
  console.log("in load image function");
  image.onload = function(){ 
    canvas.width = image.naturalWidth+border;
    canvas.height = image.naturalHeight+border;
    ctx.drawImage(image, 0, 0);
    ctx.strokeStyle = '#7d8c99';
    ctx.lineWidth = 10;
    ctx.strokeRect(border/2, border/2, canvas.width-border, canvas.height-border);
  };

  image.src = img.address;


  // loading the caption
  document.getElementById("caption").innerHTML = img.caption;

}

window.addEventListener("load", start, false);