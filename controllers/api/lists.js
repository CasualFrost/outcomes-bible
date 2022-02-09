const List = require('../../models/list');

module.exports = {
  getList
};

function getList(req, res) {
    List.find({}).populate('resources').exec(function(err, lists) {
        res.json(lists);
    })
}