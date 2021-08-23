const router = require('express').Router();

const checkJwt = require('../../middlewares/check-jwt');
const controller=require("./controller")


router.post("/",checkJwt, controller.createlearn) //To create learn card
router.get("/",controller.getlearns) //To fetch all leran cards


module.exports=router