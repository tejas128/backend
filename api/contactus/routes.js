const router=require("express").Router()
const controller=require("./controller")

router.post("/",controller.contactus)

module.exports=router