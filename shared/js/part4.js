var weight_button; 
var length_button;
var area_button;
var volume_button; 

var number;


function start(){

    document.getElementById("measurement_button").addEventListener("click", measurement, false);
    document.getElementById("mortgage_button").addEventListener("click", mortgage, false);
    document.getElementById("bmi_button").addEventListener("click", bmi, false);

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

// ------------------- Measurement App -------------------
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

// ------------------- Mortgage App -------------------

var f = 12;
var ans;

function mortgage(){

    load_app("mortgage.html", register_mortgage_events, "app");

}

// registering the event listeners

function register_mortgage_events(){

    document.getElementById("loan_amount").addEventListener("blur", validate_loan_amount, false);
    document.getElementById("down_payment").addEventListener("blur", validate_down_payment, false);
    document.getElementById("interest_rate").addEventListener("blur", validate_interest_rate, false);
    document.getElementById("loan_term").addEventListener("blur", validate_loan_term, false);
    document.getElementById("calculate").addEventListener("click", calculate_mortgage, false); 

}

// validating the numbers

function validate_loan_amount(){

    number = document.getElementById("loan_amount").value;

    if(number <= 0){
        alert("Loan amount cannot be negative or zero!");
        document.getElementById("loan_amount").value = -1 * number;
    }

}

function validate_down_payment(){
    
    number = document.getElementById("down_payment").value;

    if(number < 0){
        alert("Down payment cannot be negative!");
        document.getElementById("down_payment").value = -1 * number;
    }
}

function validate_interest_rate(){
    
    number = document.getElementById("interest_rate").value;

    if(number < 0){
        alert("Interest rate cannot be negative!");
        document.getElementById("interest_rate").value = -1 * number;
    }

}

function validate_loan_term(){
    number = document.getElementById("loan_term").value;

    if(number <= 0){
        alert("Loan term cannot be negative or zero!");
        document.getElementById("loan_term").value = -1 * number;
    }
}


// calculating the payment amount

function calculate_mortgage(){

    var p = document.getElementById("loan_amount").value;
    var r = document.getElementById("interest_rate").value;
    var t = document.getElementById("loan_term").value;
    var d = document.getElementById("down_payment").value;
    var f = document.getElementById('frequency').value;

    var i = document.getElementById('frequency').selectedIndex;
    var options = document.getElementById('frequency').options;
    var frequency = options[i].text;

    p = p - d;

    if(p <= 0 || r < 0 || t <= 0 || d < 0){

        alert("Inputs wrong or incompleted, please try again");

    }
    // if interest is zero percent
    else if(r == 0){

        ans = (p / (t * f)).toFixed(3);

        document.getElementById("result").innerHTML = frequency + " payment of $" + ans;

    }
    else{

        ans = p * ((r/100)/f);

        ans = (ans / (1 - (1 + (r/100)/f)**(- t * f))).toFixed(3);

        document.getElementById("result").innerHTML = frequency + " payment of $" + ans;

    }
}

// ------------------- BMI App -------------------

var weight;
var height;
var age;
var gender;
var unit;
var bmi;
var bfp;
var result;

function bmi(){

    load_app("bmi.html", register_bmi_events, "app");

}

function register_bmi_events(){

    document.getElementById("weight").addEventListener("blur", validate_weight, false);
    document.getElementById("height").addEventListener("blur", validate_height, false);
    document.getElementById("age").addEventListener("blur", validate_age, false);
    document.getElementById("calculate").addEventListener("click", calculate_bmi, false);

}

function validate_weight(){
    number = document.getElementById("weight").value;
    if(number <= 0){
        alert("Invalid weight, cannot be negative or zero!");
        document.getElementById("weight").value = -1 * number;
    }
}

function validate_height(){
    number = document.getElementById("height").value;
    if(number <= 0){
        alert("Invalid height, cannot be negative or zero!");
        document.getElementById("height").value = -1 * number;
    }
}

function validate_age(){
    number = document.getElementById("age").value;
    if(number <= 0){
        alert("Invalid age, cannot be negative or zero!");
        document.getElementById("age").value = -1 * number;
    }
}


// calculate the bmi and bfp of the person
function calculate_bmi(){

    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    unit = document.getElementById("unit").value;

    if(weight <= 0 || height <= 0 || age <= 0){
        alert("wrong or incompleted inputs, please try again");
        return;
    }

    bmi = (weight / (height**2)).toFixed(2);

    if(unit == "american"){
        bmi = bmi * 703;
    }

    if(gender == "male" && age >= 18){
        bfp = 1.2 * bmi + 0.23 * age - 16.2;
    }
    else if(gender == "female" && age >= 18){
        bfp = 1.2 * bmi + 0.23 * age - 5.4;
    }
    else if(gender == "male" && age < 18){
        bfp = 1.51 * bmi - 0.7 * age - 2.2;
    }
    else{
        bfp = 1.51 * bmi - 7.0 * age + 1.4;
    }

    if(bmi < 18.5){
        result = "underweight.";
    }
    else if(bmi < 25){
        result = "normal.";
    }
    else if(bmi < 30){
        result = "overweight.";
    }
    else{
        result = "obese.";
    }

    document.getElementById("result").innerHTML = "BMI is " + bmi + ", and bfp is " + bfp.toFixed(2) + ". And you are " + result;

}

window.addEventListener("load", start, false);