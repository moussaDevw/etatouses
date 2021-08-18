import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Layout} from '../menu/Layout'
import {Footer} from '../pageAcceuil/Footer'
export const FiltreProduits = () =>{
    const [categories,setCategories] = useState([])
    const [produits,setProduits] = useState([])
    const [checked,setChecked] = useState([])
    const [myFilters,setMyFilters] = useState({
        filters:{category:[]}
    })
    const [value,setValue] = useState(0)
    const handleFilter = (filters,filterBy) =>{
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters
        loadResultFilters(myFilters.filters)
        setMyFilters(newFilters)
    }
    const handleChange = e =>{
        handleFilter(e.target.value)
        setValue(e.target.value)
    }
    const handleToggle = c => ()=>{
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if(currentCategoryId === -1){
            newCheckedCategoryId.push(c)
        }else{
            newCheckedCategoryId.splice(currentCategoryId,1)
        }
        // console.log(newCheckedCategoryId)
        setChecked(newCheckedCategoryId)
        handleFilter(newCheckedCategoryId,'category')
    }
    var produitsFilters = []
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/list_produit/'
        })
        .then(response=>{
            setProduits(response.data)
        })
        .catch(e=>{
            console.log(e)
        })
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/categorie/'
        })
        .then(response=>{
            setCategories(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    // console.log(categories.map(produit=>{
    //     if(categorie.categorie.id === 13){
    //         console.log(categorie)
    //     }
    // }))
     const loadResultFilters = newFilters =>{
        // console.log(newFilters)
     }
    // console.log(checked)
    return(
        <Fragment>
            <Layout />
            <section className="breadcrumbs-wrapper pt-50 pb-50 bg-primary-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                                <div className="breadcrumb-left">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Domicile</font></font></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Catégorie</font></font></li>
                                    </ol>
                                </div>
                                <div className="breadcrumb-right">
                                    <h5 className="heading-5 font-weight-500"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Catégorie</font></font></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="category-wrapper pt-50">
                <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                    <div className="filter-style-1 mt-0">
                        <div className="filter-title">
                            <h4 className="title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Filtre</font></font></h4>
                        </div>
                        {/* <div className="filter-btn">
                            <a className="main-btn primary-btn" href="javascript:void(0)"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Réinitialiser</font></font></a>
                        </div> */}
                    </div>
                   
                    <div className="filter-style-3">
                   
                    <div className="collapse show" id="type">
                    <div className="filter-type">
                        <ul>
                            {
                                categories.map(categorie=>(
                                    <li className="mb-3" key={categorie.id}>
                                        <div className="type-check">
                                            <input type="checkbox" onChange={handleToggle(categorie.id)} value={checked.indexOf(categorie.id === -1)} id="type-1" />
                                            <label for="type-1"><span></span><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{categorie.nom_cat}</font></font></label>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    </div>
                    </div>
                    
                    </div>
                    <div className="col-lg-10">
                    <div className="row">
                    <div className="col-lg-12">
                    <div className="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                        <div className="breadcrumb-left">
                            <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Affichage des résultats 01-09 sur 17</font></font></p>
                        </div>
                        <div className="breadcrumb-right">
                            <ul className="breadcrumb-list-grid nav nav-tabs border-0" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                        <i className="mdi mdi-view-list"></i>
                                    </a>
                                </li>
                            <li className="nav-item" role="presentation">
                                <a className="active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    <i className="mdi mdi-view-grid"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">

                    <div className="col-lg-12">
                    
                    </div>
                    </div>
                    </div>
                    <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    {
                            produits.map(produit=>{
                                checked.map(checkeds=>{
                                    // console.log(produit.categorie.id,"=>",checkeds)
                                    if(produit.categorie.id === checkeds){
                                        produitsFilters.push(produit)
                                    }
                                })
                            })
                        }
                    <div className="row">
                        
                    {
                        produitsFilters.length >= 1 ? 
                        (
                            produitsFilters.map(produit=>(
                                <div className="col-lg-4 col-sm-4">
                        <div className="product-style-1 mt-30">
                            <div className="product-image">
                                <div className="product-active slick-initialized slick-slider"><span className="prev slick-arrow slick-disabled" aria-disabled="true"><i className="mdi mdi-chevron-left"></i></span>
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{opacity: '1', width: '828px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                            <div className="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '414px'}} tabindex="0">
                                                <img src={"https://apptatout.herokuapp.com"+produit.photo} alt="product" />
                                            </div>
                                            <div className="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '414px'}} tabindex="-1">
                                                <img src={"https://apptatout.herokuapp.com"+produit.photo} alt="product" />
                                            </div>
                                        </div>
                                    </div>

                                    <span className="next slick-arrow" aria-disabled="false"><i className="mdi mdi-chevron-right"></i></span>
                                </div>
                                <a className="add-wishlist" href="javascript:void(0)">
                                <i className="mdi mdi-heart-outline"></i>
                                </a>
                            </div>
                            <div className="product-content text-center">
                                <h4 className="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{produit.designation}</font></font></a></h4>
                                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{produit.boutique_nom}</font></font></p>
                                <a href="javascript:void(0)" className="main-btn secondary-1-btn">
                                <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                399 $
                                </font></font></a>
                            </div>
                        </div>
                    </div>
                            ))
                        ) :
                        (
                            produits.map(produit=>(
                                <div className="col-lg-4 col-sm-4">
                        <div className="product-style-1 mt-30">
                            <div className="product-image">
                                <div className="product-active slick-initialized slick-slider"><span className="prev slick-arrow slick-disabled" aria-disabled="true"><i className="mdi mdi-chevron-left"></i></span>
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{opacity: '1', width: '828px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                            <div className="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '414px'}} tabindex="0">
                                                <img src={"https://apptatout.herokuapp.com"+produit.photo} alt="product" />
                                            </div>
                                            <div className="product-item slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '414px'}} tabindex="-1">
                                                <img src={"https://apptatout.herokuapp.com"+produit.photo} alt="product" />
                                            </div>
                                        </div>
                                    </div>

                                    <span className="next slick-arrow" aria-disabled="false"><i className="mdi mdi-chevron-right"></i></span>
                                </div>
                                <a className="add-wishlist" href="javascript:void(0)">
                                <i className="mdi mdi-heart-outline"></i>
                                </a>
                            </div>
                            <div className="product-content text-center">
                                <h4 className="title"><a href="product-details-page.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{produit.designation}</font></font></a></h4>
                                <p><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>{produit.boutique_nom}</font></font></p>
                                <a href="javascript:void(0)" className="main-btn secondary-1-btn">
                                <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>
                                399 $
                                </font></font></a>
                            </div>
                        </div>
                    </div>
                            ))
                        )
                            
                        }
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}