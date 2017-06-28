import { conn } from '../'

class PostsAPI{
	/** GET ALL*/
	static getAllPosts(){
		return conn.get('/Posts')
			.then((resp) => resp)
			.catch((err) => err)
	}
	/** GET by ID*/
}

export default PostsAPI