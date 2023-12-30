const express = require('express');
const { uploadPost, getPost, viewPost, deletePost, editPost } = require('../controllers/PostController');
const upload = require('../middelwares/imageUpload');
const { verifyUser } = require('../middelwares/token');
const router = express.Router();


/**
 * @openapi
 * '/memories/post/':
 *  post:
 *    tags:
 *      - Post
 *    summary: 
 *      - Create a new Post
 *    requestBody: 
 *      description: Post data
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: "#/components/schemas/CreatePost"
 *    responses:
 *      200:  
 *       description: User Register Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 *  put:
 *    tags:
 *      - Post
 *    summary: POST Edited
 *    requestBody:
 *      description: Edit Post 
 *      content:
 *          application/json:
 *           schema:
 *              $ref: "#/components/schemas/EditPost"
 *    responses:
 *      200: 
 *       description: Post Edit Successfully 
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 *  get:
 *    tags:
 *      - Post
 *    summary: All POST of Login User
 *    responses:
 *      200: 
 *       description: Post Geted Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */


/**
 * @openapi
 * '/memories/post/{id}':
 *  delete:
 *    parameters:
 *     - name: id
 *       in: query
 *       required: true
 *       schema:
 *          type: String
 *    tags:
 *      - Post
 *    summary: POST Deleted
 *    responses:
 *      200: 
 *       description: Post Deleted Successfully 
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */


router.route('/').post(verifyUser,upload.single('photo'),uploadPost).get(verifyUser,getPost).put(verifyUser,editPost).delete(verifyUser, deletePost)



/**
 * @openapi
 * '/memories/post/all':
 *  get:
 *    tags:
 *      - Post 
 *    summary: 
 *      - All Post of all Users
 *    responses:
 *      200: 
 *       description: Post Fetched Successfully 
 *      400: 
 *       description: No Post added till 
 *      404: 
 *       description: No Post added till  
 */


router.route('/all').get(viewPost)


module.exports = router;
