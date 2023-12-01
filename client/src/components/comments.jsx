import React, { useState, useEffect } from "react";

import { imgLink, instance } from '../CommonUrl/URL'

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
    <img className='m-2' src={`${imgLink}${ab.userId.image}`} alt='User Profile Pic' style={{borderRadius:"50%", height:"35px", width:'35px'}}/> 
                <h6>
                  {" "}
     
                  <b>{ab.userId.fullName}</b>{" "}
                </h6>
              </div>
                <div className="col-4">
                <h6>{ab.comment}</h6>

                </div>
                <div className="col-4">
                <h6 onClick={(e) => openCommentBox(ab._id)}>Replay</h6>

                </div>
                {edit == ab._id &&
                  <>

                  <form action="">
                  <input
                  type="text"
                  placeholder="comment"
                  onChange={(e) => setAllComments(e.target.value)}
                />
                <input
                  type="submit"
                  onClick={(e, i) => addComment(el, ab.commentId)}
                />

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
