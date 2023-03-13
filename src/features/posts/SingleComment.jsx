import React from 'react'

const SingleComment = (props) => {
    const {postId,commentId,body}=props.singleComment;

  return (
    <div className='single-comment'>
    <span className='profile '>

       </span>
       <div className="comment-body">
           <p className='comment-text'>{body}</p>
           <button className='comment-btn'>Like</button>
           <button className='comment-btn'>Reply</button>
       </div>
    </div>
  )
}

export default SingleComment
