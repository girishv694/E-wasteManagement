const express = require('express')
const upload = require('../middleware/file-upload')
const router = express.Router()
const Product = require('../models/product.model')

router.post('/img', upload.any('productImages'), async function (req, res) {
  const filePaths = req.files.map((file) => file.path)
  const product = await Product.create({
    image_urls: filePaths,
  })
  return res.send(product)
})

module.exports = router
