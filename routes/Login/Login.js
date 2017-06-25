import React, { Component } from 'react'
import s from './Login.css'

class Login extends Component{
  render(){
    return(
      <div className={`${s.wrapper}`}>
        <div className={`${s.conteiner}`}>
          <div className={`${s.wrap_content}`}>
            <div className={`${s.wrap_logo}`}>
              <img src="img/html-5.svg" alt="logo" /> 
              <div className={`${s.info_site}`}>
                <h1>DevExp<small>™</small></h1>
                <p>Share your exprience</p>
              </div>
            </div>
            <div className={`${s.msg}`}>
              <h4>Bem vindo!</h4>
              <p>faça login e desfrute desse esplendidos topicos.</p>
            </div>
            <div className={`${s.field_form}`}>
              <div className={`${s.form_ctrl}`}>
                <input type="email" placeholder="Username" value={'teste'}/>
              </div>
              <div className={`${s.forget}`}>
                <a href="#">Esqueçeu o seu nome de usuário?</a>
              </div>
            </div>
            <div className={`${s.action_form}`}>
              <div className={`${s.form_ctrl}`}>
                <button className={`${s.btn_next}`}>Proximo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login