var http = require('http'),
    req = require('./js/getReq');

http.createServer(function(req, res) {
}).listen(80, function(){
	console.log('Server running on port 80');
});

var option = [
  {
    host: 'www.nbrb.by',
    path: '/API/ExRates/Currencies'
  },
  {
    host: 'www.nbrb.by',
    path: '/API/ExRates/Rates?Periodicity=0'
  },
  {
    host: 'www.nbrb.by',
    path: '/API/ExRates/Rates/145'
  },
  {
    host: 'www.nbrb.by',
    path: '/API/ExRates/Rates/298?onDate=2017-10-1'
  },
  {
    host: 'www.nbrb.by',
    path: '/API/ExRates/Rates/USD?ParamMode=2'
  }
];

for(let i = 0;i<option.length;i++){
  req.createReq(option[i]);
}
