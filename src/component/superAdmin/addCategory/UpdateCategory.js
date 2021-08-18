import React, { Fragment,useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutAdmin } from '../LayoutAdmin'

export const UpdateCategory = () =>{
  let {id} = useParams()
  const initialFormCategori = Object.freeze({
    nom_cat:'',
    image:''
  })
    const [categories,setCategories] = useState(initialFormCategori)
    const {nom_cat,image} = categories
    useEffect(()=>{
      axios({
        method:'GET',
        url:`https://apptatout.herokuapp.com/categorie/list/${id}/`
      })
      .then(response=>{
        setCategories(response.data)
      })
      .catch(e=>console.log(e))
    },[])
    const handleChangeCategori = e =>{
        if(e.target.name === "image")
        {
          setCategories({...categories, [e.target.name]: e.target.files[0], })
        }else{
          setCategories({...categories, [e.target.name]: e.target.value, })
        }
      }
      const handleSubmit = e =>{
        e.preventDefault()
        let datas = new FormData()
        datas.append('nom_cat',nom_cat)
        datas.append('image',image)
        axios({
          method:'PUT',
          url:`https://apptatout.herokuapp.com/categorie/list/${id}/`,
          data: datas
        })
        .then(response=>{
          console.log("ok")
          toast.success("Modification reussie")
        })
        .catch(e=>console.log('not ok'))
      }
    return(
        <Fragment>
          <body className="app sidebar-mini rtl">
              <LayoutAdmin />
              <ToastContainer />
              <main className="app-content">
                <div className="app-title">
                  <div>
                    <h1><i className="fa fa-edit"></i> Modifier categorie</h1>
                    <p>Modifier un categori</p>
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
                      <h3 className="tile-title">Modifier un categorie</h3>
                      <div className="tile-body">
                      <ToastContainer />
                        <form id="myForm" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label className="control-label">Nom Categorie</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Nom categorie"
                              name="nom_cat"
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
                            <i className="fa fa-fw fa-lg fa-check-circle"></i>Modifier
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