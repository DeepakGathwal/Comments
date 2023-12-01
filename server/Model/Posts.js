const mongoose = require('mongoose');

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