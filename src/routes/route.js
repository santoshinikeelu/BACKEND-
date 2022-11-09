const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const Memecontroller= require("../controllers/MemeController")
const Weathercontroller= require("../controllers/WeatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getbydistricts",CowinController.getbydistricts)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.post("/creatememe",Memecontroller.creatememe)
router.get("/weatherreport",Weathercontroller.weatherdetails)
router.get("/sortbytemperature",Weathercontroller.getallcitiestemp)

module.exports = router;