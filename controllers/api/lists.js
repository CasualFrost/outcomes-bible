const List = require('../../models/list');

module.exports = {
  getList,
  addToList
};

function getList(req, res) {
    List.find({user: req.user._id}).populate('resources').exec(function(err, lists) {
        res.json(lists);
    })
}

async function addToList(req, res) {
  const list = await List.findById(req.params.listId)
  list.resources.push(req.params.resourceId)
  list.save()
  res.json(list);
}