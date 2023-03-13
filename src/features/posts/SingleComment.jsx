import React, { useState } from 'react';
import ReplyComment from './ReplyComment';

const SingleComment = (props) => {
    const {postId,commentId,body,reply}=props.singleComment;
    console.log(reply)

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

           {
            reply && 
            reply.map((singleReply)=>{
              return <ReplyComment singleReply={singleReply}/>
            })
           }
       </div>
    </div>
  )
}

export default SingleComment
