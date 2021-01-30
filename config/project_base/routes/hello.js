const express = require("express");
const router = express.Router();
//var controllers = require("../controllers/controller");

router.get('/', (req,res)=>{
    res.json({ message: "Hello World"})
});

module.exports = router;