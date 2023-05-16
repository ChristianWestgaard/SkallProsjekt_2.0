const { log } = require('console');
var express = require('express');

const router = require("./router/router")

var app = express();

// const uri = `mongodb+srv://${process.env.dataUser}:${process.env.dataPassword}@store.rrovops.mongodb.net/?retryWrites=true&w=majority`;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// const client = new MongoClient(uri)

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));


// use res.render to load up an ejs view file



// app.post('/signup', function(req, res){
//   const signupCreds = req.body
//   console.log(signupCreds);
//   res.render('signup')
//   try{
//     const database = client.db("users")
//     const doc = req.body
//     database.collection.insertOne(doc)
//   } finally {
//     client.close
//   }
// })

//Lag en ny pokemon side med post req for å legge til DB
// app.get('/nyPokeSide', function(req, res){
//   res.render('nyPokeSide')
// })

// app.post('/nyPokeSide', function(req, res){
//   // console.log(req.body);
//   const pokeInput = req.body
//   console.log(pokeInput);
//   res.render('nyPokeSide')
//     try{
//       const database = client.db("test")
//       const doc = req.body

//       database.collection("Species").insertOne(doc)
//       console.log("A document was added with the value of"+req.body);
//     } finally {
//       client.close
//     }
//   });

app.use(router)

// setter localhosten til 8080
app.listen(8080);
console.log('Server is listening on port 8080');

