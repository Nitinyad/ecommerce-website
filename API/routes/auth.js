const router = require("express").Router()
// const passport = require('passport')
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

//REGISTER
router.post('/register' ,async(req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email , 
        password : CryptoJS.AES.encrypt(req.body.password , process.env.PASS_SEC).toString(),
    })

    try{
        //we are using aysnc function bz savedUser take 
        const savedUser = await newUser.save();
        // console.log(savedUser);
        res.status(200).json(savedUser)
    }catch(e){
        console.log(e)
        res.status(500).json(e);
    }

} )


//LOGIN
router.post('/login' , async (req,res)=>{
    try{
        //finding the user from the database 
        const user = await User.findOne({username : req.body.username}) 

        //if donot find any user in the database
        !user && res.status(401).json("Wrong Credentials!")

        //then check the passward is it correct or not
        //here we are decrypting the password which we encrypt during the register time
        //and matching with the entered password by the user 
        const hashedPassword = CryptoJS.AES.decrypt(user.password , process.env.PASS_SEC); // this password is hashed to we have to convert this into the string to compare
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        Originalpassword !== req.body.password && res.status(401).json("Wrong credentials")


        //providing jsonwebtoken to user if user is authenticated 
        const accessToken = jwt.sign({
            id : user._id ,
            isAdmin : user.isAdmin,
        } , process.env.JWT_SEC ,
    {expiresIn:"30d"})

        const {password , ...others} = user._doc;

        //if every thing is ok then 
        res.status(200).json({...others,accessToken});

    }catch(e){
        console.log(e)
        res.status(500).json(e);
    }
})

router.get('/logout' , (req,res)=>{
    localStorage.removeItem('currentUser');
    
})


module.exports = router;