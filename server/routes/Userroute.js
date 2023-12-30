const express= require('express');
const router = express.Router();
const { login, register, getUser, refreshToken, logOut, allUsers, forgetPassword, updateProfile, deleteUser, coupenDiscount, Exchange } = require('../controllers/UserControl');
const upload = require('../middelwares/imageUpload');
const { verifyUser } = require('../middelwares/token');

/**
 * @openapi
 * '/memories/user/refresh':
 *  get:
 *    tags:
 *     - Get User Details
 *    summary: Automatically Login User Before his token Expire
 *    responses:
 *      200:  
 *       description: User Details
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */
router.route('/refresh').get(refreshToken,verifyUser,getUser)


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Login and Logout
 *   name: Forget and All Users
 *   description: Login and Logout
 *   name: Create and Delete User
 *   description: Register and Delete User Api
 */

/**
 * @openapi
 * '/memories/user/login':
 *  post:
 *    tags: 
 *      - Users
 *    summary: 
 *      - find user existence base on given data, if user exists create a cookie of base on the user id token
 *    requestBody: 
 *      description: User data
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: "#/components/schemas/LoginUser"
 *    responses:
 *      200:  
 *       description: User Login Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 *  get:
 *    tags:
 *      - Users
 *    summary: User token will remove ... and user logout
 *    responses:
 *      200:  
 *        description: User Logout Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */


router.route('/login').post(login).get(verifyUser,logOut)

/**
 * @openapi
 * '/memories/user/register':
 *  post:
 *    tags:
 *      - Create and Delete User
 *    summary: 
 *      - Create a new User
 *    requestBody: 
 *      description: User data
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: "#/components/schemas/RegisterUser"
 *    responses:
 *      200:  
 *       description: User Register Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 *  delete:
 *    tags:
 *      - Create and Delete User 
 *    summary: User Account  will Deleted
 *    responses:
 *      200:  
 *       description: User Deleted Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */

router.route('/register').post(upload.single("photo"),register).delete(verifyUser,deleteUser)

/**
 * @openapi
 * '/memories/user/':
 *  get:
 *    tags: 
 *      - User Details
 *    summary: 
 *      - Get all user details
 *    responses:
 *      200:  
 *       description: User Details fetched Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */


router.route('/').get(verifyUser,getUser)

/**
 * @openapi
 * '/memories/user/allUser':
 *  get:
 *    tags: 
 *      - Forget and All Users
 *    summary: 
 *      - Get all user list
 *    responses:
 *      200:  
 *       description: User list fetched Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 *  patch:
 *    tags: 
 *      - Forget and All Users
 *    summary: 
 *      - If user forget his current password he can change his password by email address
 *    requestBody: 
 *      description: User Email and Latest Password
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: "#/components/schemas/ForgetPassword"
 *    responses:
 *      200:  
 *       description: User Password Change Successfully
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */

router.route('/allUser').get(verifyUser,allUsers).patch(forgetPassword)


/**
 * @openapi
 * '/memories/user/updateProfile':
 *  put:
 *    tags: 
 *      - Update Profile
 *    summary: 
 *      - Update self Details By User
 *    requestBody: 
 *      description: User Email and Latest Password
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            $ref: "#/components/schemas/UpdateUser"
 *    responses:
 *      200:  
 *       description: Details Updates
 *      400: 
 *       description: Post not found 
 *      404: 
 *       description: No Post added till  
 */


router.route('/updateProfile').put(verifyUser,updateProfile)


module.exports = router;