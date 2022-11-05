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

const postMessage = async function (req, res) {
    let message = req.body.message
    
    /*let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-Lithium-very-very-secret-key')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})*/

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updatedUser = updatedUser;
module.exports.loginUser = loginUser;
module.exports.deleted = deleted;
module.exports.postMessage = postMessage;
