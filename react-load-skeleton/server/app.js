var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoderParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

var mysql = require('mysql');
var con = require('./Database.js');

app.get('/', function(req, res) {
    res.send('server ok');
});

app.get('/read', function(req, res) {
    var sql = 'select * from form1';
    con.query(sql, function(err, result, fields) {
        if(err) throw res.sendStatus(500);

        res.end(JSON.stringify(result));
    });
});

app.get('/query/:id', function(req, res) {
    var id = {id: req.params.id};
    var sql = 'select * from form1 where id=' + req.params.id;
    con.query(sql, function(err, result) {
        if(err) throw res.sendStatus(500);

        res.end(JSON.stringify(result));
    });
});

var server = app.listen(8000, 'localhost',function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});