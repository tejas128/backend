const { createnewsletter, unsuscribe } = require('./controller')

const router=require('express').Router()


router.post("/",createnewsletter)
router.post("/unsubscribe",unsuscribe)
module.exports=router