import React,{useEffect, useState} from 'react'
import { Input, Modal } from 'antd';
import { deletePostAction, editPostAction } from './PostSlice';
import { useDispatch } from 'react-redux';
import { viewPosts } from './PostSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faXmark } from '@fortawesome/free-solid-svg-icons'

const PostEditModal = (props) => {
  const {id,post_desc}=props.post;

  const [openEditModal,setOpenEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const postURL="http://localhost:3333/posts"

  

  const dispatch =useDispatch();

  const [postEdit,setNewPostEdit] = useState(post_desc);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async(e) => {       
    e.preventDefault();
  
    const editPost=fetch(`${postURL}/${id}`,{
      method: 'post',
      body: JSON.stringify({
        post_desc:postEdit
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
   
    const response3 = await fetch(postURL)
    const data3 = await response3.json();
    dispatch(viewPosts(data3))
    console.log(data3)
    setIsModalOpen(false);
    setOpenEditModal(false)
  };



const handleCancel = () => {
  setIsModalOpen(false);
  setOpenEditModal(false)
};

/*Edit Modal*/
  const handlePostCloseModal=()=>{
      setOpenEditModal(false);
  }
  const handlePostModal=()=>{
      setOpenEditModal(true)
  }

  
/*Delete Post*/
  const deletePost = async (id)=>{
    const dltResponse= fetch(postURL+id, {
      method: 'DELETE',
    });
    console.log(dltResponse,"delete post")

    setIsModalOpen(false);
    setOpenEditModal(false);
  

    const response = await fetch(postURL)
    const data = await response.json();
    dispatch(viewPosts(data))
  }
  return (
    <div>
      <div className='post-modal'>
                  {
                  openEditModal ? 
                      <button className='post-modalbtn' onClick={handlePostCloseModal}>
                          <FontAwesomeIcon icon={faXmark} />
                      </button>: 
                      <button onClick={handlePostModal} className='post-modalbtn'>
                            <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                      }
                      
                      {
                        openEditModal && 
                        
                        <div className='modal-open'>
                          <ul>
                            <li>
                              <button onClick={showModal} className="edit-btn">Edit Post</button>
                              <Modal title="Edit Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Edit Post">
                                <form className='form-create'>
                                    <input type="text"
                                    
                                      className='form-field'
                                      
                                      value={postEdit} onChange={(e)=>setNewPostEdit(e.target.value)}/>
                                  </form>
                                </Modal>
                              </li>
                            <li><button onClick={()=>deletePost(id)} className="edit-btn">Delete Post</button></li>
                          </ul>
                        </div>
                      }
        </div>
    </div>
  )
}

export default PostEditModal
