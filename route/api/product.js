const express = require('express')
const router = express.Router()


router.get("/products", (req, res) =>{
    res.send({
        title:"this is digital & uniqe",
        price:"5$",
        brand:"know"
    });
});

module.exports = router