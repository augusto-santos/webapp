import React, { Component } from 'react';
import axios from 'axios'
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown'
import md from '../../components/Markdown/utils/markdown-parser'
import s from './Home.css';

const teste = 'http://0.0.0.0:5000/api/containers/container1/download/Post.md'
const title = 'React App Starter Kit';

class HomePage extends Component {

  constructor(props){
    super(props)
    this.state = { content: {}}
  }

  componentDidMount() {
    document.title = title;
    axios.get(teste)
      .then((resp => this.setState({...this.state, content: md(resp.data)})))
      .catch((err) => this.setState({...this.state, content: err}))
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <Markdown Content={this.state.content} />  
        </div>
      </Layout>
    );
  }

}

export default HomePage;
