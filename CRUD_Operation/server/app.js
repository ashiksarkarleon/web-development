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

app.post('/insert', urlencoderParser, function(req, res) {

    const fastname = req.body.fastname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const sex = req.body.sex;
    const date = req.body.date;

    var sql = 'insert into form1(fastname, lastname, email, password, sex, date) values ?';
    var data = [
        [fastname, lastname, email, password, sex, date]
    ];

    con.query(sql,[data], function(err, result){
        if(err) throw err;

        res.sendStatus(200);
    });

});

app.get('/delete/:id', function(req, res) {
    var id = {id: req.params.id};

    var sql = 'delete from form1 where id=' + req.params.id;
    con.query(sql, function(err, result, fields) {
        if(err) throw res.sendStatus(500);

        res.end(JSON.stringify(result));
        //res.send('delete success ' + req.params.id);
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

app.put('/update', urlencoderParser, function(req, res) {

    console.log('Hit');

    const id = req.body.id;
    const fastname = req.body.fastname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const sex = req.body.sex;
    const date = req.body.date;

    console.log(`update form1 set fastname="${fastname}", lastname="${lastname}", email="${email}", password="${password}", sex="${sex}", date="${date}" where id="${id}"`);

    var sql = `update form1 set fastname="${fastname}", lastname="${lastname}", email="${email}", password="${password}", sex="${sex}", date="${date}" where id="${id}"`;

    con.query(sql, function(err, result) {
        if(err) throw res.sendStatus(500);

        res.sendStatus(200);
        console.log('Update Success');
    });

});

var server = app.listen(8000, 'localhost',function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});