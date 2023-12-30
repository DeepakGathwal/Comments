const express = require('express');
const { verifyUser } = require('../middelwares/token');
const { addComment, allCommentOffPost } = require('../controllers/commentController');
const router = express.Router();


/**
 * @openapi
 * '/memories/comment/{postId}':
 *  get:
 *    tags: 
 *      - Comments
 *    parameters:
 *     - name: postId
 *       in: query
 *       required: true
 *       schema:
 *          type: String
 *    summary: 
 *      - get all Comments of a post
 *    responses:
 *      200:  
 *       description: User Details fetched Successfully
 *      400: 
 *       description: Comment not found 
 *      404: 
 *       description: No Comment added till  
 */

/**
 * @openapi
 * '/memories/comment/{commentId}':
 *  post:
 *    tags: 
 *      - Comments
 *    parameters:
 *     - name: commentId
 *       in: query
 *       required: true
 *       schema:
 *          type: String
 *    requestBody:
 *      description: Edit Post 
 *      content:
 *          application/json:
 *           schema:
 *              $ref: "#/components/schemas/AddComment"
 *    summary: 
 *      - Add a comment on a particuler post
 *    responses:
 *      200:  
 *       description: Comment Added Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: User Not found  
 */


router.route('/').post(verifyUser,addComment).get(verifyUser,allCommentOffPost)

module.exports = router;