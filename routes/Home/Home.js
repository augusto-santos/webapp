import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { loadTasks } from '../../actions/home/actions'

import Layout from '../../components/Layout';
import s from './Home.css';
const title = 'React App Starter Kit';

function mapStateToProps(state){
  return{
    tasks: state.taskers.tasks
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ loadTasks }, dispatch)

class HomePage extends Component {

  componentDidMount() {
    this.props.loadTasks()
    // console.log(this.props.tasks)
    document.title = title
  }

  render() {
    const { tasks } = this.props
    return (
      <Layout className={s.content}>
        <div className={`${s.wrapperContainer}`}>  
          {tasks.map((task)=>{
            return(
              <div className={`${s.wrapp}`}>
                <div className={`${s.wrapper_card}`}>
                  <h4>{task.Title}</h4>
                  <p>{task.description}</p>
                </div>  
              </div>
            )
          })}
        </div>
      </Layout>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
