var fetch = require('node-fetch');

exports.createReq = function (url) {
    return fetch(url)
    .then((res) => {
        return res.json();
    }).then((json) => {
        console.log(json);
    }).catch((err) => {
        console.log(err);
    });
};
