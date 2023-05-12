const { log } = require('console');
var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Species = require('./models/pokemon');

var app = express();

const uri = "mongodb+srv://readUser:Reader1@store.rrovops.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const client = new MongoClient(uri)
  // .then((result) => console.log("connected to db"));
  // .catch((err) => console.log(err));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("public"))

app.use(express.urlencoded({extended: true}));


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});


app.get('/minBlogg', function(req, res) {
  res.render('bloggSide');
});

app.get('/folger', function(req, res){
  res.render('subscribed')
})

app.get('/logInn', function(req, res){
  res.render('logInn')
})

app.get('/signin', function(req, res){
  res.render('signin')
})

app.get('/nyPokeSide', function(req, res){
  res.render('nyPokeSide')
})

app.post('/nyPokeSide', function(req, res){
  // console.log(req.body);
  const pokeInput = req.body
  console.log(pokeInput);
  res.render('nyPokeSide')
    try{
      const database = client.db("test")
      const doc = req.body

      database.collection("Species").insertOne(doc)
      console.log("A document was added with the value of"+req.body);
    } finally {
      client.close
    }
  });

app.listen(8080);
console.log('Server is listening on port 8080');

