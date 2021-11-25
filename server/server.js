
 const productController = require('./controllers/product.controller')
const mongoose = require('mongoose')
const express = require('express')
const connect = require('./config/db')
const app = express();
const user = require('./controllers/user.controller')
const cors = require('cors')
const category = require('./controllers/Category.controller')



app.use(express.json());
app.use(cors())

app.use("/user",user)
app.use('/products', productController)




app.listen(3002, async() =>{
    await connect();
    console.log("DB connected and running on port 3002");
})

