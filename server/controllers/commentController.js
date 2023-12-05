const catchAsyncError = require("../middelwares/catchAsyncError")
const Comments = require('../Model/Comments');
const ErrorHandler = require("../utils/Errorhandler");

exports.addComment = catchAsyncError(async(req,res, next) =>{
    const {user} = req;

    const {comment, postId} = req.body

    const {commentId} = req.query  

if(commentId){
    
    const findOldComment = await Comments.findById( commentId);
  
    if(!findOldComment){
        return next(new ErrorHandler("Someting wrong Happend", 400))
    }else{
        findOldComment.replay.push({
            postId:postId, comment:comment ,commentId : commentId, userId : user
        })
    await findOldComment.save()
    return res.status(200).json({sucess:true,message:findOldComment})
    }

}else{
  
    const post = await Comments.create({ postId:postId, comment:comment , userId : user });
   


    if(!post)  return next(new ErrorHandler("Someting wrong Happend", 400))
    else{
        post.commentId = post._id
        await post.save()
        return res.status(200).json({sucess:true,message:post})
    }

}
    
})

exports.allCommentOffPost = catchAsyncError(async(req,res, next) =>{
    const {postId} = req.query;
   if(!postId) return  next(new ErrorHandler("No Post No Comment", 400))
        // const comment = await Comments.find()
        const comment = await Comments.find({postId:postId}).populate('userId').populate({ 
            path: 'replay',
            populate: {
                path: 'userId',
                model: 'User'
              }  
         })
        if(!comment) return next(new ErrorHandler("Someting wrong Happend", 400))
        else return res.status(200).json({status : true,comment})
        
})


