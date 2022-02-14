const Resource = require('../../models/resource');

module.exports = {
//   index,
  show,
  getResource
};

async function show(req, res) {
  const resource = await Resource.findById(req.params.id);
  res.json(resource);
}

async function getResource(req, res) {
    const resource = await Resource.find({})
    res.json(resource);
}