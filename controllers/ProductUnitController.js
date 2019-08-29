const ProductUnit = require('../models').ProductUnit;

exports.postAddNewUnit = (req, res) =>{
    const unitName = req.body.unitName;
    ProductUnit.create({
        unitName: unitName
    }).then(result =>{
        res.send(result)
    }).catch(err =>{
        console.log(err)
    })
}
exports.getProductUnit = (req, res) =>{
    
    ProductUnit.findAll({attributes: ['id','unitName']}).then(products =>{
        res.json(products);
    }).catch(err =>{
        console.log(err);
    });
}

exports.destroyProductUnit = (req, res) =>{
    let unitId = req.body.id;
    ProductUnit.findByPk(unitId).then(units =>{
        return units.destroy();
    }).then(result =>{
        res.send(result);
    }).catch(err =>{
        console.log(err);
    });
}