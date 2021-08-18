import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from '../LayoutAdmin'
import axios from 'axios'
import { useParams } from 'react-router';

export const UpdateSousCategory = () => {
    let {id} = useParams()
    const initialFormSousCategori = Object.freeze({
        designation:'',
        categorie:''
      })
      const [categories,setCategories] = useState([])
      const [sousCategory,setSousCategory] = useState(initialFormSousCategori)
      const {designation,categorie} = sousCategory
  useEffect(()=>{
    axios({
        method:'GET',
        url:`https://apptatout.herokuapp.com/soucat/list/${id}/`
    })
    .then(response=>{
        setSousCategory(response.data)
    })
    .catch(e=>console.log('not ok'))
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
  
  const handleChangeSousCategori = (name) =>e =>{
    setSousCategory({...sousCategory,[name]:e.target.value})
  }
  const handleSubmitSousCategori = (e) =>{
    e.preventDefault()
    let datas = new FormData()
    datas.append('designation',designation)
    datas.append('categorie',categorie)
    
    axios({
      method:'PUT',
      url:`https://apptatout.herokuapp.com/soucat/list/${id}/`,
      data: datas
    })
    .then(response=>{
      toast.success(designation + " Modifier avec success")
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
                    <h1><i className="fa fa-edit"></i> Modifier sous categorie</h1>
                    <p>Modifier sous un categori</p>
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
                      <h3 className="tile-title">Modifier sous categorie</h3>
                      <div className="tile-body">
                      <ToastContainer />
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                <div className="tile">
                  <h3 className="tile-title">Modifier sous un sous-categorie</h3>
                  <div className="tile-body">
                  <form onSubmit={handleSubmitSousCategori}>
                      <div className="form-group">
                        <label className="control-label">Nom Sous categorie</label>
                        <input
                          className="form-control"
                          type="text"
                          value={designation}
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
                          <option>{categorie}</option>
                          {categories.map(categorie=>(
                            <option key={categorie.id} value={categorie.id}>{categorie.nom_cat}</option>
                          ))}
                        </select>
                      </div>
                      <div className="tile-footer">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-fw fa-lg fa-check-circle"></i>Modifier sous</button>
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