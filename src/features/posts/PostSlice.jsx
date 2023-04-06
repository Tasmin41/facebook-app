import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react";
import { act } from "react-dom/test-utils";



const initialPosts = {
    posts:[]
}



const PostSlice = createSlice({
    name : "posts",
    initialState:initialPosts,
    reducers: {
        viewPosts:(state,action)=>{
        
            state.posts=action.payload
        },
        createPost:(state,action)=>{
            state.posts.unshift(action.payload)
        },





















        reactCountIncrementAction:(state,action)=>{
            const id = action.payload;
           
   
            const isPostExit= state.posts.filter((post)=>post.id ==id);
           

            if(isPostExit){
                isPostExit[0].reactCount = isPostExit[0].reactCount + 1;
                isPostExit[0].disabled = true;
            }
        },
        reactCountDeccrementAction:(state,action)=>{
            const id = action.payload;
           
   
            const isPostExit= state.posts.filter((post)=>post.id ==id);
           

            if(isPostExit){
                isPostExit[0].reactCount = isPostExit[0].reactCount - 1;
                isPostExit[0].disabled = false;
            }
        },
        editPostAction:(state,action)=>{
            const {id,postDesc,reactCount,disabled} = action.payload;
      
            const isPostExit= state.posts.filter((post)=>post.id === id)
      

            if(isPostExit){
                isPostExit[0].postDesc = postDesc;
                isPostExit[0].reactCount = reactCount;
                isPostExit[0].disabled = disabled;
            }
        },
        deletePostAction:(state,action)=>{
            const id = action.payload;
            state.posts=state.posts.filter(post =>post.id !== id)
        },
        commentAddAction:(state,action)=>{
            const commentInfo = action.payload;
            const {postId,commentId,body} = commentInfo;
            const isPostExit= state.posts.filter((post)=>post.id === postId)

            isPostExit[0].comments.push(commentInfo)
        },
        commentReplyAction:(state,action)=>{
            const replyInfo = action.payload;
            console.log(replyInfo)


        }
    }
})


export const {viewPosts,createPost,reactCountIncrementAction,reactCountDeccrementAction,editPostAction,deletePostAction,commentAddAction,commentReplyAction}=PostSlice.actions;
export default PostSlice.reducer;