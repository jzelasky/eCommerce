// import models
// STARTER CODE
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// MY WORK
Product.belongsTo(Category, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

// Categories have many Products
// MY WORK
Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
// MY WORK
Product.belongsToMany(Tag, {
  through: 'ProductTag',
})

// Tags belongToMany Products (through ProductTag)
// MY WORK
Tag.belongsToMany(Product, {
  through: 'ProductTag',
})

// STARTER CODE
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
