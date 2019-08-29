const ProductCategory = require('../models').Product_Category;

    exports.postAddCategory = (req, res) =>{
        const category = req.body.categoryName;
        ProductCategory.create({
            categoryName: category
        }).then(result =>{
            res.send(result)
        }).catch(err =>{
            console.log(err)
        })
    }

    exports.getProductCategory = (req, res) =>{
    
        ProductCategory.findAll({attributes: ['id','categoryName']}).then(products =>{
            res.json(products);
        }).catch(err =>{
            console.log(err);
        });
    }

    exports.destroyProductCategory = (req, res) =>{
        let categoryId = req.body.id;
        ProductCategory.findByPk(categoryId).then(units =>{
            return units.destroy();
        }).then(result =>{
            res.send(result);
        }).catch(err =>{
            console.log(err);
        });
    }