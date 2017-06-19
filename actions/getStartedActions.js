import PostsAPI from '../api/Posts'

const getAllPosts = PostsAPI.getAllPosts()
const LOAD_POSTS = 'LOAD_POSTS'
export const loadPosts = () => ({
    type: 'LOAD_POSTS',
    payload: getAllPosts.data
}) 