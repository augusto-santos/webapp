import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import s from './Posts.css'

/** MD File with doc */
import {user, userAvatar, title, atCreated, viewrs, comment, html} from './Post.md'

/** Post Components */
import UserPost from '../../components/PostComponents/UserPost'
import Post from '../../components/PostComponents/Post'
import BannerPost from '../../components/PostComponents/BannerPost'

const titleWeb = "Posts"

class Posts extends Component{

    componentDidMount() {
        document.title = titleWeb
    }

    render(){
        return(
            <Layout className={`${s.posts}`}>
                <div className={`${s.wrapperContainer}`}>
                    <div className={`${s.header}`}>
                        <UserPost avatar={userAvatar} alt={user} userName={user} />
                        <div className={`${s.actions}`}>
                            <Button label="Compartilhar">
                                <i className="material-icons">reply</i>
                            </Button>
                            <Button label={`Agradecer`}>
                                <i className="material-icons">thumb_up</i>
                            </Button>
                        </div>
                    </div>
                    <div className={`${s.body}`}>
                        <Post
                            titlePost={title}
                            atCreated={atCreated}
                            viewrs={viewrs}
                            comments={comment} >
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </Post>
                        <div className={`${s.conteudoFooter}`}>
                            <UserPost avatar={userAvatar} alt={user} userName={user} />
                            <div className={`${s.actionsFooter}`}>
                                <Button label={<i className="material-icons">more_vert</i>} />
                            </div>
                        </div>
                    </div>
                </div>
                <BannerPost>
                    <h3>Teste Banner</h3>
                    <p>Testando o banner do post...</p>
                </BannerPost>
                <div className={`${s.commentary}`}>
                    <h3>Comentários</h3>
                    <div className={`${s.writer}`}>
                        <textarea className={`${s.textArea}`} placeholder="Deixe um Comentário..." ></textarea>
                        <Button label="Faça Login para Comentar" />
                    </div>
                    <div className={`${s.comments}`}>
                        <div className={`${s.comentario}`}>
                            <div className={`${s.person}`}>
                                <img src="/img/user.jpg" alt="argus"/>
                            </div>
                            <div className={`${s.commentContent}`}>
                                <div className={`${s.info}`}>
                                    <div className={`${s.name}`}>Argus</div>
                                    <div className={`${s.date}`}>11/06/2017</div>
                                </div>
                                <div className={`${s.bodyContent}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit assumenda non similique at iure libero itaque minus natus! Architecto voluptates a ullam nulla mollitia unde sunt delectus molestias esse debitis.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </Layout>
        )
    }
}

export default Posts
