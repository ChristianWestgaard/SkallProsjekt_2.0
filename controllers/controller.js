// requires
const pokemon = require("../models/pokemon");
const pokemon = require("../models/image");
const pokemon = require("../models/user");
const multer = require('muter');
const jwt = require('jasonwebtoken')

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