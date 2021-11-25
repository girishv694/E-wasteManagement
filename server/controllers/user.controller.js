// const express = require('express')
// const User = require('../models/user.model')
// const router = express.Router();
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const isEmpty = require("is-empty");
// const Validator = require("validator");

// const validateRegister = require('../validation/register')
// const validateLogin = require('../validation/login')
// const verifyToken = require('../controllers/middlewares/verifyToken')
// const express = require('express')
// const User = require('../models/user.model')
// const router = express.Router()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const isEmpty = require('is-empty')
// const Validator = require('validator')
// const axios = require('axios').default
// const validateRegister = require('../validation/register')
// const validateLogin = require('../validation/login')
// const verifyToken = require('../controllers/middlewares/verifyToken')

// router.get('/getNum/:p', async (req, res) => {
//   const arb = await User.findById(req.params.p)
//   return res.send(arb.phone)
// })


// router.post("/register", (req, res) => {
    
//     //Form validation
    
//       if(Validator.isEmpty(req.body.username)) {
//         res.status(400).json({message: "Name field is required"});
//     }


//     if(Validator.isEmpty(req.body.email)){
//         res.status(400).json({message: "Email field is required"});
//     }else if(!Validator.isEmail(req.body.email)){
//         res.status(400).json({message: "Invalid Email"});
//     }
// router.post('/register', (req, res) => {
//   //Form validation

//   if (Validator.isEmpty(req.body.username)) {
//     res.status(400).json({ message: 'Name field is required' })
//   }

//   if (Validator.isEmpty(req.body.email)) {
//     res.status(400).json({ message: 'Email field is required' })
//   } else if (!Validator.isEmail(req.body.email)) {
//     res.status(400).json({ message: 'Invalid Email' })
//   }

//   //Password checks
//   if (Validator.isEmpty(req.body.password)) {
//     res.status(400).json({ message: 'Password field is required' })
//   }

//   if (!Validator.isLength(req.body.password, { min: 6, max: 30 })) {
//     res.status(400).json({ message: 'Password must be at least 6 characters' })
//   }

//   User.findOne({ email: req.body.email }).then((user) => {
//     if (user) {
//       return res.status(400).json({ message: 'Email already exists' })
//     } else {
//       const newUser = new User({
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email,
//         phone: req.body.phone,
//       })

      // Hash password before storing in database
//       const rounds = 10
//       bcrypt.genSalt(rounds, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err
//           newUser.password = hash
//           newUser
//             .save()
//             .then((user) => res.json(user))
//             .catch((err) => console.log(err))
//         })
//       })
//     }
//   })
// })

// router.post('/signin', (req, res) => {
  //Form Valdiation

// //Password checks
// if(Validator.isEmpty(req.body.password)){
//     res.status(400).json({message: "Password field is required"});
// }

// if(!Validator.isLength(req.body.password,{min:6,max:30})){
//     res.status(400).json({message:"Password must be at least 6 characters"}) ;
// }


//     User.findOne({email:req.body.email}).then(user=>{

//         if(user){
//             return res.status(400).json({message:"Email already exists"});
//         } else{
//             const newUser = new User({
//                 username:req.body.username,
//                 password:req.body.password,
//                 email:req.body.email
//             });

//             // Hash password before storing in database
//             const rounds  = 10;
//             bcrypt.genSalt(rounds, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                 if (err) throw err;
//                 newUser.password = hash;
//                 newUser
//                     .save()
//                     .then(user => res.json(user))
//                     .catch(err => console.log(err));
//                 });
//             });
//         }

//     });

// });




//   if (Validator.isEmpty(req.body.email)) {
//     return res.status(400).json({ message: 'Email field is required' })
//   } else if (!Validator.isEmail(req.body.email)) {
//     return res.status(400).json({ message: 'Email is invalid' })
//   }

//   //Password checks
//   if (Validator.isEmpty(req.body.password)) {
//     return res.status(400).json({ message: 'Password field is required' })
//   }



// router.post("/signin",(req,res) => {

//     //Form Valdiation
   
//     if(Validator.isEmpty(req.body.email)){
//         return res.status(400).json({message:"Email field is required"});
//     } else if(!Validator.isEmail(req.body.email)){
//         return res.status(400).json({message:"Email is invalid"});
//     }



//     //Password checks
//     if(Validator.isEmpty(req.body.password)){
//         return res.status(400).json({message : "Password field is required"})
//     }




//     const email = req.body.email;
//     const password = req.body.password;
   
//     //Find user by Email
//     User.findOne({email}).then(user=>{
//         if(!user){
//             return res.status(404).json({ message: "Email not registered" });
//         }

//     // Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//         if (isMatch) {
//             // Create JWT Payload

//             const token  = jwt.sign({
//                 username : user.username,
//                 email : user.email,
               
//                },
//                'secret123',{
//                    expiresIn:'1h'
//                })
//                const {_id,username,email} = user;

//             //    res.cookie("jwttoken",token,{
//             //        expires : new Date(Date.now() +  258920000),
//             //        httpOnly:true
//             //    }).send(token);

       
//                return res.json({status:'ok',user :{_id,username,email} ,token}).header('auth-token',token)
                  
            
               
//                console.log(token)
            

            
//         }
//         else{
//             return res.json({message:'password incorrect', user:false})
//         }
//       });
//     });
// });



// router.post('/profile',verifyToken,(req,res)=>{
//     res.status(200).json({user :"profile"})
// })

// module.exports = router;

////////////////////////////////////////////////////////////////////////////////////////////////////////


const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middlewares/authenticate')

router.post("/register",async (req,res)=>{

  const {username , email , password,phone} = req.body;

  if(!username || !email || !password || !phone){
    return res.status(400).json({error:"please fill all the details"})
  }

  try{
    const exist = await User.findOne({email:email});
    if(exist){
      return res.status(400).json({error : "Email already exists"})
    }
    else{
      const user = new User ({ username,email,password,phone});
       await user.save()

      res.status(201).json({message:"user registered successfully"})
      
    }

  }
  catch(err){
    return res.status(400).json({error : "Failed"})

  }

});



router.post('/login',async (req,res)=>{
 const {email ,password} = req.body;

 try{

  if(!email || !password){
    return res.status(400).json({error : "Please fill all fields"})
  }

  const userLogin = await User.findOne({email:email});
  if(userLogin){
    const isMatch = await bcrypt.compare(password,userLogin.password)

    const token = await userLogin.generateToken()

    res.cookie("girishv",token, {
      expires : new  Date(Date.now() + 25892000000),
      httpOnly:true
    });

    if(!isMatch){
      return res.status(400).json({error : "Invalid credentials"})
    }
    else{
      return res.json({message : "user signed in successfully",user : userLogin.username})
    }
    
  }
  else{
    return res.json({error : "Email does not exists"})
  }
}


 catch(err){
   console.log(err)
 }
 
})


router.get('/about',authenticate,(req,res)=>{
  res.send(req.rootUser)
})

module.exports = router;