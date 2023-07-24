var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoderParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

var mysql = require('mysql');

app.get('/',function(req,res){
    res.send('Welcome');
});

app.get('/status', (req, res, next) => {

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb'
    });

    con.connect(function(err){
        if(err) res.sendStatus(400);
        res.sendStatus(200);
        con.end();
    });
});

app.post('/insert', urlencoderParser, function(req,res){

    const fastname = req.body.fastname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const sex = req.body.sex;
    const date = req.body.date;

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mydb'
    });

    con.connect(function(err){
        if(err) throw err;
        console.log('connection');


        var sql = 'insert into form1(fastname, lastname, email, password, sex, date) values ?';
        var data = [
            [fastname, lastname, email, password, sex, date]
        ];

        con.query(sql,[data], function(err, res){
            if(err) throw err;
            console.log("record inserted");
        });

        con.end();
    });

});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});