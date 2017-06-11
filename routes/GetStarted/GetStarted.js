import React from 'react';
import Layout from '../../components/Layout';
import s from './GetStarted.css';
import { title, html } from './GetStarted.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    );
  }

}

export default AboutPage;
