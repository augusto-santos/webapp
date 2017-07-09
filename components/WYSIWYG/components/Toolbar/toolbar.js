import React, { Component } from 'react'
import s from './toolbar.css'

class Toolbar extends Component{
  render(){
    return(
      <div className={`${s.wysiwyg_toolbar}`}>
        <div className={`${s.toolbar_section}`}>
          <button><i className={`material-icons`}>format_italic</i></button>
          <button><i className={`material-icons`}>format_bold</i></button>
          <button><i className={`material-icons`}>format_underlined</i></button>
        </div>
        <div className={`${s.toolbar_section}`}>
          <button><i className={`material-icons`}>format_align_left</i></button>
          <button><i className={`material-icons`}>format_align_center</i></button>
          <button><i className={`material-icons`}>format_align_right</i></button>
          <button><i className={`material-icons`}>format_align_justify</i></button>
        </div>
        <div className={`${s.toolbar_section}`}>
          <button><i className={`material-icons`}>insert_photo</i></button>  
        </div>
        <div className={`${s.toolbar_section}`}>
          <button><i className={`material-icons`}>code</i></button>
        </div> 
      </div>
    )
  }
}


export default Toolbar