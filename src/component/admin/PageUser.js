import React, { Fragment, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {isAuth} from '../api/apiAuth'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout'

export const PageUser = () =>{
  useEffect(()=>{
    axios({
      method:'GET',
      url:`https://apptatout.herokuapp.com/api/users/list/${jwt.decode(isAuth()).id}/`
    })
    .then(response=>{
      setUsers(response.data)
    })
    .catch(e=>console.log(e))
  },[])
    const [users,setUsers] = useState({
      user_name:'',
      first_name:'',
      last_name:'',
      telephone:'',
      email:'',
      nom_boutique:'',
      adresse_boutique:'',
      tel_boutique:''
    })
    const {user_name,
    first_name,
    last_name,
    telephone,
    email,
    nom_boutique,
    adresse_boutique,
    tel_boutique
  } = users
  const handleChange = name =>e=>{
    setUsers({...users,[name]:e.target.value})
  }
  const handleSubmit = e =>{
    e.preventDefault()
    axios({
      method:'PUT',
      url:`https://apptatout.herokuapp.com/api/users/list/${jwt.decode(isAuth()).id}/`,
      data:{
        user_name,
        first_name,
        last_name,
        telephone,
        email,
        nom_boutique,
        adresse_boutique,
        tel_boutique
      }
    })
    .then(response=>{
        toast.success('modification reussie avec succes')
    }).catch(e=>{
        console.log('not okk')
    })
  }
    return(
        <Fragment>
            <body class="app sidebar-mini rtl">
            <Layout />
              <ToastContainer />
    <main class="app-content">
      <div class="row user">
        <div class="col-md-12">
          <div class="profile">
            <div class="info"><img class="user-img" src="../../s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" />
              <h4></h4>
              <p>La plateforme qui innove</p>
            </div>
            <div class="cover-image"></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="tile p-0">
            <ul class="nav flex-column nav-tabs user-tabs">
              <li class="nav-item"><a class="nav-link active" href="#user-timeline" data-toggle="tab">Info utilisateur</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane active" id="user-timeline">
              <div class="timeline-post">
                <div class="post-media"><a href="#"><img src="../../s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" /></a>
                  <div class="content">
                    <h5><a href="#">{`${jwt.decode(isAuth()).first_name}  ${jwt.decode(isAuth()).last_name}`}</a></h5>
                    <p class="text-muted"><small>{Date()}</small></p>
                  </div>
                </div>
                <div class="post-content">
                  <p>Bienvenue</p>
                </div>
              </div>
            </div>
            <div class="" id="user-settings">
              <div class="tile user-settings">
                <h4 class="line-head">Parametre</h4>
                <form onSubmit={handleSubmit}>
                  <div class="row mb-4">
                    <div class="col-md-4">
                      <label>Nom utilisateur</label>
                      <input class="form-control" value={user_name} onChange={handleChange(user_name)} type="text" />
                    </div>
                    <div class="col-md-4">
                      <label>Prenom</label>
                      <input class="form-control" value={first_name} onChange={handleChange(first_name)} type="text" />
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-4">
                      <label>Nom</label>
                      <input class="form-control" value={last_name} onChange={handleChange(last_name)} type="text" />
                    </div>
                    <div class="col-md-4">
                      <label>Numero Telephone</label>
                      <input class="form-control" value={telephone} onChange={handleChange(telephone)} type="tel" />
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-4">
                      <label>Nom Boutique</label>
                      <input class="form-control" value={nom_boutique} onChange={handleChange(nom_boutique)} type="text" />
                      <input class="form-control" value={email} onChange={handleChange(email)} type="hidden" />
                    </div>
                    <div class="col-md-4">
                      <label>Adresse Boutique</label>
                      <input class="form-control" value={adresse_boutique} onChange={handleChange(adresse_boutique)} type="text" />
                    </div>
                  </div>
                  <div class="row mb-4">
                  <input class="form-control" value={email} onChange={handleChange(email)} type="hidden" />
                    <div class="col-md-4">
                      <label>Numero telephone Boutique</label>
                      <input class="form-control" value={tel_boutique} onChange={handleChange(tel_boutique)} type="tel" />
                    </div>
                  </div>
                  <div class="row mb-10">
                    <div class="col-md-12">
                      <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i> Modifier</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </body>
        </Fragment>
    )
}