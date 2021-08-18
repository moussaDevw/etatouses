import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {LayoutAdmin} from '../LayoutAdmin'
import { Link } from 'react-router-dom'
export const GererEvenement = () => {
  const [events,setEvents] = useState([])
  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://apptatout.herokuapp.com/event/list_reservation/'
    })
    .then(response=>{
      setEvents(response.data)
      console.log(response.data)
    })
    .catch(e=>console.log(e))
  },[])
  const reservationConfirmer = []
  const reservationAnnuler = []
  const reservationNonConfirmer = []
  events.map(event=>{
    if(event.event.statut_event === false){
      return reservationNonConfirmer.push(1)
    }else if(event.event.statut_event === true){
      return reservationConfirmer.push(1)
    }else if(event.event.archive_event){
      return reservationAnnuler.push(1)
    }
  })
    return(
      <div>
      <body class="app sidebar-mini rtl">
    <LayoutAdmin />
    <main class="app-content">
    <div class="app-title">
      <div>
        <h1><i class="fa fa-dashboard"></i>Listes Evenements</h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item"><a href="#">Listes Evenements</a></li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x"></i>
          <Link to="/admins/list-reservation" class="info">
            <h4>Reservation</h4>
            <p><b>{events.length}</b></p>
          </Link>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small info coloured-icon">
          <i class="icon fa fa-thumbs-o-up fa-3x"></i>
          <div class="info">
            <h4>Confirmer</h4>
            <p><b>{reservationConfirmer.length}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small info coloured-icon">
          <i class="icon fa fa-thumbs-o-up fa-3x"></i>
          <div class="info">
            <h4>Non confirmer</h4>
            <p><b>{reservationNonConfirmer.length}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small warning coloured-icon">
          <i class="icon fa fa-files-o fa-3x"></i>
          <div class="info">
            <h4>Annulez</h4>
            <p><b>{reservationAnnuler.length}</b></p>
          </div>
        </div>
      </div>
    </div>
    </main>
    </body>
      </div>
    )
}