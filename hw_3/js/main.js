
function Resize_font(elem, value){
    var el = document.getElementById(elem),
        currentFont = parseInt(document.getElementById(elem).style.fontSize,10);
    value = +(value);
    el.style.fontSize = (currentFont + value) + 'px';
};
