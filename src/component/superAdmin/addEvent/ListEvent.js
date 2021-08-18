import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from '../LayoutAdmin'

export const ListEvent = () =>{
    const [events,setEvents] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/event/'
        })
        .then(response=>setEvents(response.data))
        .catch(e=>console.log(e))
    },[])
    // fonction pour supprimer un events
    const deleteProduit = (id) => {
        axios({
            method:'DELETE',
            url:`https://apptatout.herokuapp.com/event/list/${id}/`,
        })
        .then(response=>{
            toast.success("suppression reussie")
            setEvents(events.filter((event) => event.id !== id))
        })
      }
      const confirmeDelete = (id)=>{
        {swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce event!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteProduit(id)
              swal("ok! Votre event a été supprimé!", {
                icon: "success",
              });
            }
          })}
    }
    return(
        <Fragment>
            <LayoutAdmin />
            <ToastContainer />
            <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-th-list"></i> categories</h1>
          <p>Listes events</p>
        </div>
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item">categories</li>
          <li class="breadcrumb-item active"><a href="#">categories</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">
              {
                events.length <= 0 ? (
                  <h1 className="color-danger">La liste des evenements est vide ajouter quelques uns</h1>
                ) : (

                  <table class="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Action</th>
                  </tr>
                </thead>
                  <tbody>
                    {
                      events.map(event=>(
                        <tr>
                            <td>{event.id}</td>
                            <td><img src={"https://apptatout.herokuapp.com"+event.affiche} width="50px" height="50px"/></td>
                            <td>{event.titre}</td>
                            <td>
                                <Link to={"/admins/modifier-evenement"+event.id} className="btn btn-warning">m</Link>
                                <button onClick={()=>confirmeDelete(event.id)} className="btn btn-danger">s</button>
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
