const express = require('express');
const { verifyUser } = require('../middelwares/token');
const { addComment, allCommentOffPost } = require('../controllers/commentController');
const router = express.Router();

router.route('/').post(verifyUser,addComment).get(verifyUser,allCommentOffPost)

module.exports = router;