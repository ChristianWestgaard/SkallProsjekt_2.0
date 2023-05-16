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

  module.exports.account_post = async (req, res) => {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        console.log(err);
        res.status(500).send("Error saving image");
      } else if (err) {
        // An unknown error occurred when uploading.
        console.log(err);
        res.status(500).send("Error saving image");
      } else {
        // Everything went fine.
        const { name, ability1, ability2, ability3, author } = req.body;
  
        const image = new Image({
          name: req.file.originalname,
          data: req.file.buffer,
          contentType: req.file.mimetype,
          key: name,
        });
  
        try {
          await image.save();
          const product = await Pokomon.create({ name, ability1, ability2, ability3, author, image });
          res.status(201);
          console.log("Pokomon created:", product);
          res.json(product);
        } catch (err) {
          console.log(err);
          res.status(500).send("Error saving image");
        }
      }
    });
  };


  module.exports.signup_get = (req,res) => {
    res.render("signup");
  }


  module.exports.pokemon_update = (req, res) => {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        console.log(err);
        res.status(500).send("Error saving image");
      } else if (err) {
        console.log(err);
        res.status(500).send("Error saving image");
      } else {
        const ID = req.params.updateId;
        const { name, ability1, ability2, ability3, author } = req.body;
        let image = null;
        if (req.file) {
          // process the image if it exists
          image = new Image({
            name: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype,
            key: name,
          });
        }
        const update = { name, ability1, ability2, ability3, author };
        if (image) {
          update.image = image;
        }
        Pokomon.findByIdAndUpdate(ID, update)
          .then((result) => {
            console.log('Updated Pokomon successfully');
            res.status(204).send();
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send("Error updating pokomon");
          });
      }
    });
  };