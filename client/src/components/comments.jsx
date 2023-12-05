import React, { useState, useEffect } from "react";
import { ImReply } from "react-icons/im";

import { imgLink } from '../CommonUrl/URL'
// show comment on post 
const Comments = ({ commentBlock,  el,addComment,setAllComments }) => {

  const [edit,setEdit]= useState(-1)
  const openCommentBox = (id) =>{
 if(id != edit)
   setEdit(id);
  else setEdit(-1)
  }



  return (
    <div className="row">
      {commentBlock &&
        commentBlock.map(
          (ab) => (
           
            <>
              <div className="col-4">
    <img className='m-1' src={`${imgLink}${ab.userId.image}`} alt='User Profile Pic' style={{borderRadius:"50%", height:"30px", width:'30px'}}/> 
                <span className="fw-semibold">
                
                {ab.userId.fullName}
                </span>
              </div>
                <div className="col-4">
                <p className="mt-1">{ab.comment}</p>

                </div>
                <div className="col-4" onClick={(e) => openCommentBox(ab._id)}>
                <span title="Add a reply off this comment" className="mt-1" >  <ImReply /></span>

                </div>
                {edit == ab._id &&
                  <>

                
                  <form action="">
      <div className=" d-flex flex-column m-auto">
      <input
       type="text"
       className='m-auto me-0  border text-right rounded-2'
       placeholder="reply  comment"
       onChange={(e) => setAllComments(e.target.value)}
     />
     <input
     value="Reply"
       type="submit"
       className='m-auto me-0 mt-2 border rounded bg-light fw-semibold'
       onClick={(e, i) => addComment(el, ab.commentId)}
     />

      </div>
      </form>
                </>
                }
            
<div className="ms-5">
<Comments
                commentBlock={ab.replay}
                el={el}
                addComment={addComment}
                setAllComments={setAllComments}
              />
</div>
        
            </>
          )
         
        )  }
    </div>
  );
};

export default Comments;
