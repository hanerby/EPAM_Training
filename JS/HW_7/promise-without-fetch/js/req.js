var http = require('http');

exports.createReq = (option)=> {  
    return new Promise((resolve, reject)=> {
        http.get( option, (res) => {
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', ()=>{
                let parseData = JSON.parse(body);
                resolve(parseData);
                console.log('/////////////////');
            });
            res.on('error', (err)=>{
                reject(Error(err));
            });
        });
    });
};
