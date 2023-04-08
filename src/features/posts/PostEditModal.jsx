import React,{useState} from 'react'
import { Input, Modal } from 'antd';
import { deletePostAction, editPostAction } from './PostSlice';
import { useDispatch } from 'react-redux';
import { viewPosts } from './PostSlice';

const PostEditModal = (props) => {
  const {id,post_desc}=props.post;

  const [openEditModal,setOpenEditModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const dispatch =useDispatch();

  const [postEdit,setNewPostEdit] = useState(post_desc);
  const showModal = () => {
    setIsModalOpen(true);
  };

const handleOk = (e) => {
  e.preventDefault();

  fetch("http://localhost:3333/posts/"+id,{
    method: 'post',
    body: JSON.stringify({
      post_desc:postEdit
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  fetch("http://localhost:3333/posts")
  .then((res)=>res.json())
  .then((data)=> dispatch(viewPosts(data))) 

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
    const dltResponse= fetch("http://localhost:3333/posts/"+id, {
      method: 'DELETE',
    });
    console.log(dltResponse,"delete post")

    setIsModalOpen(false);
    setOpenEditModal(false);
  

    const response = await fetch("http://localhost:3333/posts")
    const data = await response.json();
    console.log(data)
    dispatch(viewPosts(data))

  }
  return (
    <div>
              <div className='post-modal'>
                  {
                  openEditModal ? 
                      <button className='post-modalbtn' onClick={handlePostCloseModal}>
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor"></path></svg> 
                      </button>: 
                      <button onClick={handlePostModal} className='post-modalbtn'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>
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
