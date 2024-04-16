const User=require('../models/usermode.js')
const bcryptjs=require('bcryptjs');
const signup = async(req, res,next) => {
    const {username,password,email} = req.body;

if(!username||!password||!email||username===' '||password===' '||email===' ') {
    res.status(400).json({
        message: "Please fill in all fields"
    });
    return;
}

const hashpassword=bcryptjs.hashSync(password,10);




    const newuser=new User({username,password:hashpassword,email});
    await newuser.save().then(() => {
        res.status(201).json({
            message: "User Created Successfully"
        });
    }).catch(err => {
        next(err);
    });

};

module.exports = {
    signup: signup // Assigning the signup function to the signup property
};
 