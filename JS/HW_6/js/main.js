// //Entire point for app

var renderer = new Renderer();
var cal = renderer.create({
    tag: 'div',
    classes: ['cal', 'new', 'wewe'],
    childrens: [
        {
            tag: 'div',
            classes: 'cal__header',
            childrens: [
                {
                    tag: 'div',
                    classes: 'btn-prev',
                },
                {
                    tag: 'div',
                    classes: 'label',
                },
                {
                    tag: 'div',
                    classes: 'btn-next',
                }
            ]
        },
        {
            tag: 'div',
            classes: 'cal__week'
        },
        {
            tag: 'div',
            classes: 'cal__body',
        },
    ]
});
renderer.render(cal,'.container');


var parentBlock = document.querySelector('.cal__body'),
    nextBtn = document.querySelector('.btn-next'),
    prevBtn = document.querySelector('.btn-prev'),
    label = document.querySelector('.label'),
    parentFoWeek = document.querySelector('.cal__week');

var dtPicker = new DataPicker(parentBlock, nextBtn, prevBtn, label, parentFoWeek);
// element.createDOM();
dtPicker.init();
// Here will be a render() where we create
console.log("All ok");