/////////////////////// Functional style /////////////////////
function auto(model) {
    var yearBld = 0;
    this.model = model;
    this.made = undefined;
    this.year = undefined;
    this.setYear = function (year) { //doing with getter and setter (Object.define.property)
        var now = new Date().getFullYear();
        if(year<1900){
            throw new Error('Cannot set year, it is so old')
        }
        if(year>now){
            throw new Error('Incorrec date, it is a future!!!!!')
        }
        yearBld = year;
    }
    this.getYearBld = function() {
        return yearBld;
      };
};

function suv(model){
    auto.apply(this, arguments);
    this.type = 'suv';
};

function sedan(model){
    auto.apply(this, arguments);
    this.type = 'sedan';
};

function wagon(model){
    auto.apply(this, arguments);
    this.type = 'wagon';
};

var lada = new sedan('lada');
lada.setYear(1899);
lada.setYear(2020);

///////////////////// Prototype style //////////////////

function auto(model) {
    var yearBld = 0;
    this.model = model;
    this.made = undefined;
    this.year = undefined;
};
auto.prototype.setYear = function (year) {
    var now = new Date().getFullYear();
    if(year<1900){
        throw new Error('Cannot set year, it is so old')
    }
    if(year>now){
        throw new Error('Incorrec date, it is a future!!!!!')
    }
    yearBld = year;
};
auto.prototype.getYearBld = function() {
    return yearBld;
  };

function suv(model){
    auto.apply(this, arguments);
    this.type = 'suv';
};

function sedan(model){
    auto.apply(this, arguments);
    this.type = 'sedan';
};

function wagon(model){
    auto.apply(this, arguments);
    this.type = 'wagon';
};

suv.prototype = Object.create(auto.prototype);

sedan.prototype = Object.create(auto.prototype);

wagon.prototype = Object.create(auto.prototype);

var lada = new sedan('lada');
lada.setYear(1899);
lada.setYear(2020);
lada.setYear(2016);
lada.getYearBld();