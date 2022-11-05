const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.tokenvalidation, userController.getUserData)

router.put("/user1/:userId",middleware.tokenvalidation ,userController.updatedUser)
router.delete("/deletedData/:userId",middleware.tokenvalidation,userController.deleted)
router.post("/fetchdata/:userId/post",middleware.updatepost,userController.postMessage)
module.exports = router;