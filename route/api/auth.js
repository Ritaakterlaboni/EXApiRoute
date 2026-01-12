const express = require('express')
const router = express.Router()


router.get("/signup", (req, res) =>{
    res.send({
        name:"rita",
        email:"rita@gmail.com",
        password:"123546987"
    });
});

module.exports = router