function start(){

    document.getElementById("measurement").addEventListener("click", measurement, false);

}

function measurement(){

    console.log("measurement");

    create_button("weight");
    create_button("length");
    create_button("area");
    create_button("volume");
    
    document.getElementById("weight").addEventListener("click", weight, false);
    document.getElementById("length").addEventListener("click", length, false);
    document.getElementById("area").addEventListener("click", area, false);
    document.getElementById("volume").addEventListener("click", volume, false);

    const para = document.createElement("input");
    // para.classList.add("button");
    para.setAttribute("id", );

    const node = document.createTextNode();
    para.appendChild(node);

    const element = document.getElementById("type");
    element.appendChild(para);

}

function create_button(name){
    const para = document.createElement("button");
    para.classList.add("button");
    para.setAttribute("id", name);

    const node = document.createTextNode(name);
    para.appendChild(node);

    const element = document.getElementById("type");
    element.appendChild(para);
}


window.addEventListener("load", start, false);