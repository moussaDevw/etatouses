import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import swal from 'sweetalert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from '../LayoutAdmin'
import { Link } from 'react-router-dom';

export const ListCategory = (props) =>{
    const [categorys,setCategorys] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/categorie/'
        })
        .then(response=>setCategorys(response.data))
        .catch(e=>console.log(e))
    },[])
    // fonction pour supprimer un categorys
    const deleteProduit = (id) => {
        axios({
            method:'DELETE',
            url:`https://apptatout.herokuapp.com/categorie/list/${id}/`,
        })
        .then(response=>{
            toast.success("suppression reussie")
            setCategorys(categorys.filter((product) => product.id !== id))
        })
      }
      const confirmeDelete = (id)=>{
        {swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce category!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteProduit(id)
              swal("ok! Votre category a été supprimé!", {
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
          <p>Listes categorys</p>
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
                categorys.length <= 0 ? (
                  <h1 className="color-danger">La liste des categories est vide ajouter quelques uns</h1>
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
                      categorys.map(category=>(
                        <tr>
                            <td>{category.id}</td>
                            <td><img src={"https://apptatout.herokuapp.com"+category.image} width="50px" height="50px"/></td>
                            <td>{category.nom_cat}</td>
                            <td>
                                <Link to={"/admins/modifier-categorie"+category.id} className="btn btn-warning"><i class="fas fa-edit"></i></Link>
                                <button onClick={()=>confirmeDelete(category.id)} className="btn btn-danger"><i class="fas fa-eraser"></i></button>
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
