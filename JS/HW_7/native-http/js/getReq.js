var http = require('http');

exports.createReq = (option)=> {  
    return http.get( option, (res) => {
        let body = '';
        res.on('data', (d) => {
            body += d;
        });
        res.on('end', () =>{
          let parsed = JSON.parse(body);
          console.log(parsed);
        });
        res.on("error", (err) => {
            console.log("Error: " + err.message)
        });
    });
};