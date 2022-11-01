const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://santoshinikeelu:tummereho683@cluster0.zhokymy.mongodb.net/SANTOSHINI", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

/*app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );*/

  //------------------------middleware assignment---------------//
  /*Write a middleware that logs (console.log) some data everytime any API is hit
Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
For this first figure out how to get the route location being request, how to get current timestamp and how to get the IP.
NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)
 
e.g: you should be logging something like this on each line:
time , IP, Route should be printed on each line in terminal( every time an api is hit)
2010-08-19 14:00:00 , 123.459.898.734 , /createUser*/



  app.use(
    function(req,res,next){
        let ip = req.ip
        let path = req.path
        var currentDate= new Date();
        var dateTime=currentDate.getDate() + "/"
                    +(currentDate.getMonth()+1) + "/"
                    +currentDate.getFullYear() + "  ,  "
                    +currentDate.getHours() + ":"
                    +currentDate.getMinutes() + ":"
                    +currentDate.getSeconds();
        //let Date = new Date().format("YYYY-MM-DD hh:mm:ss")
        console.log(dateTime,',',ip,',',path)
        next()
    }
  )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
