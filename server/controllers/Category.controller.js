const express = require('express')
const Category =require('../models/Category');
const slugify = require('slugify')

const router = express.Router();

router.post('/create',(req,res)=>{

    const categoryObj = {
        name : req.body.name,
        slug : slugify(req.body.name)
    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error, category)=>{
        if(error) return res.status(400).json({error})
        if(category){
            return res.json({category})
        }
    })

})

module.exports = router;