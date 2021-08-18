import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from '../LayoutAdmin'
import axios from 'axios'

export const AddCategory = () => {
  // initialiser la formulare de category
  const initialFormCategori = Object.freeze({
    nom_cat:'',
    image:''
  })
  const [category,setCategory] = useState(initialFormCategori)
  const [categories,setCategories] = useState([])
  // pour ajouter un category
  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://apptatout.herokuapp.com/categorie'
    })
    .then(response=>{
      setCategories(response.data)
    })
    .catch(e=>{
      console.log('error')
    })
  },[])
  const {nom_cat,image} = category
  const handleChangeCategori = (e) =>{
    if(e.target.name === "image")
    {
      setCategory({...category, [e.target.name]: e.target.files[0], })
    }else{
      setCategory({...category, [e.target.name]: e.target.value, })
    }
  }
  const handleSubmitCategori = (e) =>{
    e.preventDefault()
    const myForm = document.getElementById('myForm')
    let datas = new FormData(myForm)
    datas.append('nom_cat',nom_cat)
    datas.append('image',image)
    
    axios({
      method:'POST',
      url:'https://apptatout.herokuapp.com/categorie_add/',
      data: datas
    })
    .then(response=>{
      toast.success(nom_cat + "est ajouté avec success")
      setCategory(initialFormCategori)
    })
    .catch(e=>console.log('not ok'))
  }
  
  // sous categories
  const initialFormSousCategori = Object.freeze({
    designation:'',
    categorie:''
  })
  const [sousCategory,setSousCategory] = useState(initialFormSousCategori)
  const {designation,categorie} = sousCategory
  // handlechange pour la sous categori
  const handleChangeSousCategori = (name) =>e =>{
    setSousCategory({...sousCategory,[name]:e.target.value})
  }
  const handleSubmitSousCategori = (e) =>{
    e.preventDefault()
    let datas = new FormData()
    datas.append('designation',designation)
    datas.append('categorie',categorie)
    
    axios({
      method:'POST',
      url:'https://apptatout.herokuapp.com/soucat_add/',
      data: datas
    })
    .then(response=>{
      toast.success(designation + " est ajouté avec success")
      setSousCategory(initialFormSousCategori)
    })
    .catch(e=>console.log('not ok'))
  }
 
    return(
        <Fragment>
            <body className="app sidebar-mini rtl">
              <LayoutAdmin />
              <main className="app-content">
                <div className="app-title">
                  <div>
                    <h1><i className="fa fa-edit"></i> Ajouter categorie</h1>
                    <p>Ajouter un categori</p>
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
                      <h3 className="tile-title">Ajouter un categorie</h3>
                      <div className="tile-body">
                      <ToastContainer />
                        <form id="myForm" onSubmit={handleSubmitCategori}>
                          <div className="form-group">
                            <label className="control-label">Nom Categorie</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Nom categorie"
                              name='nom_cat'
                              value={nom_cat}
                              onChange={handleChangeCategori}
                            />
                          </div>
                          <div className="form-group">
                            <label className="control-label">Image categori</label>
                            <input
                              className="form-control"
                              type="file"
                              name="image"
                              onChange={handleChangeCategori}
                            />
                          </div>
                          <div className="tile-footer">
                          <button className="btn btn-primary" type="submit">
                            <i className="fa fa-fw fa-lg fa-check-circle"></i>Ajouter
                          </button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                <div className="tile">
                  <h3 className="tile-title">Ajouter un sous-categorie</h3>
                  <div className="tile-body">
                  <form onSubmit={handleSubmitSousCategori}>
                      <div className="form-group">
                        <label className="control-label">Nom Sous categorie</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={handleChangeSousCategori('designation')}
                          placeholder="Nom sous-categorie"
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Image sous-categori</label>
                        <select
                          className="form-control"
                          type="text"
                          onChange={handleChangeSousCategori('categorie')}
                        >
                          <option>veuillez choisir un categories</option>
                          {categories.map(categorie=>(
                            <option key={categorie.id} value={categorie.id}>{categorie.nom_cat}</option>
                          ))}
                        </select>
                      </div>
                      <div className="tile-footer">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-fw fa-lg fa-check-circle"></i>Ajouter</button>
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