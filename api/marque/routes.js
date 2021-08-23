const { updatemarque, getmarque } = require("./controller")

const router=require("express").Router()

router.get("/",getmarque)

router.patch("/:id/update",updatemarque)

module.exports=router