import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import { openEditModal, reactCount, viewPosts } from './PostSlice';
import SinglePost from './SinglePost';
import { createPost } from './PostSlice';
import axios from 'axios';


const PostView = () => {
    const posts = useSelector((state)=>state.PostReducer.posts);
console.log(posts)
    const dispatch = useDispatch();
    useEffect(() => {
      fetch("http://localhost:3333/tests")
      .then((res)=>res.json())
      .then((data)=>dispatch(viewPosts(data)))//data.map((post)=>dispatch(createPost(post))
      
    }, [])
    

  return (
    <div className='post-view'>
      {
        posts &&
         posts.map((post,index)=>{
            return (
              <SinglePost post ={post} key={index} />
            )
        })
      }
      
    </div>
  )
}

export default PostView
