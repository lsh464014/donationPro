const express = require('express')
const allFun = require("../router-handle/all-fun");
const router = express.Router();

router.get("/AllUser",allFun.getAllUser)
router.get("/AllCategory",allFun.getAllCategory)
router.get("/UserByOther",allFun.getUserByOther)
router.get("/UserById",allFun.getUserById)




module.exports = router;