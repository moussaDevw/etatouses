import React, { Fragment,useEffect,useState } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import jwt from 'jsonwebtoken'
import {isAuth,authenticate} from '../api/apiAuth'
import { Layout } from '../menu/Layout'
export const Login = () =>{
    const [users, setUsers] = useState({
        email:'',
        password:'',
        error:''
    })
    const {email,password,error} = users
    const handleChange = name =>e=>{
        setUsers({...users,[name]:e.target.value})
      }
      const handleSubmit = e =>{
        e.preventDefault()
        axios({
          method:'POST',
          url:'https://apptatout.herokuapp.com/api/users/login/',
          data:{email,password}
        })
        .then((response)=>{
          authenticate((response),()=>{
            setUsers({...users,email:'',password:''})
          })
          .catch((error)=>{
            console.log("erreur")
          }
          )
        })
        .catch(e=>console.log(error))
        spinners = spinner()
      }
      useEffect(()=>{
          let form = document.querySelectorAll(".red");
        for(let i = 0; i < form.length;i++){
            form[i].addEventListener('keydown',(e)=>{
                if(e.target.value.length === 0){
                    
                }
            })
        }
      },[])
      const connRedirect = () =>{
          if(isAuth() && jwt.decode(isAuth()).is_admin === true)
          {
              return <Redirect to='/admins/tableau-de-bord' />
          }else if(isAuth() && jwt.decode(isAuth()).is_celler === true)
          {
              return <Redirect to="/admin/tableau-de-bord" />
          }else if(isAuth()){
              return <Redirect to="/" />
          }else if(isAuth() && jwt.decode(isAuth()).is_celler === false && jwt.decode(isAuth()).is_admin === false){

          }
      }
      var spinners;
      const spinner = () =>{
        return(
            <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
    )
      }
    return(
        <Fragment>
            {connRedirect()}
            <Layout />
        <section class="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                            <div class="breadcrumb-left">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}><Link to="/">Acceuil</Link></font></font></a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}></font></font></li>
                                </ol>
                            </div>
                            <div class="breadcrumb-right">
                                <h5 class="heading-5 font-weight-500"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Connexion</font></font></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="login-registration-wrapper pt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mx-auto">
                        <div class="login-registration-style-1 registration text-center mt-50">
                            <h1 class="heading-4 font-weight-500 title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Connexion</font></font></h1>
                            <div class="login-registration-form pt-10">
                            <form class="has-validation-callback" onSubmit={handleSubmit}>
                                <div class="single-form form-default form-border text-left">
                                    <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adresse e-mail</font></font></label>
                                    <div class="form-input">
                                    <input type="email" onChange={handleChange('email')} placeholder="user@email.com" className="red" required/>
                                    <i class="mdi mdi-email"></i>
                                </div>
                                </div>
                                <div class="single-form form-default form-border text-left">
                                    <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mot de passe</font></font></label>
                                    <div class="form-input">
                                        <input id="password-3" type="password" onChange={handleChange('password')} placeholder="Mot de passe" className="red" required/>
                                    </div>
                                </div>
                                <div class="single-form">
                                    <button class="main-btn primary-btn mb-4" style={{width:'100%'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Se connecte</font></font></button>
                                </div>
                            </form>
                            </div>
                            {spinners}
                            <p class="login"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Vous n'avez pas de boutique? </font></font><Link to="/creer-boutique"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>clique ici</font></font></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        {/* <div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div> */}
        </Fragment>
    )
}