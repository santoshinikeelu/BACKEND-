const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req,res) {
  
  let data = req.body;
  let savedData = await userModel.create(data);
  //console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
  // The same secret will be used to decode tokens 
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Lithium",
      organisation: "FunctionUp",
    },
    "functionup-Lithium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
 // let token = req.headers["x-auth-token"];
  
  // console.log(x)
 /* if(!token){
    return res.send("header missing")
  }
  
  let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });*/

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};

const updatedUser = async function (req, res) {
   // let token = req.headers["x-auth-token"];
  
  // console.log(x)
  /*if(!token){
    return res.send("header missing")
  }
  
  let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });*/

  
  let userId = req.params.userId;
  console.log(userId)
  let user = await userModel.findById(userId);
  console.log(user)
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:userData} );
  res.send({ status: updatedUser, data: updatedUser });
};

const deleted = async function (req, res) {
    /*let token = req.headers["x-auth-token"];
  
  // console.log(x)
  if(!token){
    return res.send("header missing")
  }
  
  let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });*/

  
  let userId = req.params.userId;
  //let userData = req.body;
  let updatedData = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isdeleted:true}},{new:true} );
  console.log(updatedData)
  res.send({ status: updatedData });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updatedUser = updatedUser;
module.exports.loginUser = loginUser;
module.exports.deleted = deleted
