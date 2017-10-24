// //Entire point for app





var parentBlock = document.querySelector('.init-month'),
    nextBtn = document.querySelector('.btn-next'),
    prevBtn = document.querySelector('.btn-prev'),
    label = document.querySelector('.label-month');


var element = new DataPicker(parentBlock, nextBtn, prevBtn, label);

element.createMonth();
element.createListenersBtn();

console.log("All ok");