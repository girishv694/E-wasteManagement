const express = require('express')
const user = require('../models/user.model')

const jwt = require('jsonwebtoken')

const Authenticate = async (req,res,next) =>{

    try{
          const token = req.cookies.girishv;
          const verifyToken = jwt.verify(token,'secret123');

          const rootUser = await user.findOne({_id:verifyToken._id, "tokens.token":token});
          if(!rootUser){
              throw new Error('user not found');
              req.token = token;
              req.rootUser = rootUser;
              req.userID = rootUser._id;

              next();
          }
    }
    catch(err){
        res.status(400).send('un authorized access: No token provided');
        console.log(err);
    }

   

}

module.exports = Authenticate;