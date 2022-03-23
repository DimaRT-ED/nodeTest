//========================================
//Dima
//23/3/22
//12:33   BRANCH dima_br
//13:08   BRANCH HUB
//========================================
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const  url_test = 'http://rt-dev.xyz:3001';
const  url_rt = 'http://rt-ed.co.il';

http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == '/test') {
           res.end('<H1>hello test</h1>');
        
    }
    else {
        console.log(url_rt);
        res.writeHead(307, {
            Location: url_rt
        }).end();
    }
}).listen(80);
<<<<<<< HEAD
//================EOF======================
=======
>>>>>>> eacc09db92aec0968afe8b0b366f018e0e21ac9b
