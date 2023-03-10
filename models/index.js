// import models
// STARTER CODE
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// MY WORK
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
// MY WORK
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// Products belongToMany Tags (through ProductTag)
// MY WORK
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag,
})

// Tags belongToMany Products (through ProductTag)
// MY WORK
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag,
})

// STARTER CODE
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
