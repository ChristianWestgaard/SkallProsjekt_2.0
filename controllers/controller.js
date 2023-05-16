// requires
const Species = require("../models/pokemon");
const multer = require('multer');
const jwt = require('jsonwebtoken')

//Memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image')

//Error Handlers
const errEvent = (err) => {
    console.log(err.message, err.code);
    let error = {email: "", password: ""}
    
    if (err.message === "No email found"){
            error.email = "I am sorry, we couldnt find your Email address in out Database"
        }
    
    if (err.code === 11000) {
        err.doppleganger = "That Email is already registered, would you like to sign inn using that Email?"
        }

    if (err.message === "password didnt match") {
            err.passowrd = "Incorrect Password, have you remembered to turn off CapsLock?"
        }
    }

const maxAge = 99 * 365 * 24 * 60 * 60; //99 years in seconds

const createToken = (id) => {
    return jwt.sign({id}), "CIA mysterium", {
         expressIn: maxAge
    }
    return errors;
}

module.exports.index_get = async (req,res) => { //a function that renders our routes from AuthRoutes
    await Species.find().sort({ createdAt: -1}).limit(10)
    .then((result) => {
        res.render('index', {title: 'All Pokomons', pokemon: result})
    })
    .catch((err) => {
      res.render("error");
      console.log(err);
  })
  }