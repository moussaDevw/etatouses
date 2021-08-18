import axios from 'axios'
import React,{Fragment, useEffect,useState} from 'react'
import { LayoutAdmin } from '../LayoutAdmin'

export const ListBoutiqueActif = () =>{
    const [boutiques,setBoutique] = useState([])
    const [v,setV] = useState(true)
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/api/users/'
        })
        .then(response=>{
            setBoutique(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    return (
        <Fragment>
            <main class="app-content">
                <LayoutAdmin />
      <div class="app-title">
        <div>
          <h1><i class="fa fa-th-list"></i> Boutique active</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"></li>
          <li class="breadcrumb-item active"><a href="#">Liste des boutiques active</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="clearfix"></div>
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title"></h3>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom utilisateur</th>
                    <th>Nom Boutique</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   {
                       boutiques.map(boutique=>{
                           if(boutique.is_celler === true){
                               return(
                                   <tr>
                                       <td>{boutique.id}</td>
                                       <td>{boutique.user_name}</td>
                                       <td>{boutique.nom_boutique}</td>
                                       <td>{boutique.is_celler ? 'Active' : 'Desactive'}</td>
                                       <td class="toggle-flip">
                                            <label>
                                            <input type="checkbox"/><span class="flip-indecator" data-toggle-on="ON"
                                                        data-toggle-off="OFF"></span>
                                            </label>
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