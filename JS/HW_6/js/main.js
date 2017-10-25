// //Entire point for app





var parentBlock = document.querySelector('.init-month'),
    nextBtn = document.querySelector('.btn-next'),
    prevBtn = document.querySelector('.btn-prev'),
    label = document.querySelector('.label-month');


var element = new DataPicker(parentBlock, nextBtn, prevBtn, label);
// element.createDOM();
element.init();
// Here will be a render() where we create
console.log("All ok");