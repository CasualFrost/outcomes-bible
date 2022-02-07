const Resource = require('../../models/item');

module.exports = {
//   index,
//   show,
  getResource
};

// async function index(req, res) {
//   const resources = await Resource.find({}).sort('tag')
//   // re-sort based upon the sortOrder of the categories
//   resources.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//   res.json(resources);
// }

// async function show(req, res) {
//   const resource = await Resource.findById(req.params.id);
//   res.json(resource);
// }

async function getResource(req, res) {
    const resource = await Resource.find({})
    console.log(resource)
    res.json(resource);
}