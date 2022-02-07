const express = require('express');
const router = express.Router();
const resourcesCtrl = require('../../controllers/api/resources');

// GET /api/items
router.get('/', resourcesCtrl.getResource);
// GET /api/items/:id
// router.get('/:id', itemsCtrl.show);

module.exports = router;