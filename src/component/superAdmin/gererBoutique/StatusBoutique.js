import React,{Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import { LayoutAdmin } from '../LayoutAdmin'
export const StatusBoutique = () =>{
    let {id} = useParams()
    const [clients,setClients] = useState([])
    const {user_name,first_name,last_name,telephone,email,nom_boutique,adresse_boutique,tel_boutique,is_celler} = clients
    useEffect(()=>{
        axios({
            method:'GET',
            url:`https://apptatout.herokuapp.com/api/users/list/${id}/`
        })
        .then(response=>{
            setClients(response.data)
        })
        .catch(e=>console.log(e))
        console.log(document.getElementById("statusBoutique").target)
    },[])
    const handleChange = e =>{
        const {value,name} = e.target
        setClients({...clients,[name]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios({
            method:'PUT',
            url:`https://apptatout.herokuapp.com/api/users/list/${id}/`,
            data:{user_name,first_name,last_name,telephone,email,nom_boutique,adresse_boutique,tel_boutique,is_celler}
        })
        .then(response=>{
            console.log("ok")
            toast.success("activer")
        })
        .catch(e=>{
            console.log('not ok')
        })
    }
    return(
        <Fragment>
             <body className="app sidebar-mini rtl">
              <LayoutAdmin />
              <main className="app-content">
                <div className="app-title">
                  <div>
                    <h1><i className="fa fa-edit"></i> Status clients</h1>
                    <p>Status Client</p>
                  </div>
                  <ul className="app-breadcrumb breadcrumb">
                    <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
                    <li className="breadcrumb-item">Forms</li>
                    <li className="breadcrumb-item"><a href="#"></a></li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="tile">
                      <h3 className="tile-title">Status Cliente</h3>
                      <div className="tile-body">
                      <ToastContainer />
                        <form id="myForm" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={user_name}
                              placeholder="Nom categorie"
                              name='user_name'
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={first_name}
                              name="first_name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={last_name}
                              placeholder="Nom categorie"
                              name='last_name'
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={telephone}
                              name="telephone"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={email}
                              placeholder="Nom categorie"
                              name='email'
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={nom_boutique}
                              name="nom_boutique"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={adresse_boutique}
                              placeholder="Nom categorie"
                              name='adresse_boutique'
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="hidden"
                              value={tel_boutique}
                              name="tel_boutique"
                              onChange={handleChange}
                            />
                             <input
                             id="statusBoutique"
                              className="checkbox-control"
                              type="checkbox"
                              name="is_celler"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="tile-footer">
                          <button className="btn btn-primary" type="submit">
                            <i className="fa fa-fw fa-lg fa-check-circle"></i>{is_celler ? "Desactiver" : "Activer"}
                          </button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
            </div>
          </main>
          </body>
        </Fragment>
    )
}