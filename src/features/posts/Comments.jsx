import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { commentAddAction } from './PostSlice';
import { v4 as uuidv4 } from 'uuid';
import SingleComment from './SingleComment';


const Comments = (props) => {
    // console.log(props.comment)
    // const {postId,comentId,body}=props.comment;
    const postId = props.postId;
    
    const [comment,setComment] =useState("");


    const dispatch= useDispatch()
    

    const handleCommentSubmit=(e)=>{
        e.preventDefault();

        const commentInfo= {postId:postId,comentId:uuidv4(),body:comment}
        
        dispatch(commentAddAction(commentInfo));
        setComment("")
        
    }
  return (
    <div>
        <div className='comment'>
            <form className='comment-form' onSubmit={handleCommentSubmit}>
                <input type="text"
                 placeholder='Write a comment....' 
                 className='comment-input'
                 value={comment}
                 onChange={(e)=>setComment(e.target.value)} required/> 
                {
                    comment && 
                    <button className='comment-submit' type='submit'>
                        <i className='fa fa-solid fa-paper-plane'></i>
                    </button>
                }
             </form>
            <div className='comment-show'>
                {
                    props.comment.map((singleComment)=>{
                        return <SingleComment singleComment = {singleComment} key={singleComment.comentId}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Comments
