const router = require('express').Router();



const checkJwt = require('../../middlewares/check-jwt');
const controller=require("./controller")

//router.post("/",checkJwt, upload.single('storyImage'),controller.createpost) //To create storycard
router.get("/",controller.getposts) // To fetch All post


module.exports=router