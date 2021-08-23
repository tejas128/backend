const { createlatest, fetchAllLatest, deletelatest, fetchLatest, updatelatest } = require('./controller')

const checkjwt=require("../middlewares/check-jwt")
const checkAccess = require('../middlewares/check-access')
const router=require('express').Router()

const addAccess=['admin']
const updateAccess=['admin']
const deleteAccess=['admin']

router.get("/",fetchAllLatest)
router.get("/:id",fetchLatest)
router.post("/",checkjwt, checkAccess(addAccess), createlatest)
router.delete("/:id",checkjwt,checkAccess(deleteAccess), deletelatest)
router.patch("/:id/update",checkjwt,checkAccess(updateAccess),updatelatest)
module.exports=router