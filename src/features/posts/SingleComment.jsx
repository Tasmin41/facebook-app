import React, { useState } from 'react'

const SingleComment = (props) => {
    const {postId,commentId,body}=props.singleComment;

    const [isLike,setIsLike]=useState(false);


    const handleLikeCount = ()=>{
      setIsLike(!isLike);
    }

  return (
    <div className='single-comment'>
    <span className='profile '>

       </span>
       <div className="comment-body">
           <p className='comment-text'>{body}
           {
            isLike && <span className='comment-react-like'><i className='fa fa-light fa-thumbs-up'></i></span>
           }
           
           </p>
           <button className='comment-btn' onClick={handleLikeCount} style={isLike ? {color:'blue'} : {color:'#67656B'}}>Like</button>
           <button className='comment-btn'>Reply</button>
       </div>
    </div>
  )
}

export default SingleComment
