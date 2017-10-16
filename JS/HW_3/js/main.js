function warehouse() {
    var arr = [];
    var param = this;
    return function(param){
        if(!param){
            return arr;
        }else{
            arr.push(param);
        };
    };
};

var keep = warehouse();

keep(1,2);
keep('Hello');
keep({a: 1}, 'Some string');
keep();