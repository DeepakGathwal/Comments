const mongoose = require('mongoose');


/**
 * @openapi
 * components:
 *  schemas:
 *    CreatePost: 
 *      type: object
 *      required:
 *        - title
 *        - description
 *        - image
 *      properties:
 *        title:
 *         type : String
 *         default : myName
 *        description:
 *         type : String
 *         default : email@gmail.com
 *        image:
 *         type : jpg, png
 *         default : img.
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    EditPost: 
 *      type: object
 *      required:
 *        - id
 *        - title
 *        - description
 *        - image
 *      properties:
 *        id:
 *         type : String
 *         default : _id
 *        title:
 *         type : String
 *         default : myName
 *        description:
 *         type : String
 *         default : email@gmail.com
 */


const Posts = new mongoose.Schema({
    image:{
        type:String,
        default:null
    },
   owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:[true,'This field is Mandetory'],
   },
  
   title:{
    type:String,
    required:[true,'This field is Mandetory'],
   },
   description:{
    type:String,
    required:[true,'This field is Mandetory'],
   },
   createdAt:{
    type: Date,
    default:Date.now,
},
  
   
})

module.exports = mongoose.model('post',Posts);