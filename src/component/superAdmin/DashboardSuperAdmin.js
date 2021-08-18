import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { LayoutAdmin } from './LayoutAdmin'
import axios from 'axios'
import './css/css/font-awesome.min.css'
import './css/auth.css'
import './css/main.css'
export const DashboardSuperAdmin = () =>{
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://apptatout.herokuapp.com/api/users/'
    },[])
    .then(response=>setUsers(response.data))
    .catch(e=>console.log(e))
  })
  // nombre de boutique active
  let bActive = []
  let bInactive = []
  users.map(user=>{
    if(user.is_celler === true){
     return bActive.push(1)
    }else{
      return bInactive.push(1)
    }
  })
    return(
        <div>
            <body class="app sidebar-mini rtl">
    <LayoutAdmin />
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i>Tableau de bord</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Tableau de bord</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="widget-small primary coloured-icon">
            <i class="icon fa fa-users fa-3x"></i>
            <Link to="/admins/listBoutique" class="info">
              <h4>Nombre de boutique</h4>
              <a><a>{users.length}</a></a>
            </Link>
          </div>
        </div>
        <Link to="/admins/list-boutique-ative" class="col-md-6 col-lg-3">
          <div class="widget-small info coloured-icon">
            <i class="icon fa fa-thumbs-o-up fa-3x"></i>
            <div class="info">
              <h4>Boutique active</h4>
              <a>{bActive.length}</a>
            </div>
          </div>
        </Link>
        <Link to="/admins/list-boutique-inactif" class="col-md-6 col-lg-3">
          <div class="widget-small info coloured-icon">
            <i class="icon fa fa-thumbs-o-up fa-3x"></i>
            <div class="info">
              <h4>Boutique inactive</h4>
              <a><a>{bInactive.length}</a></a>
            </div>
          </div>
        </Link>
      </div>
    </main>
    </body>
        </div>
    )
}