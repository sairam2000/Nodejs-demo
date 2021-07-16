const express = require('express')
const mongoose = require('mongoose')
const Product = require('../models/Product')

const router = express.Router()


// create product

router.post('/create', (req, res)=>{
    if(!req.body.productName || !req.body.unitPrice){
        res.status(422).json({error: 'need to specify product name  and unit price '})    //checking for required fields present in body or not
    }
    else{
        const product = Product(req.body)
         product.save().then(savedProduct => {
            res.status(200).json(savedProduct)
         })
        .catch(error =>{
            res.status(500).json({error: "Internal Server Error"})  
        })   
    }
})

//  reading singleproduct

router.get('/read/:id', (req, res)=>{
    Product.findById(req.params.id)
    .populate('categoryId', 'categoryName')
    .then(product=>{
        if(!product){
            res.status(422).json({message: "Product not found with that id"})
        }
        res.status(200).json({product})
    }).catch(err => {
        res.status(500).json({error: "Internal Server Error or Invalid Product Id"})
    })
})


// reading all posts

router.get('/readAll', (req, res)=>{
    Product.find().populate('categoryId','categoryName')
    .then(products => {
        res.status(200).json({products})
    }).catch(err => {
        res.status(500).json({error: "Internal Server Error"})
    })
})


// updating the product details

router.put('/update/:id', (req, res)=>{
    Product.findByIdAndUpdate(
        req.params.id,
        {$set: req.body}, 
        {new: true, useFindAndModify: false})
        .populate('categoryId','categoryName')
        .exec((err, updatedProduct)=>{
        if(err){
            res.status(422).json({error:err})
        }
        else{
            res.status(200).json(updatedProduct)
        }
    })
})


// delete product

router.delete('/delete  /:id', (req, res)=>{
    Product.findByIdAndRemove( req.params.id, {useFindAndModify: false})
    .then(()=>{
        res.status(200).json({message: "successfully deleted the product"})
    }).catch((err) => {
        res.status(422).json({error:err})
    })
})

module.exports = router