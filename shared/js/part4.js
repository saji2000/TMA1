function start(){

    console.log("app started");


    document.getElementById("measurement").addEventListener("click", measurement, false);

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
        // events();
        }
    }
    xhr.send();
}

function measurement(){

    console.log("measurement");

    load_app("measurement.html");

    create_option("ksm");

}

function create_option(name){

    console.log("start creating");
    var option = document.createElement("option");
    // option.classList.add("button");
    option.setAttribute("id", name);
    option.setAttribute("value", name);

    option.innerHTML = name;
    // option.appendChild(node);

    console.log("here1");

    var element = document.getElementById("unitsLHS");
    console.log(option);

    element.appendChild(option);
    console.log("here2");


    element = document.getElementById("unitsRHS");
    element.add(option);


    console.log("finished creating");

}


window.addEventListener("load", start, false);