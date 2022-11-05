const jwt = require("jsonwebtoken")
const tokenvalidation = function(req, res, next){
    let token = req.headers["x-auth-token"];
  
  // console.log(x)
  if(!token){
    return res.send("header missing")
  }
  
  let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }
  else{
    next()
  }

  
}
const updatepost = function(req,res,next){
  let token = req.headers["x-auth-token"]
    if(!token){
      return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-Lithium-very-very-secret-key')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

}
else{
  next()
}
}
module.exports.tokenvalidation = tokenvalidation;
module.exports.updatepost = updatepost
