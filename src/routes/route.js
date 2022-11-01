const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newauthorcontroller= require("../controllers/newauthorcontroller")
const newpublisher= require("../controllers/newpublishercontroller")
const newbook= require("../controllers/newbookcontroller")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createauthor", newauthorcontroller.createauthor  )
router.post("/createPublisher",newpublisher.createpublisher)
router.post("/CREATEBOOK",newbook.createbook)
router.get("/getallbookdata",newbook.getallbookdata)
router.get("/getauthorsdata",newbook.getauthorsdata)
router.put("/question4",newbook.question4)
router.put("/question5",newbook.question5)

module.exports = router;