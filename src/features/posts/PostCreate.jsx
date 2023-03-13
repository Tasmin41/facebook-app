import React,{useState} from 'react';

import { Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from './PostSlice';

const PostCreate = () => {

  const [post,setPost] =useState("");

  const dispatch = useDispatch();

  const noOfPost = useSelector((state)=>state.PostReducer.posts.length);


const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = (e) => {
  e.preventDefault();
  const newPost = {id:noOfPost + 1,postDesc:post,reactCount:0,disabled:false}
  dispatch(createPost(newPost));
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
           value={post}/>
      </form>
    </Modal>
  </>
  )
}

export default PostCreate
