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
module.exports.tokenvalidation = tokenvalidation