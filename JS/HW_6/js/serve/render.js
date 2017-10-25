var Renderer =  function () {
};
    
Renderer.prototype.create = function (elem, option) {
    this.elem = elem;

//Here create a parent element, where the next will append a datapicker or any child element
};

Renderer.prototype.render = function (elemChild, elemParent) { 
    elemParent.appendChild(elemChild);
};
var parentBlock = document.querySelector('.init-month'),
nextBtn = document.querySelector('.btn-next'),
prevBtn = document.querySelector('.btn-prev'),
label = document.querySelector('.label-month');


var renderer = new Renderer();

var element1 = renderer.create(new DataPicker(), {});

// renderer.render(element1, '.main1');
// renderer.render(element2, '.main2');


    // {
    //     tag: 'div',
    //     classes: ['selected-day'],
    //     property: 'selectedDate',
    //     countOfELement: 1,
    //     id: 'custom123'
    // }