// //Entire point for app


// var calendar = {
//   month: document.querySelector('.init-month'),
//   next: document.querySelector('.btn-next'),
//   prev: document.querySelector('.btn-prev'),
//   label: document.querySelector('.label-month'),
//   activeDates: null,
//   date: new Date(),
//   todaysDate: new Date(),
//   monthArr : ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

//   // Initialize pointer on first days, create table month, create all listeners(button)
//   init: function () {
//     this.date.setDate(1)
//     this.createMonth()
//     this.createListeners()
//   },

//   createListeners: function () {
//     var _this = this
//     //  Clean a calendar and show the next month
//     this.next.addEventListener('click', function () {
//       _this.clearCalendar()
//       var nextMonth = _this.date.getMonth() + 1
//       _this.date.setMonth(nextMonth)
//       _this.createMonth()
//     })
//     // Clean a calendar and show the prev month
//     this.prev.addEventListener('click', function () {
//       _this.clearCalendar()
//       var prevMonth = _this.date.getMonth() - 1
//       _this.date.setMonth(prevMonth)
//       _this.createMonth()
//     })
//   },
//   // Create the days in month table
//   createDay: function (num, day, year) {
//     var newDay = document.createElement('div')
//     var dateEl = document.createElement('span')
//     dateEl.className = 'date__num';
//     newDay.className = 'cal__date';
//     dateEl.innerHTML = num;

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
//     var currentMonth = this.date.getMonth()
//     while (this.date.getMonth() === currentMonth) {
//       this.createDay(this.date.getDate(), this.date.getDay(), this.date.getFullYear())
//       this.date.setDate(this.date.getDate() + 1)
//     }

//     this.date.setDate(1)
//     this.date.setMonth(this.date.getMonth() - 1)
//     this.label.innerHTML = this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear()
//   },
//   //Return month from array
//   monthsAsString: function (monthIndex) {
//     return this.monthArr[monthIndex]
//   },
//   //Clear month and delete all days
//   clearCalendar: function () {
//     calendar.month.innerHTML = ''
//   },
// }


var element = new DataPicker();
nextBtn = document.querySelector('.btn-next'),
prevBtn = document.querySelector('.btn-prev'),

  element.createMonth();
  element.createListenersBtn(nextBtn, prevBtn);

// element.init();
// element.monthsAsString(9);