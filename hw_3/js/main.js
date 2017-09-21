
function Resize_font(elem, value){
    var el = document.getElementById(elem),
        currentFont = parseInt(document.getElementById(elem).style.fontSize,10);
    value = +(value);
    el.style.fontSize = (currentFont + value) + 'px';
};

// function Resize_font(elem, value)
// {
//     value = parseInt(value,10);
//     var el = document.getElementById(elem);
//     var currentFont = parseInt(el.style.fontSize,10);
//     el.style.fontSize = (currentFont + value) + 'px';
// }

// var incr = document.getElementById('list__button__increment');
// var decr = document.getElementById("list__button__decrement");

// incr.addEventListener("click", )