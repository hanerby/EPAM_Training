
var mystore = localStorage;
console.log(mystore);

// // var drink = document.getElementsByName("drink");
// var drink = document.querySelectorAll('[name="drink"]');
// var val = localStorage.getItem('drink'); // local storage value
// for(var i=0;i<drink.length;i++){
//   if(drink[i].value == val){
//       drink[i].checked = true; // marking the required radio as checked
//   }
// }
// drink.addEventListener( "change" , function() {  localStorage.setItem("drink", drink.value); });
window.onload = function() {
    var from = document.querySelector('[name="from"]');
    var fromTime = document.querySelector('[name="fromTime"]');
    var to = document.querySelector('[name="to"]');
    var toTime = document.querySelector('[name="toTime"]');
    var drink = document.getElementsByName('drink');
     
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
    //
    // if (localStorage.getItem(drink) == null) {
    //     return "";
    // }else{
    //     return localStorage.getItem(drink);
    // };  
};

window.onbeforeunload = function() {
    // var from = document.getElementsByName('from');
    var from = document.querySelector('[name="from"]');
    // var fromTime = document.getElementsByName('fromTime');
    var fromTime = document.querySelector('[name="fromTime"]');
    // var to = document.getElementsByName('to');
    var to = document.querySelector('[name="to"]');
    // var toTime = document.getElementsByName('toTime');
    var toTime = document.querySelector('[name="toTime"]');
    var drink = document.getElementsByName('drink');
    // var drink = document.querySelectorAll('[name="drink"]');
    // drink.addEventListener( "change" , function() {  localStorage.setItem("drink", drink.value); });
    localStorage.setItem("from", from.value);
    localStorage.setItem("fromTime", fromTime.value);
    localStorage.setItem("to", to.value);
    localStorage.setItem("toTime", toTime.value);
    localStorage.setItem("drink", drink.value);
};

// console.log(drink);