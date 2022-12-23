
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
