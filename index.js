const express=require('express');
const app= express();
const mongoose=require('mongoose');
const userRoutes = require('./routes/userroute.js');
const authRoutes = require('./routes/authroutes.js');

app.use(express.json());



const dotenv=require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO).then(function(){
    console.log("Connected to MongoDB");
}).catch(()=>{
    console.log("Could not connect to MongoDB");
})



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);




//creat middleware

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode||500;
    const message = err.message||'internal error';
    return res.status(statuscode).json({
        sucess:false,
        message,
        statuscode,
    });

});