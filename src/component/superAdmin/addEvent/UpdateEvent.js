import React, { Fragment, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { LayoutAdmin } from '../LayoutAdmin'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
export const UpdateEvent = () => {
    let {id} = useParams()
    const initialFormState = Object.freeze({
        titre:'',
        designation:'',
        affiche:'',
        affiche2:'',
        affiche3:'',
      })
  useEffect(()=>{
    axios({
        method:'GET',
        url:`https://apptatout.herokuapp.com/event/list/${id}/`
    })
    .then(response=>{
        setEvents(response.data)
    })
    .catch(e=>console.log(e))
  },[])

  const [events,setEvents] = useState(initialFormState)
  const {
    titre,
    description,
    affiche,
    affiche2,
    affiche3,
  } = events
  const handleChange = e => {
    if(e.target.name === "affiche")
    {
      setEvents({...events, [e.target.name]: e.target.files[0], })
    }else if(e.target.name === "affiche2"){
      setEvents({...events, [e.target.name]: e.target.files[0], })
    }
    else if(e.target.name === "affiche3"){
      setEvents({...events, [e.target.name]: e.target.files[0], })
    }
    else{
      setEvents({...events, [e.target.name]: e.target.value, })
      console.log('le reste')
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('titre',titre)
    formData.append('description',description)
    formData.append('affiche',affiche)
    formData.append('affiche2',affiche2)
    formData.append('affiche3',affiche3)
    axios({
      method:'PUT',
      url:`https://apptatout.herokuapp.com/event/list/${id}/`,
      data: formData
    })
    .then(response=>{
      toast.success(`${titre} modifié avec succées`)
      setEvents(initialFormState)
    })
    .catch(error=>console.log(error))
  }
    return(
        <Fragment>
          <ToastContainer />
            <body class="app sidebar-mini rtl">
    <LayoutAdmin />
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-edit"></i> Modifier Evenement</h1>
          <p></p>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item">Evenement</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="tile">
            <h3 class="tile-title">Modifier un Evenement</h3>
            <div class="tile-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label class="control-label">Titre evenement</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Titre d'evenement"
                    value={titre}
                    name="titre"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">description</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="description"
                    value={description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">image</label>
                  <input
                    class="form-control"
                    type="file"
                    name="affiche"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">image</label>
                  <input
                    class="form-control"
                    type="file"
                    name="affiche2"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">image</label>
                  <input
                    class="form-control"
                    type="file"
                    name="affiche3"
                    onChange={handleChange}
                  />
                </div>
                <div class="tile-footer">
              <button class="btn btn-primary" type="submit">
                <i class="fa fa-fw fa-lg fa-check-circle"></i>Modifier</button
              >&nbsp;&nbsp;&nbsp;<Link to="/admins/list-event" class="btn btn-secondary" href="#"
                ><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</Link
              >
            </div>
              </form>
            </div>
          </div>
        </div>
        <div class="clearix"></div>
      </div>
    </main>
    </body>
        </Fragment>
    )
}