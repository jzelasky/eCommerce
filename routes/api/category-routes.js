// STARTER CODE
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// 500 ERROR
// COPIED FROM PRODUCT-ROUTES
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try { 
    const categoryData = await
    Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 500 ERROR
// COPIED FROM PRODUCT-ROUTES
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await
    Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!categoryData){
      res.status(404).json({ message: 'No category found with that id!'});
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// COPIED FROM PRODUCT-ROUTES
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((category_id) => {
          return {
            category_id: category.id,
            product_id, // help
          };
        });
        return ProductTag.bulkCreate // help(productTagIdArr);
      }
      res.status(200).json(category);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// COPIED FROM PRODUCT-ROUTES
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// COPIED FROM PRODUCT-ROUTES
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

// STARTER CODE 
module.exports = router;
