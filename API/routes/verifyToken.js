const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.status(401).json("Token is not valid or may be expired , login again!")
            req.user = user;
            next();//leave this function and go to router and continue running that function in router
        })
    }else{
        return res.status(401).json("You are not authenticated user!")
    }
}

const verifyTokenAndAuthorization = (req ,res ,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("you are not allowed to do that!");
        }
    })
}


module.exports = {verifyToken , verifyTokenAndAuthorization , verifyTokenAndAdmin};