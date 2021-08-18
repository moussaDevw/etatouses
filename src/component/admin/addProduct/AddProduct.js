import React, { Fragment, useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import {isAuth} from '../../api/apiAuth'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '../Layout'
export const AddProduct = () => {
  const [categories,setCategories] = useState([])
  const [sousCategorie,setSousCategorie] = useState([])
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
    axios({
      method:'GET',
      url:'https://apptatout.herokuapp.com/soucat'
    })
    .then(response=>{
      setSousCategorie(response.data)
    })
    .catch(e=>console.log('e'))
  },[])

  if(isAuth()){
    var isAuths = jwt.decode(isAuth())
  }
  const initialFormState = Object.freeze({
    designation:'',
    qte_produit:'',
    prix:'',
    caracteristique:'',
    boutique_nom:isAuths.nom_boutique,
    categorie:'',
    sous_categorie:'',
    user:isAuths.id,
    photo:'',
    photo2:'',
    photo3:'',
    photo4:'',
    photo5:'',
  })
  const [products,setProducts] = useState(initialFormState)
  const {
    designation,
    qte_produit,
    prix,
    caracteristique,
    boutique_nom,
    categorie,
    sous_categorie,
    user,
    photo,
    photo2,
    photo3,
    photo4,
    photo5,
  } = products
  const handleChange = e => {
    if(e.target.name === "photo")
    {
      setProducts({...products, [e.target.name]: e.target.files[0], })
    }else if(e.target.name === "photo2"){
      setProducts({...products, [e.target.name]: e.target.files[0], })
    }
    else if(e.target.name === "photo3"){
      setProducts({...products, [e.target.name]: e.target.files[0], })
    }
    else if(e.target.name === "photo4"){
      setProducts({...products, [e.target.name]: e.target.files[0], })
    }
    else if(e.target.name === "photo5"){
      setProducts({...products, [e.target.name]: e.target.files[0], })
    }
    else{
      setProducts({...products, [e.target.name]: e.target.value, })
    }
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('designation',designation)
    formData.append('qte_produit',qte_produit)
    formData.append('prix',prix)
    formData.append('caracteristique',caracteristique)
    formData.append('boutique_nom',boutique_nom)
    formData.append('categorie',categorie)
    formData.append('sous_categorie',sous_categorie)
    formData.append('user',user)
    formData.append('photo',photo)
    formData.append('photo2',photo2)
    formData.append('photo3',photo3)
    formData.append('photo4',photo4)
    formData.append('photo5',photo5)
    axios({
      method:'POST',
      url:`https://apptatout.herokuapp.com/produit_add/`,
      data: formData
    })
    .then(response=>{
      toast.success(`${designation} ajouté avec success`)
      setProducts(initialFormState)
    })
    .catch(e=>{
      toast.error(e)
      console.log(e)
    })
  }
    return(
        <Fragment>
          <ToastContainer />
            <body className="app sidebar-mini rtl">
    <Layout />
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1><i className="fa fa-edit"></i> AJouter Produits</h1>
          <p></p>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
          <li className="breadcrumb-item">Forms</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">AJouter un produits</h3>
            <div className="tile-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="control-label">Nom produit</label>
                  <input
                    className="form-control"
                    type="text"
                    value={`${designation}`}
                    placeholder="Nom produit"
                    name="designation"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Quantité</label>
                  <input
                    className="form-control"
                    type="number"
                    value={qte_produit}
                    placeholder="Quantité"
                    name="qte_produit"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Prix</label>
                  <input
                    className="form-control"
                    type="number"
                    value={prix}
                    placeholder="prix"
                    name="prix"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter your address"
                    value={caracteristique}
                    name="caracteristique"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="control-label">Nom boutique</label>
                  <input
                    className="form-control"
                    type="hidden"
                    value={boutique_nom}
                    name="boutique_nom"
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Categorie</label>
                  <select
                    className="form-control"
                    type="text"
                    value={categorie}
                    name="categorie"
                    onChange={handleChange}
                  >
                     <option>veuillez choisir un categories</option>
                    {categories.map(categorie=>(
                      <option key={categorie.id} value={(categorie.id)}>{categorie.nom_cat}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="control-label">Sous Categorie</label>
                  <select
                    className="form-control"
                    type="text"
                    value={sous_categorie}
                    name="sous_categorie"
                    value={sous_categorie}
                    onChange={handleChange}
                  >
                    <option>veuillez choisir un sous categories</option>
                    {sousCategorie.map(sousCategori=>{
                      if(sousCategori.categorie === Number(categorie)){
                        return <option key={sousCategori.id} value={sousCategori.id}>{sousCategori.designation}</option>
                      }
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="hidden"
                    value={user}
                    name="user"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="photo"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="photo2"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="photo3"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="photo4"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="photo5"
                    onChange={handleChange}
                  />
                </div>
                <div className="tile-footer">
              <button className="btn btn-primary" type="submit">
                <i className="fa fa-fw fa-lg fa-check-circle"></i>Register</button
              >&nbsp;&nbsp;&nbsp;<a className="btn btn-secondary" href="#"
                ><i className="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a
              >
            </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">List Produits</h3>
            <div className="tile-body">
           </div>

          </div>
        </div>
        <div className="clearix"></div>
      </div>
    </main>
    </body>
        </Fragment>
    )
}