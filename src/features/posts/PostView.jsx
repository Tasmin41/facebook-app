import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import { openEditModal, reactCount } from './PostSlice';
import SinglePost from './SinglePost';


const PostView = () => {
    const posts = useSelector((state)=>state.PostReducer.posts);
    
  return (
    <div className='post-view'>

      {
        posts && posts.map((post)=>{
            return (
              <SinglePost post ={post}/>

            )
        })
      }
      
    </div>
  )
}

export default PostView
