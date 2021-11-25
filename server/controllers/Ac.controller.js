const express = require('express')
const router = express.Router();
const Ac = require('../models/Ac.model')
const loginrequired = require('./middlewares/verifyToken')
const mongoose = require('mongoose')


router.post('/category/create',loginrequired,async (req,res)=>{
    const ac = await Ac.create(req.body)
    res.status(200).send({ac});


})

module.exports = router;