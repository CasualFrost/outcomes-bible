const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/api/lists');

router.get('/', listsCtrl.getList);

router.post('/:listId/resources/:resourceId', listsCtrl.addToList);

router.post('/', listsCtrl.create);

module.exports = router;