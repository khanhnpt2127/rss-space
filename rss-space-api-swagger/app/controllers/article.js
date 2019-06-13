const { articleService  } = require('../services')

const { getArticle } = articleService;


const getArticle = async (req, res, next) => {
	// const {user, content} = req.body

	try {
		//await createBlogpost(user, content)
		// other service call (or same service, different function can go here)
		// i.e. - await generateBlogpostPreview()
		res.sendStatus(200)
		next()
	} catch(e) {
		console.log(e.message)
		res.sendStatus(500) && next(error)
	} 
};



module.exports = { getArticle }
