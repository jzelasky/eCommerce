//STARTER CODE 
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// NO ERROR BUT DOES NOT DISPLAY ASSOCIATED PRODUCT DATA
// COPIED FROM PRODUCT-ROUTES
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try { 
    const tagData = await
    Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// NO ERROR BUT DOES NOT DISPLAY ASSOCIATED PRODUCT DATA
// COPIED FROM PRODUCT-ROUTES
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await
    Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!tagData){
      res.status(404).json({ message: 'No tag found with that id!'});
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// COPIED FROM PRODUCT-ROUTES
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            tag_id: tag.id,
            product_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(tag);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// COPIED FROM PRODUCT-ROUTES
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      return ProductTag.findAll({
        where: { tag_id: req.params.id}
      });
    })
    .then((productTags) => {
      const productTagIds = productTags.map(({product_id}) => product_id);
      const newProductTags = req.body.tagIds
        .filter((product_id) => !productTagIds.includes(product_id))
        .map((product_id) => {
          return {
            tag_id: req.params.id,
            product_id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ product_id }) => !req.body.tagIds.includes(product_id))
        .map(({ id }) => id);
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove}}),
        ProductTag.bulkCreate(newProductTags),
      ])
    })
    .then((updatedProudctTags) => res.json (updatedProudctTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

// COPIED FROM PRODUCT ROUTES
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json ({ message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//STARTER CODE
module.exports = router;
