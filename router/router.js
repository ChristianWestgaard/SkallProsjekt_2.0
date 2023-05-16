const { Router } = require("express");//we need the express router to plug into applications
const Controller = require("../controllers/controller"); //exports our controller to get our functions
const router  = Router(); ///creates a new router

router.get("/", Controller.index_get);

router.get("/signup", Controller.signup_get)
router.post("/signup", Controller.signup_post)

router.get("/logInn", Controller.login_get)
router.post("/logInn", Controller.login_post)

router.get("/nyPokeSide", Controller.nyPokeSide_get)
router.post("/nyPokeSide", Controller.nyPokeSide_post)

module.exports = router;