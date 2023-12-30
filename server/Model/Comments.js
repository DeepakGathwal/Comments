const mongoose = require('mongoose');


/**
 * @openapi
 * components:
 *  schemas:
 *    AddComment: 
 *      type: object
 *      required:
 *        - comment
 *        - postId
 *      properties:
 *        comment:
 *         type : String
 *         default : my first comment
 *        postId:
 *         type : String
 *         default : _id
 */



const Comments = new mongoose.Schema({

   postId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post",
     required:[true,'This field is Mandetory'],
   },
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
     required:[true,'This field is Mandetory'],
   },
  
   comment:{
    type:String,
    required:[true,'This field is Mandetory'],
   },
   commentId:{
    type:mongoose.Schema.Types.ObjectId,
    default:null,
   },

   replay :[
   { 
    postId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"post",
       required:[true,'This field is Mandetory'],
     },
     userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
       required:[true,'This field is Mandetory'],
     },
    
     comment:{
      type:String,
      required:[true,'This field is Mandetory'],
     },
     commentId:{
      type:mongoose.Schema.Types.ObjectId,
      default:null,
     },
     createdAt:{
      type: Date,
      default:Date.now,
     }
    }
   ],
   createdAt:{
    type: Date,
    default:Date.now,
},
  
   
})

module.exports = mongoose.model('comment',Comments);