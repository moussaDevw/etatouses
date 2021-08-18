import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { LayoutAdmin } from '../LayoutAdmin'
import axios from 'axios'

export const GererBoutique = () => {
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
    <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="widget-small primary coloured-icon">
            <i class="icon fa fa-users fa-3x"></i>
            <Link to="/admins/listBoutique" class="info">
              <h4>Nombre de boutique</h4>
              <a><b>{users.length}</b></a>
            </Link>
          </div>
        </div>
        <Link to="/admins/list-boutique-ative" class="col-md-6 col-lg-3">
          <div class="widget-small info coloured-icon">
            <i class="icon fa fa-thumbs-o-up fa-3x"></i>
            <div class="info">
              <h4>Boutique active</h4>
              <a><b>{bActive.length}</b></a>
            </div>
          </div>
        </Link>
        <Link to="/admins/list-boutique-inactif" class="col-md-6 col-lg-3">
          <div class="widget-small info coloured-icon">
            <i class="icon fa fa-thumbs-o-up fa-3x"></i>
            <div class="info">
              <h4>Boutique inactive</h4>
              <a><b>{bInactive.length}</b></a>
            </div>
          </div>
        </Link>
        <div class="col-md-6 col-lg-3">
          <div class="widget-small warning coloured-icon">
            <i class="icon fa fa-files-o fa-3x"></i>
            <div class="info">
              <h4>Archivez</h4>
              <a><b>10</b></a>
            </div>
          </div>
        </div>
        
      </div>
    </main>
    </body>
      </div>
    )
}