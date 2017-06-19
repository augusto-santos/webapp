import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import s from './Posts.css'

/** Content from a .md file */
import {key, user, userAvatar, title, atCreated, viewrs, comment, tags, html} from './Post.md'

/** Post Components */
import UserPost from '../../components/PostComponents/UserPost'
import Post from '../../components/PostComponents/Post'
import BannerPost from '../../components/PostComponents/BannerPost'
import CommentaryPost from '../../components/PostComponents/CommentaryPost'

/** Commentary Tester .json */
import CommentTeste from '../../options/CommentaryTeste.json'

const titleWeb = "Posts"

class Posts extends Component{

    constructor(props){
        super(props)
        this.state = {content: ''}
    }

    componentDidMount() {
        document.title = title
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
                            key={key}
                            titlePost={title}
                            atCreated={atCreated}
                            viewrs={viewrs}
                            comments={comment}
                            tag={tags} >
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </Post>
                        <div className={`${s.conteudoFooter}`}>
                            <div className={`${s.followUser}`}>
                                <UserPost avatar={userAvatar} alt={user} userName={user} />
                                <Button label="Seguir" />
                            </div>
                            <div className={`${s.contentFooterPost}`}>
                                <Button><i className="material-icons">share</i></Button>
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
                        {CommentTeste.map((comments) => {
                            return(
                                <CommentaryPost
                                    userAvatar={comments.userAvatar}
                                    userName={comments.userName}
                                    atCreated={atCreated}
                                    key={comments.key} >
                                    {comments.content}
                                </CommentaryPost>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </Layout>
        )
    }
}

export default Posts
