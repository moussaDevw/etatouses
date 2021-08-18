import React, { Fragment,useState } from 'react'
import {authenticate} from '../api/apiAuth'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Layout } from '../menu/Layout'
export const CreerBoutique = () =>{
    const [users,setUsers] = useState({
        user_name:'',
        first_name:'',
        last_name:'',
        telephone:'',
        email:'',
        nom_boutique:'',
        adresse_boutique:'',
        tel_boutique:'',
        password:''
    })
    const {
        user_name,
        first_name,
        last_name,
        telephone,
        email,
        nom_boutique,
        adresse_boutique,
        tel_boutique,
        password
    } = users
    const handleChange = name =>e=>{
        setUsers({...users,[name]:e.target.value})
      }
      const handleSubmit = e =>{
        e.preventDefault()
        axios({
          method:'POST',
          url:'https://apptatout.herokuapp.com/api/users/',
          data:{
            user_name,
            first_name,
            last_name,
            telephone,
            email,
            nom_boutique,
            adresse_boutique,
            tel_boutique,
            password
          }
        })
        .then((response)=>{
            setUsers({...users,user_name:'',first_name:'',last_name:'',telephone:'',email:'',nom_boutique:'',adresse_boutique:'',tel_boutique:'',password:''})
        }).catch(e=>{
            console.log('not okk')
        })
      }
    return(
        <Fragment>
            <ToastContainer />
            <Layout />
        <section class="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                            <div class="breadcrumb-left">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                    <Link to="/">
                                        Acceuil
                                    </Link></font></font></a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}></font></font></li>
                                </ol>
                            </div>
                            <div class="breadcrumb-right">
                                <h5 class="heading-5 font-weight-500"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Créez votre boutique</font></font></h5>
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
                            <h1 class="heading-4 font-weight-500 title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Créez votre boutique</font></font></h1>
                            <div class="login-registration-form pt-10">
                            <form class="has-validation-callback" onSubmit={handleSubmit}>
                                <div class="single-form form-default form-border text-left">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-input">
                                            <label>Nom d'utilisateur</label>
                                            <input type="text" onChange={handleChange('user_name')} placeholder="Nom d'utilisateur" required/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-input form">
                                            <label>Prénom</label>
                                            <input type="text" onChange={handleChange('first_name')} placeholder="Prénom" required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-input">
                                            <label>Nom de famille</label>
                                            <input type="text" onChange={handleChange('last_name')} placeholder="Nom d'utilisateur" required/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-input form">
                                            <label>Téléphone</label>
                                            <input type="tel" onChange={handleChange('telephone')} placeholder="770000000" required/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="single-form form-default form-border text-left">
                                    <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Adresse e-mail</font></font></label>
                                    <div class="form-input">
                                        <input type="email" onChange={handleChange('email')} placeholder="user@email.com" required/>
                                        <i class="mdi mdi-email"></i>
                                    </div>
                                </div>
                                <div class="single-form form-default form-border text-left">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-input">
                                            <label>Nom boutique</label>
                                            <input type="text" onChange={handleChange('nom_boutique')} placeholder="Nom boutique" required/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-input form">
                                            <label>Adresse Boutique</label>
                                            <input type="text" onChange={handleChange('adresse_boutique')} placeholder="Adresse Boutique" required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-input">
                                            <label>Téléphone boutique</label>
                                            <input type="tel" onChange={handleChange('tel_boutique')} placeholder="7700000000" required/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="single-form form-default form-border text-left">
                                <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Choisissez un mot de passe</font></font></label>
                                <div class="form-input">
                                <input id="password-3" type="password" onChange={handleChange('password')} placeholder="Mot de passe" required/>
                                <i class="mdi mdi-lock"></i>
                                <span toggle="#password-3" class="mdi mdi-eye-outline toggle-password"></span>
                                </div>
                                </div>
                                <div class="single-form">
                                <button class="main-btn primary-btn mb-4" style={{width:'100%'}}><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>S'inscrire</font></font></button>
                                </div>
                            </form>
                            </div>
                            <p class="login"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Avoir un compte? </font></font><Link to="/connexion"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Connexion</font></font></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        {/* <div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div> */}
        </Fragment>
    )
}