import axios from 'axios'
import { connect } from '../'

class PostsAPI{
	/** GET ALL*/
	static getAllPosts(){
		return connect.get('/Posts')
			.then((resp) => resp)
			.catch((err) => err)
	}
	/** GET by ID*/
}

export default PostsAPI