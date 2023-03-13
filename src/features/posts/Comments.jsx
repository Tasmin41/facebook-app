import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { commentAddAction } from './PostSlice';
import { v4 as uuidv4 } from 'uuid';


const Comments = (props) => {
    const {postId,comentId,body}=props.comment;
    
    const [comment,setComment] =useState("");


    const dispatch= useDispatch()
    

    const handleCommentSubmit=(e)=>{
        e.preventDefault();

        const commentInfo= {postId:postId,comentId:uuidv4(),body:comment}
        
        dispatch(commentAddAction(commentInfo))
        
    }
  return (
    <div>
        <div className='comment'>
            <form className='comment-form' onSubmit={handleCommentSubmit}>
                <input type="text"
                 placeholder='Write a comment....' 
                 className='comment-input'
                 value={comment}
                 onChange={(e)=>setComment(e.target.value)}/> 
                <button className='comment-submit' type='submit'>submit</button>
             </form>
            <div className='comment-show'>
                 <div className='single-comment'>
                 <span className='profile '>

                    </span>
                    <div className="comment-body">
                        <p className='comment-text'>{body}</p>
                        <button className='comment-btn'>Like</button>
                        <button className='comment-btn'>Reply</button>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Comments
