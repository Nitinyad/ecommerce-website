const cookieSession = require('cookie-session')
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const passport = require('passport');
const cors = require('cors');

dotenv.config();
const stripeRoute = require('./routes/stripe')

//how to connect mongoose server
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Dbconnection successfull!")).catch((err)=>{console.log(err)});


app.use(express.json())
app.use(
    cookieSession({name:"session" , keys:["Nitin"] , maxAge : 24*60*60*100})
);



app.use(passport.initialize())
app.use(passport.session())

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/api/auth' , authRoute)
app.use('/api/users' , userRoute)
app.use('/api/products' , productRoute)
app.use('/api/carts' , cartRoute);
app.use('/api/orders' , orderRoute);
app.use('/api/checkout' , stripeRoute)


//listen app at port 
app.listen(process.env.PORT || 5000 , () =>{
    console.log("Server is running at port 5000")
})
