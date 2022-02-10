require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Resource = require('./models/resource');
const List = require('./models/list');

(async function() {

  await Resource.deleteMany({});
  const resources = await Resource.create([
      {name: 'Skill Crush Startup Resume', tag: 'Resume + Cover Letter', url: 'https://skillcrush.com/blog/startup-resume/', description: `So you want to work for a startup (a company in the first stages of operations) or a small business?

      Have you ever wondered what a startup founder wants in the people who work for her? What goes on your resume is the deciding factor when applying for any job, but with startups it can be even more important.

      Ultimately, what the CEO wants is what’s going to result in a successful job search. Understanding her perspective is critical to acing your startup resume and breaking into this world.`},
      {name: 'Themuse 3 rules for addressing your cover letter', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/the-3-rules-of-addressing-your-cover-letter', description: `You’ve found the perfect job and finally sat down to write that cover letter (good for you!), but immediately you’ve run into a roadblock. How do you even start the darn thing? Should you use Mr. or Ms.? Do you include a first name? And what if you’ve searched high and low, but can’t find the hiring manager’s name?

      Don’t fret! Follow these rules for cover letter salutation salvation.`},
      {name: 'Themuse perfecting your resume', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/an-editors-guide-to-perfecting-your-resume', description: `You know that you should edit your resume before you send it off in the world, making sure it’s error-free.

      But to make sure that resume is in the best possible shape? You should really take the editing process a few steps further.
      
      Here’s the thing: Editing is more than just giving something a once-over to eliminate egregious typos and grammar mistakes. It’s really about looking at something with a critical eye, then making changes to ensure it’s the best it can possibly be.
      
      And that’s what you want for your resume, right? From someone who edits all day, every day for a living, here’s a five-step editing plan that will take your resume from good to full-blown awesome (and—of course—eliminate the typos, too).`},
      {name: 'Uxbeginner guide to ux resumes and free templates', tag: 'Resume + Cover Letter', url: 'https://www.uxbeginner.com/complete-guide-to-ux-resumes-and-a-free-template/', description: `Step by step guide on how to craft a UX resume for getting a UX job.

      The resume has been around for some 500+ years now, thanks to Leonardo da Vinci.
      
      Today there are more subtleties and challenges around the resume than ever. We’re talking file formats, resume types and the relevance of applicant tracking systems (ATS)…just to name a few.
      
      For the UX Beginner, there’s an added expectation that resumes not only get the job done, but provide a good experience while communicating an applicant’s background. This is a complete guide on how to do that.`},
      {name: 'Themuse', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/the-difference-between-a-cover-letter-and-the-email-you-send-with-your-application', description: `When it comes to making a job change, getting it right truly matters. You need to get the keywords right, the messaging right, the formatting right. You’ve got to find the right people to endear yourself to, and the right words for your cover letter and follow-up correspondence.

      And, for the love of it all, you’ve got to nail the approach.
      
      But, my oh my, there are so many considerations—so many things we all second guess ourselves on when applying for a job.
      
      Should you make the cover letter the body of the email, or attach it separately? (Or both?) Do you address the person by first name, or go with Mr. / Ms. So-and-So? (And, does same rule apply for both?) How casual or formal do you need to be? Is there a right or wrong format for cover letters and emails? Does the cover letter need to be a page or less? How long should the intro email be?
      
      Deep breaths, everyone. Deep breaths. Let’s break this cover letter stuff down into manageable chunks. Here’s what you need to know:`},
      {name: 'Will stanton a great data science resume', tag: 'Resume + Cover Letter', url: 'https://will-stanton.com/creating-a-great-data-science-resume/', description: `“I haven’t heard back from any companies”
      I hear a familiar story from a lot of aspiring data scientists: “I have sent out my resume to 25 companies, and I haven’t heard back from any of them! I have pretty good skills, and I think I have a pretty good resume. I don’t know what’s going on!”
      
      Your resume probably sucks
      My immediate conclusion after hearing your story: your resume probably sucks. If you are not getting any responses from any companies, and your skills are a reasonable match for the job description, then it almost certainly means that you are getting sabotaged by a bad resume.`},
      {name: 'Themuse good or bad cover letter within 3 minutes', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/ive-read-over-300-cover-letters-and-this-is-how-i-decide-if-its-good-or-bad-within-3-minutes?utm_medium=email&utm_campaign=botw_10022016&utm_source=blueshift&utm_content=botw_sunday&bsft_eid=989f3f70-6d28-4c5b-9c77-226be49c6d96&bsft_clkid=b9d1dd79-3c34-4507-980b-f3e70aef7c5b&bsft_uid=6a7435ca-a930-4f53-a4b0-3131b83243a7&bsft_mid=98515e7d-7a63-4d5e-aed7-5c26805ec564', description: `I’ve read a lot of cover letters throughout my career. When I was a fellowship program manager, I reviewed them in consideration for more than 60 open positions each year. So I saw it all—the good, the bad, and the standout cover letter examples that I can still remember.

      As a result, I’ve become the go-to friend when people need feedback on their job applications. Based on my own experience putting people in the “yes” (and “no”) pile, I’m able to give these cover letters a quick scan and immediately identify what’ll turn a hiring manager off.
      
      While I can’t give you insight into every person’s head who’ll be reading your materials, I can share with you the feedback that I give my own loved ones.`},
      {name: 'Themuse tweak your resume to be the perfect fit', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/heres-how-to-tweak-your-resume-to-prove-youre-the-perfect-fit?utm_source=Sailthru&utm_medium=email&utm_term=Daily%20Email%20List&utm_campaign=Here%27s%20How%20to%20Tweak%20Your%20Resume%20to%20Prove%20You%27re%20the%20Perfect%20Fit', description: `You know you’re supposed to customize your resume for each and every job application. But sometimes, it’s not so clear how you can give the employers what they’re looking for—at least, not without being in-your-face obvious.

      For example, suppose the job description asks for someone who’s “highly motivated” and a “self-starter.” How do you say, “Hey, that’s me!” without saying, “I’m highly motivated and a self-starter?”
      
      Here’s the short answer: You use your applicable skills and relevant experience to prove it.
      
      For the full explanation of how to actually do this, read on.`},
      {name: 'Niniane Write a killer resume for Software engineers', tag: 'Resume + Cover Letter', url: 'http://niniane.org/resume_howto.html', description: `In the past few years working as a software engineer for Google (and previously a dev lead at Microsoft), I've screened hundreds of resumes, to make the decision on whether to proceed with the interview process. Some resumes gave off a great impression, and others didn't.

      Increasingly, friends and relatives ask me for suggestions on improving their resumes, so I've created a a list of the most common pitfalls I've seen, and how to avoid them:`},
      {name: 'Creddle craft your better resume', tag: 'Resume + Cover Letter', url: 'http://creddle.io/', description: `Build a résumé for free , Sign up for Creddle
      
      Be creative and stand out. Stay professional and organized. You can do both.
      
      Creddle résumés are both websites and paper résumés.
      
      Easy in, easy out
      Share it on the web.
      Embed it on your own website.
      Print it out and hand it to a person.
      Print it as a .pdf file.`},
      {name: 'Canva', tag: 'Resume + Cover Letter', url: 'https://www.canva.com/', description: `Start inspired. With thousands of professional templates, images and quality content to choose from, get a headstart on bringing your best ideas and work to life. Templates for absolutely anything.`},
      {name: 'Themuse 1,000,000 resumes a year', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/my-team-reviews-1000000-resumes-a-year-and-these-are-the-people-who-stand-out', description: `Does standing out really help you get hired? And is there such a thing as being too different? The answer is yes—to both.

      As VP of Talent Acquisition at Johnson & Johnson, I’ve seen it all: the good, the bad, and the pink. (No really, we’ve received perfume-scented applications printed on pink paper.) After overseeing a team that screens one million resumes a year, I can tell you how to stand out from the crowd—the right way.
      
      So if you’re thinking of taking a creative approach, keep the following in mind:`},
      {name: 'Themuse 41 best resume templates ever', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/the-41-best-resume-templates-ever', description: `Creating a resume falls somewhere in the shared space between exhausting, necessary, and tricky. It takes careful consideration to select a format that is easy to use, makes sense for the amount of experience you have, and clearly presents all the information you need to include.

      Fortunately, there’s no shortage of resume templates online to help you get started—and many of them are free! Templates do the bulk of the design work for you, so all you have to do is plug in the right information in the right places. Even better, some templates are geared toward specific industries and career stages, making it even easier to understand what the most relevant information to include is and helping you stand out. `},
      {name: 'Huffpost best and worst fonts', tag: 'Resume + Cover Letter', url: 'https://www.huffpost.com/entry/times-new-roman-resume-best-worst-fonts_n_7167390', description: `Times New Roman may be a classic font, but it’s apparently a no-go when it comes to applying for a job.

      Bloomberg recently spoke to a group of typography experts about the best and worst type fonts to use on a résumé. Times New Roman was labeled as respectable, but unadventurous and mundane.
      
      “It’s telegraphing that you didn’t put any thought into the typeface that you selected,” said Brian Hoff, creative director of Brian Hoff Design. Using the font in a résumé is akin to “putting on sweatpants” for an interview, he added.`},
      {name: 'Themuse tips to writing a conversational cover letter', tag: 'Resume + Cover Letter', url: 'https://www.themuse.com/advice/3-quick-tricks-to-make-writing-a-conversational-cover-letter-easy/?utm_campaign=daily_20161116&utm_source=blueshift&utm_content=daily_wednesday_fullarticle&bsft_eid=5d8f1f10-dc6a-45b9-a5c4-a72851b3c1e2&bsft_clkid=4faca338-9691-4737-9325-a22e4cdae1b6&bsft_uid=6a7435ca-a930-4f53-a4b0-3131b83243a7&bsft_mid=daf766d1-a25d-4a40-b371-8a26709106ae', description: `Cover letter writing is challenging. For a lot of us, it’s really hard. It feels unnatural, unnecessary, and uncomfortable.

      Cover letters can also be super confusing. What, even, are you supposed to say in a one? Do reviewers actually read the things? (Yes, we do.) And, an important question: Are you supposed to be all business, or is it OK to use a conversational tone?`},
      {name: 'Hbr how to write a cover letter', tag: 'Resume + Cover Letter', url: 'https://hbr.org/2014/02/how-to-write-a-cover-letter', description: `No one likes job hunting. Scouring through online job listings, spiffing up your résumé, prepping for grueling interviews — none of it is fun. For many, the most challenging part of the process is writing an effective cover letter. There’s so much conflicting advice out there, it’s hard to know where to start. Do you even need one, especially if you’re applying through an online system?`},
      {name: 'Indeed how to write a cover letter plus tips and examples', tag: 'Resume + Cover Letter', url: 'https://www.indeed.com/career-advice/resumes-cover-letters/how-to-write-a-cover-letter', description: `While cover letters are not always required, many hiring managers still rely on them to gauge an applicant’s skills, experience and background in relation to the position. When optional, submitting a cover letter is also a great way to go above and beyond to show the employer you are genuinely interested in the job.

      The key to writing effective cover letters is to succinctly communicate how your professional experience fits the needs of the role and culture of the company. Below, we’ll break down how to write a cover letter that makes a great first impression with employers.`},
      {name: 'Techtarget', tag: 'Job Boards', url: 'https://www.techtarget.com/', description: `
      Search for active demand in your category
      19M+ opt-in tech prospects and growing. Priority Engine™ gives you direct access to the most active buyers in your space.`},
      {name: 'Angel List', tag: 'Job Boards', url: 'https://angel.co/', description: `AngelList is a platform for startups to find talent for their positions. Become one of the talents now.`},
      {name: 'Authentic Jobs', tag: 'Job Boards', url: 'https://authenticjobs.com/', description: `For over twelve years, we've been connecting qualified applicants in search of their dream jobs with the forward-thinking companies who were looking for them. Our clients have included giants in many of today's most coveted and high-growth industries, such as:

      Technology: Apple, Electronic Arts
      Media: The New York Times, NPR
      Social media: Twitter, Facebook
      
      Whether you're in search of that perfect job to advance your career, or that perfect candidate to fill the crucial gap in your organization, Authentic Jobs is here to help you achieve your goals. It's all we've done for over twelve years. In that time, we've matched hundreds of dynamic, high-growth companies to thousands of design, technology, and web professionals all over the world.`},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: 'Job Boards', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
      // {name: '', tag: '', url: '', description: ``},
  ]);

  const user = await User.findOne({})

  const list = await List.create({
    name: 'Resume/Cover Letter', tag: 'Resume + Cover Letter',
    user: user._id
  })
  list.resources.push(resources[0]._id)
  list.resources.push(resources[1]._id)
  list.resources.push(resources[2]._id)
  list.resources.push(resources[3]._id)
  list.resources.push(resources[4]._id)
  list.resources.push(resources[5]._id)
  await list.save()
  process.exit();

})();