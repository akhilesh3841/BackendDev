const exrpress=require('express')

const {signup} = require('../controllers/authcontroller.js');

const router=exrpress.Router();

router.post("/signup",signup);

module.exports=router;