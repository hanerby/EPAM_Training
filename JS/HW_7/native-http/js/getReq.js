var http = require('http');

exports.createReq = function(option) {  
    return http.get( option, (response) => {
        // Continuously update stream with data
        var body = '';
        response.on('data', (d) => {
            body += d;
        });
        response.on('end', ()=>{
          var parsed = JSON.parse(body);
          console.log(parsed);
        });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
};