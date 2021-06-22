const express = require('express');
const router = express.Router();
require('dotenv/config');
const {userRoleAuth} = require('./userRoleAuth')
const Category = require('../models/categories_model')
const {verifyToken} = require('./verifyToken')

//Add new category (POST)
router.post('/add', async (req, res) => {

    //if(!req.body.subCategories.isArray) return res.status(400).send('Podkategoria nie jest Arrayem');
    console.log(req.body.subCategories)
    
    const category = new Category({
        mainCategory: req.body.mainCategory,
        subCategories: req.body.subCategories
    });

try {
const savedCategory = await category.save();
res.json(savedCategory);
} catch(err) {
    res.status(400).send(err);
}

});

//Get all categories (GET)
router.get('/', verifyToken,userRoleAuth(process.env.ROLE_ADMIN),async(req,res)=>{  
    await Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json("Error: " + err));
})

//Change category ()
// IN FUTURE CHANGE CATEGORY --> maybe in case of a mistake (ez)

module.exports = router;