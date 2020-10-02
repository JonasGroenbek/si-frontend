import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    lastUpdated: undefined
  },
  reducers: {
    setPosts: (state, action) => {
      const { posts } = action.payload
      state.lastUpdated = new Date()
      state.posts = posts
    }
  }
})

export const selectPosts = state => state.posts.posts

export const { setPosts } = postsSlice.actions

export default postsSlice.reducer
