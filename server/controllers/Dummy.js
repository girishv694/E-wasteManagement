router.post('/signin',async (req,res)=>{
    const user = await User.findOne({
        email : req.body.email,
        password : req.body.password,
    })

    if(user){
        const token  = jwt.sign({
         username : user.username,
         email : user.email,
        },
        'secret123')

        return res.json({status:'ok',user : token})
        console.log(token)
    }else{
        return res.json({status:'error', user:false})
    }

});