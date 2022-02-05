require('dotenv').config();
require('./config/database');


const Resource = require('./models/resource');

(async function() {

  await Resource.deleteMany({});
  const resources = await Resource.create([
      {name: 'Skill Crush Startup Resume', tag: 'Resume', url: 'https://skillcrush.com/blog/startup-resume/', description: `So you want to work for a startup (a company in the first stages of operations) or a small business? Have you ever wondered what a startup founder wants in the people who work for her? What goes on your resume is the deciding factor when applying for any job, but with startups it can be even more important. Ultimately, what the CEO wants is what’s going to result in a successful job search. Understanding her perspective is critical to acing your startup resume and breaking into this world.`},
      {name: '', tag: '', url: '', description: ``},
      
  ]);
  console.log(resources)

  process.exit();

})();