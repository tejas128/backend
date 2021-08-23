const checkJwt = require('../middlewares/check-jwt')

const router=require('express').Router()

router.get("/",checkJwt,(req,res)=>{
    console.log("true")
    return res.status(500).status({
        success:true,
        message:"valid token"
    })
})
module.exports=router