//class datapicker with methods

var DataPicker = function() {
      this.parentBlock = parentBlock,
      this.nextBtn = nextBtn,
      this.prevBtn = prevBtn,
      this.label = label,
      this.activeDates = null,
      this.date= new Date(),
      this.todaysDate= new Date(),
      this.monthArr = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
//Parsing the month from arrow
DataPicker.prototype.monthsAsString = function (monthIndex) {
    return this.monthArr[monthIndex];
};
//Clean all calendar table
DataPicker.prototype.clearCalendar = function(){
   return  this.parentBlock.innerHTML = '';
};
//Create a listeners on point btn
DataPicker.prototype.createListenersBtn = function(next, prev){
    var self = this;
    this.nextBtn.addEventListener('click', function () {
        self.clearCalendar();
        var nextMonth = self.date.getMonth() + 1;
        self.date.setMonth(nextMonth);
        self.createMonth();
    });
    this.prevBtn.addEventListener('click', function () {
        self.clearCalendar();
        var prevMonth = self.date.getMonth() - 1;
        self.date.setMonth(prevMonth);
        self.createMonth();
    });
};
//Create a day with property
DataPicker.prototype.createDay = function (num, day) {
    var newDay = document.createElement('div');
    var dateEl = document.createElement('span');
    newDay.className = 'cal__date';
    dateEl.className = 'date__num';
    dateEl.innerHTML = num;

    if (num === 1) {
      var offset = ((day ) * 14.28)
      if (offset > 0) {
        newDay.style.marginLeft = offset + '%'
      };
    };

    if (this.date.toString() === this.todaysDate.toString()) {
      newDay.classList.add('cal__date_today')
    };

    newDay.appendChild(dateEl);
    this.parentBlock.appendChild(newDay);
};
//Create a month table
DataPicker.prototype.createMonth = function () {
    this.date.setDate(1);
    var currentMonth = this.date.getMonth();
    while (this.date.getMonth() === currentMonth) {
      this.createDay(this.date.getDate(), this.date.getDay());
      this.date.setDate(this.date.getDate() + 1);
    };
    this.date.setDate(1);
    this.date.setMonth(this.date.getMonth() - 1);
    this.label.innerHTML = this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear();
};



