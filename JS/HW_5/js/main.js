var storage = localStorage;
console.log(storage);
var btnClear = document.querySelectorAll('.button_clear')[0];

var clearStorage = function(){
    storage.clear();
};

//Return information from local storage in form after reload
window.onload = function() {
    var from = document.querySelector('[name="from"]'),
        fromTime = document.querySelector('[name="fromTime"]'),
        to = document.querySelector('[name="to"]'),
        toTime = document.querySelector('[name="toTime"]'),
        drink = document.getElementsByName('drink');
     
    if (from.value == null) {
        from.value =  '';
    }else{from.value = localStorage.getItem('from');};
    //
    if (fromTime.value == null) {
        fromTime.value = '';
    }else{fromTime.value = localStorage.getItem('fromTime');};
    //
    if (to.value == null) {
        to.value = '';
    }else{to.value = localStorage.getItem('to');};
    //
    if (toTime.value == null) {
        toTime.value = '';
    }else{toTime.value = localStorage.getItem('toTime');};
    
    for(let i = 0; i<drink.length;i++){
        if (drink[i].value ==  localStorage.getItem('drink')) {
            drink[i].checked = true;
        };
    };
};
// Grab information after reload or any event
window.onbeforeunload = function() {
    var from = document.querySelector('[name="from"]'),
        fromTime = document.querySelector('[name="fromTime"]'),
        to = document.querySelector('[name="to"]'),
        toTime = document.querySelector('[name="toTime"]'),
        drink = document.getElementsByName('drink');

    for(i = 0; i< drink.length; i++){
        if (drink[i].type == "radio" && drink[i].checked) {
            localStorage.setItem("drink", drink[i].value);
            console.log(drink[i].value, localStorage.getItem('drink') );
        }
    };

    localStorage.setItem("from", from.value);
    localStorage.setItem("fromTime", fromTime.value);
    localStorage.setItem("to", to.value);
    localStorage.setItem("toTime", toTime.value);
};
