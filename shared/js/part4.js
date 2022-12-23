var responseDoc;
var weight_button; 
var length_button;
var area_button;
var volume_button; 

var number;


function start(){

    document.getElementById("measurement_button").addEventListener("click", measurement, false);

}


// loads the html on to part4.html
function load_app(address, register_events, id){

    console.log("load app");

    var xhr = new XMLHttpRequest();

    xhr.open('GET', address, true);

    xhr.onload = function(){
        if(this.status == 200){
            document.getElementById(id).innerHTML = this.responseText;
            register_events();
        }
    }

    xhr.send();
}

// starting the measurement app
function measurement(){

    load_app("measurement.html", register_measurement_events, "app");

}

// registering measurement events
function register_measurement_events(){

    document.getElementById("length_button").addEventListener("click", length, false);
    document.getElementById("weight_button").addEventListener("click", weight, false);
    document.getElementById("area_button").addEventListener("click", area, false);
    document.getElementById("volume_button").addEventListener("click", volume, false);
}


function length(){

    load_app("length.html", register_length_events, "convertor");
    
}

function register_length_events(){

    document.getElementById("meter").addEventListener("input", compute_meter, false);
    document.getElementById("kilometer").addEventListener("input", compute_kilometer, false);
    document.getElementById("centimeter").addEventListener("input", compute_centimeter, false);
    document.getElementById("inch").addEventListener("input", compute_inch, false);
    document.getElementById("feet").addEventListener("input", compute_feet, false);

}

function weight(){

    load_app("weight.html", register_weight_events, "convertor");
    
}

function register_weight_events(){

    document.getElementById("gram").addEventListener("input", compute_gram, false);
    document.getElementById("kilogram").addEventListener("input", compute_kilogram, false);
    document.getElementById("tonne").addEventListener("input", compute_tonne, false);
    document.getElementById("ounce").addEventListener("input", compute_ounce, false);

}

function area(){

    load_app("area.html");
    
}

function volume(){

    load_app("volume.html");

}

function compute_meter(){

    number = document.getElementById("meter").value;
    document.getElementById("feet").value = (number * 3.281).toFixed(3);
    document.getElementById("centimeter").value = (number * 100).toFixed(3);
    document.getElementById("kilometer").value = (number * 0.001).toFixed(5);
    document.getElementById("inch").value = (number * 39.37).toFixed(3);

}

function compute_kilometer(){

    number = document.getElementById("kilometer").value;
    document.getElementById("feet").value = (number * 3281).toFixed(3);
    document.getElementById("centimeter").value = (number * 100000).toFixed(3);
    document.getElementById("meter").value = (number * 1000).toFixed(3);
    document.getElementById("inch").value = (number * 39370).toFixed(3);

}

function compute_centimeter(){

    number = document.getElementById("centimeter").value;
    document.getElementById("feet").value = (number * .0328084).toFixed(5);
    document.getElementById("kilometer").value = (number * 0.00001).toFixed(5);
    document.getElementById("meter").value = (number * 0.01).toFixed(3);
    document.getElementById("inch").value = (number * 0.393701).toFixed(5);

}

function compute_inch(){

    number = document.getElementById("inch").value;
    document.getElementById("feet").value = (number * 0.0833333).toFixed(5);
    document.getElementById("kilometer").value = (number * 0.0000254).toFixed(5);
    document.getElementById("meter").value = (number * 0.0254).toFixed(3);
    document.getElementById("centimeter").value = (number * 2.54).toFixed(5);

}

function compute_feet(){

    number = document.getElementById("feet").value;
    document.getElementById("centimeter").value = (number * 30.48).toFixed(3);
    document.getElementById("kilometer").value = (number * 0.0003048).toFixed(5);
    document.getElementById("meter").value = (number * 0.3048).toFixed(5);
    document.getElementById("inch").value = (number * 12).toFixed(5);

}




window.addEventListener("load", start, false);