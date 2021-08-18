import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {LayoutAdmin} from '../LayoutAdmin'

export const ListReservation = () => {
    
  const [events,setEvents] = useState([])

  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://apptatout.herokuapp.com/event/list_reservation/'
    })
    .then(response=>{
      setEvents(response.data)
    })
    .catch(e=>console.log(e))
  },[])
  console.log(events.map(event=>console.log(event)))
    return(
        <Fragment>
        <LayoutAdmin />
            <main class="app-content">
            <div class="app-title">
            <div>
            <h1><i class="fa fa-th-list"></i> reservation</h1>
            <p>Listes reservations</p>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">reservation</li>
            <li class="breadcrumb-item active"><a href="#">reservation</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
            <div class="tile">
                <div class="tile-body">
                
                {
                    events.length <= 0 ? (
                    <h1 className="color-danger">Aucun reservation</h1>
                    ) : (

                    <table class="table table-hover table-bordered" id="sampleTable">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Nom evenement</th>
                        <th>Nombre Reserver</th>
                        <th>prenom</th>
                        <th>nom</th>
                        <th>Adresse</th>
                        <th>Telephone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        events.map(event=>(
                            <tr>
                                <td>{event.id}</td>
                                <td><img src={"https://apptatout.herokuapp.com"+event.image} width="50px" height="50px"/></td>
                                <td>{event.event.titre}</td>
                                <td>{event.nombre}</td>
                                <td>{event.prenom}</td>
                                <td>{event.nom}</td>
                                <td>{event.adresse}</td>
                                <td>{event.telephone}</td>
                                <td>
                                    <button className="btn btn-warning">confirmer</button>
                                    <button className="btn btn-danger">annuler</button>
                                </td>
                        </tr>
                        ))
                        }
                    </tbody>
                </table>
                    )
                }
                
                </div>
            </div>
            </div>
        </div>
    </main>
    </Fragment>
    )
}