var images;

var canvas = document.getElementById('slideshow').getContext('2d');

function start(){

  document.getElementById("start_button").addEventListener("click", startSlideShow, false);
  document.getElementById("stop_button").addEventListener("click", stopSlideShow, false);
  document.getElementById("back_button").addEventListener("click", changeDirection, false);
  document.getElementById("random_button").addEventListener("click", changeSequence, false);

  load_images();
}

function load_images(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', '../shared/images/', true);

  xhr.onload = function(){
    if(this.status == 200) {
      image = JSON.parse(this.responseText);
    }
  }

  xhr.send();
}