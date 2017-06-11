import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import s from './Posts.css'

const title = "Posts"

class Posts extends Component{

    componentDidMount() {
        document.title = title
    }

    render(){
        return(
            <Layout className={`${s.posts}`}>
                <div className={`${s.wrapperContainer}`}>
                    <div className={`${s.header}`}>
                        <div className={`${s.publisher}`}>
                            <div className={`${s.avatar}`} >
                                <img src="/img/user.jpg" alt="argus"/>
                            </div>
                            <h4>Augusto Santos</h4>
                        </div>
                        <div className={`${s.actions}`}>
                            <Button>Compartilhar</Button>
                            <Button>Agradecer</Button>
                        </div>
                    </div>
                    <div className={`${s.body}`}>
                        <div className={`${s.title}`}>Testando ReactJS Post Component</div>
                        <div className={`${s.info}`}>
                            <div className={`${s.date}`}>Postado no dia 31/05/1995</div>
                            <div className={`${s.viewrs}`}>15</div>
                            <div className={`${s.comment}`}><i className={`material-icons ${s.icon}`}>comment</i>25</div>
                        </div>
                        <ul className={`${s.tags}`}>
                            <li className={`${s.tag}`}>ReactJS</li>
                            <li className={`${s.tag}`}>ES2015</li>
                            <li className={`${s.tag}`}>JavaScript</li>
                        </ul>
                        <div className={`${s.conteudo}`}>
                            <p>
                                Lorem ipsum code dolor sit amet, consectetur adipisicing elit. Ad nihil, voluptate fugiat, nulla vero at, necessitatibus ea sequi maiores quaerat laudantium beatae cumque, ratione. Magni iure ipsam esse delectus magnam.
                            </p>
                            <div className={`${s.block}`}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ratione quae provident, delectus iure animi. Veritatis quas, optio, perspiciatis ipsam iste quo impedit reprehenderit consequatur illum beatae totam! Pariatur, excepturi?</p>
                            </div>
                            <h2 className={`${s.blockTitle}`}>ReactJS & Redux</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellat officiis quisquam eius odio asperiores adipisci praesentium, ullam, ducimus, accusamus quidem corporis iure non voluptatum architecto. Sed saepe voluptate, sequi.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vero nostrum, sunt molestiae ad quia animi corrupti, quam totam veniam dolore temporibus eos nihil minima voluptatibus eveniet ab recusandae eligendi.
                            </p>
                            <h4 className={`${s.blockSubtitle}`}>Flux</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus recusandae vero totam veniam perspiciatis sit. Possimus error deserunt culpa tempora perferendis at qui magni consequatur, nesciunt ipsa, rem. Saepe, deleniti?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio dolore labore, earum mollitia rerum recusandae tempora, dolorum soluta numquam ratione nemo aspernatur nesciunt quae odio assumenda expedita sequi illo.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minima modi quis dolorum sit tempora voluptatem harum velit, maiores nesciunt quas. Ex accusamus fugit adipisci, esse eligendi, iusto veritatis eveniet?
                            </p>
                            <h4 className={`${s.blockSubtitle}`}>Habits</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, itaque totam quo deserunt minima veritatis ea enim a repudiandae aut nihil aperiam iusto odio nemo quia atque. Laboriosam, quidem, molestias?
                            </p>
                            <div className={`${s.block}`}>
                                sudo apt-get install habits
                            </div>
                            <p>Éh Isso ai! Falow!</p>
                        </div>
                    </div>
                </div>
                <div className={`${s.wrapperBanner}`}>
                    <div className={`${s.wrapperContainer}`}>
                        <div className={`${s.contentBanner}`}>
                            <h3>Teste Banner</h3>
                            <p>Testando o banner do post...</p>
                        </div>
                    </div>
                </div>
                <div className={`${s.commentary}`}>
                    <h3>Comentários</h3>
                    <div className={`${s.writer}`}>
                        <textarea className={`${s.textArea}`} placeholder="Deixe um Comentário..." ></textarea>
                        <Button>Faça Login para Comentar</Button>
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
                <div className="footer">
                  <div className={`${s.testeFooter}`}></div>
                </div>
            </Layout>
        )
    }
}

export default Posts
