import React,{useState} from 'react';

import { Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost, viewPosts } from './PostSlice';
import PostView from './PostView';

const PostCreate = (props) => {

  const [post,setPost] =useState("");

  const dispatch = useDispatch();

  const noOfPost = useSelector((state)=>state.PostReducer.posts.length);


const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = (e) => {
  e.preventDefault();
  fetch('http://localhost:3333/tests', {
    method: 'POST',
    body: JSON.stringify({user_id:3,post_desc:post,disabled:false}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  fetch("http://localhost:3333/tests")
  .then((res)=>res.json())
  .then((data)=> dispatch(viewPosts(data)))  
  setPost("")
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};
  return (
    <>
    <div className='create-post'>
    <Input type="text" onClick={showModal} placeholder="Whats On Your Mind" className='form-field'/>
    </div>
    
      
   
    <Modal title="Create Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Create Post">
    <form className='form-create'>
         <input type="text"
         placeholder='Whats On Your Mind'
          className='form-field'
           onChange={(e)=>setPost(e.target.value)}
           value={post} required/>
      </form>
    </Modal>
  </>
  )
}

export default PostCreate
