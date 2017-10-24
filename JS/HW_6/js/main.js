// //Entire point for app

var element = new DataPicker();

nextBtn = document.querySelector('.btn-next'),
prevBtn = document.querySelector('.btn-prev'),

element.createMonth();
element.createListenersBtn(nextBtn, prevBtn);
