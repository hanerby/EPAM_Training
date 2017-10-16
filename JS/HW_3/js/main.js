// work with 1 arg :(
function warehouse() {
    var arr = [];
    var param = this;
    return function(param){
        if(!param){
            return arr;
        }else{            
            arr.push(param)           
        };
    };
};
//normal work
function warehouse() {
    var arr = [];
    var param = this;
    return function(...param){
        if(param.length == 0){
            return arr;
        }else{ 
            param.forEach(function(el) {
                arr.push(el);
            });
        };
    };
};

var keep = warehouse();

keep(1,2);
keep('Hello');
keep({a: 1}, 'Some string');
keep();