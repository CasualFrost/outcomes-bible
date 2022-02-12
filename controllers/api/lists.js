const List = require('../../models/list');

module.exports = {
  getList,
  addToList,
  create
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

async function create(req, res) {
  const list = await List.create({name: req.body.formData, user: req.user._id});
  res.json(list);
}