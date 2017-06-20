import axios from 'axios'
import action from '../../actions/getStartedActions'
import { connect } from '../'

class PostsAPI{
	/** GET ALL*/
	static getAllPosts(res){
		return conn.get('/Posts')
			.then((resp) => res)
			.catch((err) => res)
	}
	/** GET by ID*/
}

export default PostsAPI