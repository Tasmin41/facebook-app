import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import { openEditModal, reactCount, viewPosts } from './PostSlice';
import SinglePost from './SinglePost';
import { createPost } from './PostSlice';
import axios from 'axios';
import { useContext } from 'react';
import { DataContext } from '../../api/context';
import { fetchData } from '../../api/api';


const PostView = () => {
    const posts = useSelector((state)=>state.PostReducer.posts);
   const data = useContext(DataContext); const dispatch = useDispatch();
    

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:3333/posts")
        const data = await response.json();
        dispatch(viewPosts(data))
      }
      fetchData();
    })

    
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
