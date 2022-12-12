var images;
var index = 0;
var border = 5;
var timer;
var seq = true;
var order;
var current_transition = "none";

var canvas = document.getElementById('slideshow');
var ctx = canvas.getContext('2d');

function start(){

  document.getElementById("start_button").addEventListener("click", start_show, false);
  document.getElementById("stop_button").addEventListener("click", stop_show, false);
  document.getElementById("back_button").addEventListener("click", back_show, false);
  document.getElementById("forward_button").addEventListener("click", forward_show, false);

    document.getElementById("order").addEventListener("change", (event) => {change_order(event.target.text);}, false);

  document.getElementById("transitions").addEventListener("change", (event) => {change_transition(event.target.value);}, false);


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
    timer = setInterval(slide_show, 4000);
    slide_show();
}

// continuing the show
function slide_show(){

    load_image_caption(images[index]);

    if(seq){
        if(index == images.length){
            document.getElementById('start_button').disabled = false;
            clearInterval(timer);
            index = 0;
        }
        else{
            index++;
        }
    }
    else{
        index = Math.floor(Math.random() * 20);
    }

    
}

// stops the ongoing show
function stop_show(){
    document.getElementById('start_button').disabled = false;
    clearInterval(timer);
}

// shows the next slide in order
function forward_show(){

    if(index == images.length - 1){
        index = 0;
    }
    else{
        index++;
    }
    console.log("forward index: " + index);
    load_image_caption(images[index]);
}

// shows the previous slide in order
function back_show(){

    if(index < 1){
        index = images.length - 1;
    }
    else{
        index--;
    }
    console.log("back ward index: " + index)
    load_image_caption(images[index]);
}



// loads the image and the caption
function load_image_caption(img){

  var image = new Image();
  console.log("in load image function");
  image.onload = function(){ 
    canvas.width = image.naturalWidth+border;
    canvas.height = image.naturalHeight+border;

    canvas.classList.add(current_transition);

    ctx.drawImage(image, 0, 0);

    canvas.classList.remove(current_transition);

    
    ctx.strokeStyle = '#7d8c99';
    ctx.lineWidth = 10;
    ctx.strokeRect(border/2, border/2, canvas.width-border, canvas.height-border);
  };

  image.src = img.address;


  // loading the caption
  document.getElementById("caption").innerHTML = img.caption;

}

// changes the order of showing the slides
function change_order(order){
    
  if(order == "Sequential"){
    seq = true;
    document.getElementById('forward_button').disabled = false;
    document.getElementById('back_button').disabled = false;
  }
  else{
    seq = false;
    document.getElementById('forward_button').disabled = true;
    document.getElementById('back_button').disabled = true;
  }
}

function change_transition(transition){

console.log(transition);

  canvas.classList.remove(current_transition, current_transition+'-display');
  current_transition = transition;
  canvas.classList.add(current_transition+'-display');

}



window.addEventListener("load", start, false);