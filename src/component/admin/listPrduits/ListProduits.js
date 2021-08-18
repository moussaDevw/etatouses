import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {isAuth,signout} from '../../api/apiAuth'
import jwt from 'jsonwebtoken'
import { Layout } from '../Layout'

export const ListProduits = () =>{
    const [produits,setProduits] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/produit/'
        })
        .then(response=>setProduits(response.data))
        .catch(e=>console.log(e))
    },[])
    // fonction pour supprimer un produits
    const deleteProduit = (id) => {
        axios({
            method:'DELETE',
            url:`https://apptatout.herokuapp.com/produit/list/${id}/`,
        })
        .then(response=>{
            toast.success("suppression reussie")
            setProduits(produits.filter((product) => product.id !== id))
        })
      }
      const confirmeDelete = (id)=>{
        {swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce fichier!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteProduit(id)
              swal("ok! Votre produit a été supprimé!", {
                icon: "success",
              });
            } else {
              swal("Votre produit est en sécurité!");
            }
          })}
    }
    return(
        <Fragment>
            <Layout />
            <ToastContainer />
            <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-th-list"></i> Produits</h1>
          <p>Listes produits</p>
        </div>
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item">Produits</li>
          <li class="breadcrumb-item active"><a href="#">Produits</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">
              <table class="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Nom</th>
                    <th>Date creation</th>
                    <th>Quantité</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                    produits.map(produit=>{
                       if(produit.user === jwt.decode(isAuth()).id){
                        return(
                          <tr>
                          <td>{produit.id}</td>
                          <td><img src={"https://apptatout.herokuapp.com"+produit.photo} width="50px" height="50px"/></td>
                          <td>{produit.designation}</td>
                          <td>{produit.date_creation}</td>
                          <td>{produit.qte_produit}</td>
                          <td>
                              <Link to={"/modifier-produit" + produit.id} className="btn btn-warning">m</Link>
                              <button onClick={()=>confirmeDelete(produit.id)} className="btn btn-danger">s</button>
                          </td>
                        </tr>
                        )
                       }
                    })
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
        </Fragment>
    )
}
