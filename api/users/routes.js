const router = require('express').Router();
const controller=require("./controller")
router.post("/register",controller.createuser)
router.post("/login", controller.loginuser)
 

module.exports=router