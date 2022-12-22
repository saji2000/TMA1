var responseDoc;
var weight_button; 
var length_button;
var area_button;
var volume_button; 

var meter;


function start(){

    console.log("app started");


    document.getElementById("measurement_button").addEventListener("click", measurement, false);

}

function load_app(address){

    console.log("load app");

    var xhr = new XMLHttpRequest();

    xhr.open('GET', address, true);

    xhr.onload = function()
    {
        if(this.status == 200) 
        {
            document.getElementById('app').innerHTML = this.responseText;
            var parser = new DOMParser();
            responseDoc = parser.parseFromString (this.responseText, "text/html");
            console.log(responseDoc.getElementById("length_button"));

            document.getElementById("length_button").addEventListener("click", length, false);
            document.getElementById("weight_button").addEventListener("click", weight, false);
            document.getElementById("area_button").addEventListener("click", area, false);
            document.getElementById("volume_button").addEventListener("click", volume, false);

        }
    }

    xhr.send();
}

function load_convertor(address){

    console.log("load convertor");

    var xhr = new XMLHttpRequest();

    xhr.open('GET', address, true);

    xhr.onload = function()
    {
        if(this.status == 200) 
        {
        document.getElementById('convertor').innerHTML = this.responseText;
        var parser = new DOMParser();
        responseDoc = parser.parseFromString (this.responseText, "text/html");

        document.getElementById("meter").addEventListener("change", compute_meter, false);
        // document.getElementById("kilometer").addEventListener("change", compute_kilometer, false);
        // document.getElementById("centimeter").addEventListener("change", computer_centimeter, false);
        // document.getElementById("inch").addEventListener("change", compute_inch, false);
        // document.getElementById("feet").addEventListener("change", compute_feet, false);

        }
    }
    xhr.send();
}

function measurement(){

    load_app("measurement.html");

}


function length(){

    load_convertor("length.html");
    
}

function weight(){

    load_convertor("weight.html");
    
}

function area(){

    load_convertor("area.html");
    
}

function volume(){

    load_convertor("volume.html");

}

function compute_meter(){

    meter = document.getElementById("meter").value;
    document.getElementById("feet").value = (meter * 3.281).toFixed(3);
    document.getElementById("centimeter").value = (meter * 100).toFixed(3);
    document.getElementById("kilometer").value = (meter * 0.0001).toFixed(5);
    document.getElementById("inch").value = (meter * 39.37).toFixed(3);

}

function compute_kilometer(){

    meter = document.getElementById("meter").value;
    document.getElementById("feet").value = (meter * 3.281).toFixed(3);
    document.getElementById("centimeter").value = (meter * 100).toFixed(3);
    document.getElementById("kilometer").value = (meter * 0.0001).toFixed(5);
    document.getElementById("inch").value = (meter * 39.37).toFixed(3);

}




window.addEventListener("load", start, false);