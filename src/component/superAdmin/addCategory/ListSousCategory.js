import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from '../LayoutAdmin'

export const ListSousCategory = () =>{
    const [sousCategorys,setSousCategorys] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/soucat/'
        })
        .then(response=>setSousCategorys(response.data))
        .catch(e=>console.log(e))
    },[])
    // fonction pour supprimer un sousCategorys
    const deleteProduit = (id) => {
        axios({
            method:'DELETE',
            url:`https://apptatout.herokuapp.com/soucat/list/${id}/`,
        })
        .then(response=>{
            toast.success("suppression reussie")
            setSousCategorys(sousCategorys.filter((product) => product.id !== id))
        })
      }
      const confirmeDelete = (id)=>{
        {swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce sous category!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteProduit(id)
              swal("ok! Votre sous category a été supprimé!", {
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
          <p>Listes sous categories</p>
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
                    sousCategorys.length <= 0 ? 
                    (
                        <h1>uh</h1>
                    ) : 
                    (
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
                    sousCategorys.map(category=>(
                        <tr>
                            <td>{category.id}</td>
                            <td><img src={"https://apptatout.herokuapp.com"+category.image} width="50px" height="50px"/></td>
                            <td>{category.designation}</td>
                            <td>
                                <Link to={"/admins/modifier-sous-Categorys"+category.id} className="btn btn-warning">m</Link>
                                <button onClick={()=>confirmeDelete(category.id)} className="btn btn-danger">s</button>
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
