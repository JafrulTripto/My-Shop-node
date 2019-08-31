const Suppliers = require('../models').Suppliers;
const ProductCategory = require('../models').Product_Category;

exports.postAddSupplier = (req, res, next) => {
    //console.log(req.body);
    const supplier_name = req.body.sup_Name;
    const email = req.body.email;
    const contact_person = req.body.contact_person;
    const contact_person_phone = req.body.contact_person_phone;
    //const category = ProductCategory.findByPk(req.body.category_id)
    //console.log(category)
    ProductCategory.findByPk(req.body.category_id).then(category => {
        category.createSupplier({
            sup_Name: supplier_name,
            email: email,
            contact_person: contact_person,
            contact_person_phone: contact_person_phone
        }).then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err);
        });
    })

}

exports.getSuppliers = (req, res) => {
    Suppliers.findAll({
        include: [{ model: ProductCategory, attributes :['categoryName'],through: { attributes: [] }}]
    }).then(supplier =>{
        res.send(supplier);
    }).catch();
}