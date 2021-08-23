//const { upload } = require("../middlewares/upload")
const checkAccess = require("../middlewares/check-access")
const checkJwt = require("../middlewares/check-jwt")
const { createipo, getallipo, getipo, updateipo, deleteipo } = require("./controller")
const createAccess=["admin"]
const updateAccess=["admin"]
const deleteAccess=["admin"]
const  router= require("express").Router()
//router.post("/",upload.single('image'),createipo)
router.post("/",checkJwt,checkAccess(createAccess), createipo)
router.patch("/:id/update",checkJwt,checkAccess(updateAccess), updateipo)
router.delete("/:id",checkJwt,checkAccess(deleteAccess),deleteipo)
router.get("/",getallipo)
router.get("/:id",getipo)

module.exports=router