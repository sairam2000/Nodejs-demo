const express = require('express')
const mongoose = require('mongoose')
const Category = require('../models/Category')

const router = express.Router()

// create category

router.post('/', (req, res)=>{
    if(!req.body.categoryName){
        res.status(422).json({error: 'need to specify category name'})
    }
    else{
        const category = Category(req.body)
        category.save().then(savedCategory => {
           res.status(200).json(savedCategory)
        })
       .catch(error =>{
           res.status(500).json({error: "Internal Server Error"})  
       })   
    }
})


// read all categories

router.get('/', (req, res)=>{
    Category.find()
    .then(categories => {
        res.status(200).json({categories})
    }).catch(err => {
        res.status(500).json({error: "Internal Server Error"})
    })
})

// remove category


router.delete('/:id', (req, res)=>{
    Category.findByIdAndRemove( req.params.id, {useFindAndModify: false})
    .then(()=>{
        res.status(200).json({message: "successfully deleted the category"})
    }).catch((err) => {
        res.status(422).json({error:err})
    })
})

module.exports = router

