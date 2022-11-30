//  get All Elements from html

let inputElement = document.getElementById("input");

let btnElement = document.getElementById("btn");

let printMsg = document.getElementById("msg")

let wrongP = document.getElementById("wrong")

// Events

btnElement.onclick = function() {

    let inputValue = inputElement.value;


    if(inputElement.value != "") {
        
        //  put into p

        printMsg.innerHTML = (inputValue);


        inputElement.value = "";
        wrongP.textContent = "";
    } else {

        wrongP.textContent = "Please Enter massage";

    }

    

}