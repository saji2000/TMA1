
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
    document.getElementById("centimeter").value = (number * 2.54).toFixed(3);

}

function compute_feet(){

    number = document.getElementById("feet").value;
    document.getElementById("centimeter").value = (number * 30.48).toFixed(3);
    document.getElementById("kilometer").value = (number * 0.0003048).toFixed(5);
    document.getElementById("meter").value = (number * 0.3048).toFixed(5);
    document.getElementById("inch").value = (number * 12).toFixed(3);

}

// ------------------- Weight Measurement -------------------

function compute_gram(){

    number = document.getElementById("gram").value;
    document.getElementById("kilogram").value = (number * 0.001).toFixed(3);
    document.getElementById("tonne").value = (number * 0.000001).toFixed(6);
    document.getElementById("ounce").value = (number * 0.03527).toFixed(3);
    document.getElementById("pound").value = (number * 0.002204).toFixed(5);

}

function compute_kilogram(){

    number = document.getElementById("kilogram").value;
    document.getElementById("gram").value = (number * 1000).toFixed(3);
    document.getElementById("tonne").value = (number * 0.001).toFixed(3);
    document.getElementById("ounce").value = (number * 0.03527).toFixed(3);
    document.getElementById("pound").value = (number * 2.205).toFixed(4);

}

function compute_tonne(){

    number = document.getElementById("tonne").value;
    document.getElementById("gram").value = (number * 1000000).toFixed(3);
    document.getElementById("kilogram").value = (number * 1000).toFixed(3);
    document.getElementById("ounce").value = (number * 35274).toFixed(3);
    document.getElementById("pound").value = (number * 2204.62).toFixed(3);

}

function compute_ounce(){

    number = document.getElementById("ounce").value;
    document.getElementById("gram").value = (number * 28.3495).toFixed(4);
    document.getElementById("kilogram").value = (number * 0.02835).toFixed(5);
    document.getElementById("tonne").value = (number * 0.00002835).toFixed(6);
    document.getElementById("pound").value = (number * 0.0625).toFixed(4);

}

function compute_pound(){

    number = document.getElementById("pound").value;
    document.getElementById("gram").value = (number * 453.592).toFixed(3);
    document.getElementById("kilogram").value = (number * 0.453592).toFixed(5);
    document.getElementById("tonne").value = (number * 0.0005).toFixed(6);
    document.getElementById("ounce").value = (number * 16).toFixed(3);

}

// ------------------- Area Measurement -------------------

function compute_s_meter(){

    number = document.getElementById("s_meter").value;
    document.getElementById("s_kilometer").value = (number * 0.000001).toFixed(6);
    document.getElementById("s_feet").value = (number * 10.7639).toFixed(4);
    document.getElementById("s_mile").value = (number * 3.86102e-7).toFixed(7);

}

function compute_s_kilometer(){
    
    number = document.getElementById("s_kilometer").value;
    document.getElementById("s_meter").value = (number * 100000).toFixed(3);
    document.getElementById("s_feet").value = (number * 1.076e+7).toFixed(3);
    document.getElementById("s_mile").value = (number * 0.386102).toFixed(3);

}

function compute_s_feet(){

    number = document.getElementById("s_feet").value;
    document.getElementById("s_meter").value = (number * 0.092903).toFixed(3);
    document.getElementById("s_kilometer").value = (number * 9.2903e-8).toFixed(8);
    document.getElementById("s_mile").value = (number * 3.58701e-8).toFixed(8);

}

function compute_s_mile(){

    number = document.getElementById("s_mile").value;
    document.getElementById("s_meter").value = (number * 2.59e+6).toFixed(3);
    document.getElementById("s_kilometer").value = (number * 2.58999).toFixed(3);
    document.getElementById("s_feet").value = (number * 2.788e+7).toFixed(3);

}

// ------------------- Volume Measurement -------------------

function compute_c_meter(){

    number = document.getElementById("c_meter").value;
    document.getElementById("litre").value = (number * 1000).toFixed(3);
    document.getElementById("gallon").value = (number * 264.172).toFixed(3);
    document.getElementById("barrel").value = (number * 6.28981).toFixed(3);

}

function compute_litre(){

    number = document.getElementById("litre").value;
    document.getElementById("c_meter").value = (number * 1000).toFixed(3);
    document.getElementById("gallon").value = (number * 0.264172).toFixed(4);
    document.getElementById("barrel").value = (number * 0.00628981).toFixed(6);
    
}

function compute_gallon(){

    number = document.getElementById("gallon").value;
    document.getElementById("litre").value = (number * 3.78541).toFixed(3);
    document.getElementById("c_meter").value = (number * 0.00378541).toFixed(6);
    document.getElementById("barrel").value = (number * 0.0238095).toFixed(6);
    
}

function compute_barrel(){

    number = document.getElementById("barrel").value;
    document.getElementById("litre").value = (number * 158.98729).toFixed(3);
    document.getElementById("gallon").value = (number * 42).toFixed(3);
    document.getElementById("c_meter").value = (number * 0.158987).toFixed(4);
    
}