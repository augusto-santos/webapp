import React, { Component } from 'react'
import Toolbar from './components/Toolbar'
import s from './wysiwyg.css'

import md from '../Markdown/utils/markdown-parser'

class WYSIWYG extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={`wysiwyg_wrapper`}>
        <Toolbar />
        <div className={`${s.wysiwyg_body}`}>
          <textarea />
        </div>
        <div className={`wysiwyg_footer`}>
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>  
      </div>
    )
  }
}

export default WYSIWYG