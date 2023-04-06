import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { commentReplyAction } from './PostSlice';

const AddReplyComment = (props) => {
  
    const {id,post_id,comment_id,reply_text,reply_author} =props.addReply;
    const postId=props.post_id
    const commentId=props.comment_id



    const [reply,setReply]=useState("");

    const dispatch = useDispatch();


    const handleReplySubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:3333/replies', {
          method: 'POST',
          body: JSON.stringify({post_id:postId,comment_id:commentId,reply_text:reply}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })

    }

  return (
    <div>
        <div className='comment'>
            <form className='comment-form' onSubmit={handleReplySubmit}>
                <input type="text"
                 placeholder='Write Reply....' 
                 className='comment-input'
                onChange={(e)=>setReply(e.target.value)}
                required/> 
                  <button className='comment-submit' type='submit'>
                        <i className='fa fa-solid fa-paper-plane'></i>
                </button>
             </form>
        </div>
    </div>
  )
}

export default AddReplyComment
