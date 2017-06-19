import PostsAPI from '../api/Posts'

export const loadPosts = () => ({
    type: 'LOAD_POSTS',
    payload: getAllPosts.data
}) 

const getAllPosts = PostsAPI.getAllPosts()