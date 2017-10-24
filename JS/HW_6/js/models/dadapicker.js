//class datapicker with methods

var DataPicker = function() {
    //   month: document.querySelector('.init-month'),
    //   nextBtn: document.querySelector('.btn-next'),
    //   prevBtn: document.querySelector('.btn-prev'),
    //   label: document.querySelector('.label-month'),
      this.activeDates = null,
      this.date= new Date(),
      this.todaysDate= new Date(),
      this.monthArr = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
DataPicker.prototype.monthsAsString = function (monthIndex) {
    return this.monthArr[monthIndex];
};
DataPicker.prototype.clearCalendar = function(){
    DataPicker.month.innerHTML = '';
};
DataPicker.prototype.createListenersBtn = function(){
    this.nextBtn.addEventListener('click', function () {
        this.clearCalendar()
        var nextMonth = this.date.getMonth() + 1
        this.date.setMonth(nextMonth)
        this.createMonth()
    }).bind(this);
    this.prevBtn.addEventListener('click', function () {
        this.clearCalendar()
        var prevMonth = this.date.getMonth() - 1
        this.date.setMonth(prevMonth)
        this.createMonth()
    }).bind(this);
};

var element = new DataPicker();
element.monthsAsString(9);

DataPicker.prototype.init =  function () {
    this.createMonth()
    // this.createListeners()
};

DataPicker.prototype.createDay = function (num, day) {
    var newDay = document.createElement('div')
    var dateEl = document.createElement('span')
    dateEl.className = 'date__num';
    dateEl.innerHTML = num;
    newDay.className = 'cal__date';

    if (num === 1) {
      var offset = ((day ) * 14.28)
      if (offset > 0) {
        newDay.style.marginLeft = offset + '%'
      }
    };

    if (this.date.toString() === this.todaysDate.toString()) {
      newDay.classList.add('cal__date_today')
    }

    newDay.appendChild(dateEl)
    this.month.appendChild(newDay)
};

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


// init: function () {
//     this.createMonth()
//     this.createListeners()
// },
//   // Create the days in month table
//   createDay: function (num, day) {
//     var newDay = document.createElement('div')
//     var dateEl = document.createElement('span')
//     dateEl.className = 'date__num';
//     dateEl.innerHTML = num;
//     newDay.className = 'cal__date';

//     if (num === 1) {
//       var offset = ((day ) * 14.28)
//       if (offset > 0) {
//         newDay.style.marginLeft = offset + '%'
//       }
//     };

//     if (this.date.toString() === this.todaysDate.toString()) {
//       newDay.classList.add('cal__date_today')
//     }

//     newDay.appendChild(dateEl)
//     this.month.appendChild(newDay)
//   },
//   // Create month table
//   createMonth: function () {
//     this.date.setDate(1);
//     var currentMonth = this.date.getMonth();
//     while (this.date.getMonth() === currentMonth) {
//       this.createDay(this.date.getDate(), this.date.getDay());
//       this.date.setDate(this.date.getDate() + 1);
//     };
//     this.date.setDate(1);
//     this.date.setMonth(this.date.getMonth() - 1);
//     this.label.innerHTML = this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear();
//   },
// }
