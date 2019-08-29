const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const ProductUnitController = require('../controllers/ProductUnitController')
const ProductCategoryController = require('../controllers/ProductCategoryController');

router.post('/addUnit', ProductUnitController.postAddNewUnit);
router.get('/getUnit', ProductUnitController.getProductUnit);
router.post('/deleteUnit', ProductUnitController.destroyProductUnit);
router.post('/addCategory', ProductCategoryController.postAddCategory);
router.get('/getCategory', ProductCategoryController.getProductCategory);
router.post('/deleteCategory', ProductCategoryController.destroyProductCategory);


module.exports = router;