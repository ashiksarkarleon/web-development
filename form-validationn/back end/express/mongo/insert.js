var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoderParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

app.get('/',function(req,res){
    res.send('Welcome');
});

app.get('/status', (req, res, next) => {
    MongoClient.connect(url, function(err, db){
        if(err) res.sendStatus(400);
        res.sendStatus(200);
        db.close();
    });
});

app.post('/insert', urlencoderParser, function(req,res){

    const fastname = req.body.fastname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const sex = req.body.sex;
    const date = req.body.date;

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        
        const data = {
            fastname: fastname,
            lastname: lastname,
            email: email,
            password: password,
            sex: sex,
            date: date
        };

        var dbo = db.db('mydb');
        dbo.collection('form1').insertOne(data, function(err, res) {
            if(err) throw err;
            console.log('1 data inserted');
            console.log(fastname + " " + lastname + " " + email + " " + password + " " + sex + " " + date);
            db.close();
        });

    });

});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});