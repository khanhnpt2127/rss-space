const express = require('express')

const { article } = require('../controllers')

const router = express.Router()

router.get('/getArticle', article.getArticle)

module.exports = router



