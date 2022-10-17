const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})


router .get('/movies', function (req, res){
    var moviesname=["Rang de basanti","the shining" , "Lord of the rings", "Batman ","fidda","entertainment"]             //problem 1
res.send(moviesname)
})

router.get('/movies/:indexnumber', function (req, res){
    const arr=["Rang de basanti","the shining" , "Lord of the rings", "Batman ","fidda","entertainment"]          //problem 2
    let index=req.params.indexnumber
    res.send(arr[index])
    
})


router.get('/movie/:index',function(req,res){
    const arr=["Rang de basanti","the shining" , "Lord of the rings", "Batman ","fidda","entertainment"]
    let index = req.params.index
    if(index>arr.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(arr[index])  
    }                                                                                                                       //problem 3
})

router.get('/films',function(req,res){
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {                                                                                                       //problem 4
        'id': 2,
        'name': 'fidda'
       }, {
        'id': 3,
        'name': 'Rang de basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res .send(film)
       
       
})

router.get('/films/:filmid',function(req,res){
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'fidda'
       }, {
        'id': 3,
        'name': 'Rang de basanti'                                                                            //problem 5
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let filmid=req.params.filmid
       if (filmid>film.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(film[filmid-1])
    }
            
       })



module.exports = router;