/** import */
import PostsAPI from '../api/Posts'

/** consts */
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALID_POSTS = 'INVALID_POSTS'

/** functions */
export const requestPosts = (posts) => ({
	type: REQUEST_POSTS,
	posts
})

export const receivaPosts = (posts) => ({
	type: RECEIVE_POSTS,
	posts: posts.data.children.map(child => child.data)
})

export const invalidPosts = (posts) => ({
	type: INVALID_POSTS,
	posts
})

const getPosts = post => dispatch => {
	dispatch(requestPosts(post))
	return PostsAPI.getAllPosts()
		.then(resp => dispatch(receivaPosts(resp)))
}  