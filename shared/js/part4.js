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
    document.getElementById("pound").addEventListener("input", compute_pound, false);


}

function area(){

    load_app("area.html", register_area_events, "convertor");
    
}

function register_area_events(){

    document.getElementById("s_meter").addEventListener("input", compute_s_meter, false);
    document.getElementById("s_kilometer").addEventListener("input", compute_s_kilometer, false);
    document.getElementById("s_feet").addEventListener("input", compute_s_feet, false);
    document.getElementById("s_mile").addEventListener("input", compute_s_mile, false);

}

function volume(){

    load_app("volume.html", register_volume_events, "convertor");

}

function register_volume_events(){

    document.getElementById("c_meter").addEventListener("input", compute_c_meter, false);
    document.getElementById("litre").addEventListener("input", compute_litre, false);
    document.getElementById("gallon").addEventListener("input", compute_gallon, false);
    document.getElementById("barrel").addEventListener("input", compute_barrel, false);

}




window.addEventListener("load", start, false);