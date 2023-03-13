import React,{useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments';
import PostEditModal from './PostEditModal';

import {reactCountIncrementAction ,reactCountDeccrementAction} from './PostSlice';

const SinglePost = (props) => {
    const {id,postDesc,reactCount,disabled,comments}=props.post;

  const postId = comments[0].postId;
  const commentId = comments[0].commentId;
  const body = comments[0].body;
  

    const dispatch = useDispatch();

    const handleReactCount=(id)=>{
      if(!disabled){
        dispatch(reactCountIncrementAction(id));

      }
      if(disabled){
        dispatch(reactCountDeccrementAction(id));
      }
      
    }

  return (
    <div>
                  <div className='single_post' key={id}>
                <div className='single-post-top'>
                  <p>{postDesc}</p>
                  <PostEditModal post={props.post}/>
                </div>
                <div className='react-view'>
                <div className="count-view">
                  <span className='clr-like' >
                      <i className="fa fa-regular fa-thumbs-up"></i>
                  </span>
                  <p>{reactCount} </p>
                  </div>
                 
                  <div className='post-bottom'>
                  <button className='react-btn' onClick={()=>handleReactCount(id)} style={disabled ? {color:'blue'} : {color:'#67656B'}}>
                    <span className='icon-btn'>
                      <i className="fa fa-regular fa-thumbs-up"></i>
                    </span>
                    Like
                  </button>
                  <button className='react-btn' >
                    <span className='icon-btn'>
                    <i className='fa fa-regular fa-message'></i>
                    </span>
                    Comment
                  </button>
                  </div>
                  <Comments comment={{postId,commentId,body}} />
                </div> 
            </div>
    </div>
  )
}

export default SinglePost
