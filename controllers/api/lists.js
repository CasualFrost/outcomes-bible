const List = require('../../models/list');

module.exports = {
  getList
};

async function getList(req, res) {
    const list = await List.find({})
    res.json(list);
}