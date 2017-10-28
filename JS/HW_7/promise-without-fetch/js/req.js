var http = require('http');

exports.createReq = function(option) {  
    return new Promise(function (resolve, reject) {
        http.get( option, (res) => {
            var body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', ()=>{
                var parseData = JSON.parse(body);
                resolve(parseData);
                console.log('/////////////////');
            });
            res.on('error', (err)=>{
                reject(Error(err));
            });
        });
    });
};
