import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Layout} from '../menu/Layout'
import axios from 'axios'
import {addItem} from '../Boutique/cardHelpers'
import {Footer} from '../pageAcceuil/Footer'
import './styleCart.css'
export const ArticleFilter = () =>{
    let { id } = useParams()
    const [articles,setArticles] = useState([])
    const [sousCats,setSousCats] = useState([])
    const [checked,setChecked] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/list_produit/'
        })
        .then(response=>{
            setArticles(response.data)
        })
        .catch(e=>console.log(e))
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/soucat/'
        })
        .then(response=>setSousCats(response.data))
        .catch(e=>console.log(e))
    },[])
    const handleToggle = c => ()=>{
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if(currentCategoryId === -1){
            newCheckedCategoryId.push(c)
        }else{
            newCheckedCategoryId.splice(currentCategoryId,1)
        }
        setChecked(newCheckedCategoryId)
    }
    articles.map(article=>console.log(article))
    console.log(checked)
    var produitsFilters = []
    return(
        <Fragment>
        <Layout />
        <section class="category-wrapper pt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="filter-style-1 mt-0">
                            <div class="filter-title">
                                <h4 class="title"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Filtre</font></font></h4>
                            </div>
                            <div class="filter-btn">
                                <a class="main-btn primary-btn" href="javascript:void(0)"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Réinitialiser</font></font></a>
                            </div>
                        </div>
                        <div class="filter-style-2">
                            <div class="filter-title">
                                <a class="title" data-toggle="collapse" href="#pricingOne" role="button" aria-expanded="false"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                Gamme de prix
                                </font></font></a>
                            </div>
                            <div class="collapse show" id="pricingOne">
                                <div class="price-range">
                                <div class="price-amount">
                                <div class="amount-input">
                                <label><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Prix ​​minimum</font></font></label>
                                <input type="text" id="minAmount" />
                                </div>
                                <div class="amount-input">
                                <label><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Prix ​​maximum</font></font></label>
                                <input type="text" id="maxAmount" />
                                </div>
                                </div>
                                <div id="slider-range" class="slider-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style={{left: "15%", width: "45%"}}></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{left: "15%"}}></span><span class="ui-slider-handle ui-corner-all ui-state-default" style={{left: "60%"}}></span></div>
                                </div>
                            </div>
                        </div>
                    <div class="filter-style-3">
                        <div class="filter-title">
                            <a class="title" data-toggle="collapse" href="#type" role="button" aria-expanded="false"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                            Taper
                            </font></font></a>
                        </div>
                        <div class="collapse show" id="type">
                            <div class="filter-type">
                                <ul>
                                    {
                                        sousCats.map(sousCat=>{
                                            if(sousCat.categorie === Number(id))
                                            {
                                            return(
                                                <li key={sousCat.id}>
                                                <div class="type-check">
                                                    <input type="checkbox" onChange={handleToggle(sousCat.id)} value={checked.indexOf(sousCat.id === -1)} id={sousCat.id} />
                                                    <label for={sousCat.id}><span></span><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}> {sousCat.designation}</font></font></label>
                                                </div>
                                            </li>
                                            )
                                            }
                                        })
                                    }
                                    {
                                        articles.map(article=>{
                                            checked.map(checke=>{
                                                if(article.sous_categorie.id === checke){
                                                    produitsFilters.push(article)
                                                }
                                            })
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumbs-style breadcrumbs-style-1 d-md-flex justify-content-between align-items-center">
                                <div class="breadcrumb-left">
                                    <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Affichage des résultats 01-09 sur 17</font></font></p>
                                </div>
                                <div class="breadcrumb-right">
                                    <ul class="breadcrumb-list-grid nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                            <i class="mdi mdi-view-list"></i>
                                            </a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                            <i class="mdi mdi-view-grid"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-lg-12">
                                        {
                                            produitsFilters.length >= 1 ? (
                                                produitsFilters.map(produitsFilter=>{
                                                        return(
                                                            <div class="product-style-7 mt-30">
                                                <div class="product-image">
                                                    <div class="product-active slick-initialized slick-slider">
                                                        <div class="slick-list draggable">
                                                            <div class="slick-track" style={{opacity: 1, width: "480px", transform: 'translate3d(0px, 0px, 0px)'}}>
                                                                <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: "240px"}}>
                                                                    <img src={"https://apptatout.herokuapp.com"+produitsFilter.photo} alt="product" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <ul class="product-meta">
                                                        <li>
                                                            <a class="add-wishlist" href="javascript:void(0)">
                                                            <i class="mdi mdi-heart-outline"></i><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                                            {produitsFilter.boutique_nom}
                                                            </font></font></a>
                                                        </li>
                                                        <li>
                                                            <span><i class="mdi mdi-star"></i><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}> </font></font></span>
                                                        </li>
                                                    </ul>
                                                    <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{produitsFilter.designation}</font></font></a></h4>
                                                    <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Référence 1102</font></font></p>
                                                    <span class="price"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{produitsFilter.prix}</font></font></span>
                                                    <Link to="#" onClick={()=>addItem(produitsFilter,produitsFilter.prix)} href="javascript:void(0)" class="main-btn primary-btn">
                                                    <img src="assets/images/icon-svg/cart-4.svg" alt="" /><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                                    Ajouter au chariot
                                                    </font></font></Link>
                                                </div>
                                            </div>
                                                    )
                                                })
                                            ) :
                                            (
                                                articles.map(article=>{
                                                    if(article.categorie.id === Number(id)){
                                                        return(
                                                            <div class="product-style-7 mt-30">
                                                <div class="product-image">
                                                    <div class="product-active slick-initialized slick-slider">
                                                        <div class="slick-list draggable">
                                                            <div class="slick-track" style={{opacity: 1, width: "480px", transform: 'translate3d(0px, 0px, 0px)'}}>
                                                                <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: "240px"}}>
                                                                    <img src={"https://apptatout.herokuapp.com"+article.photo} alt="product" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-content">
                                                    <ul class="product-meta">
                                                        <li>
                                                            <a class="add-wishlist" href="javascript:void(0)">
                                                            <i class="mdi mdi-heart-outline"></i><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                                            {article.boutique_nom}
                                                            </font></font></a>
                                                        </li>
                                                        <li>
                                                            <span><i class="mdi mdi-star"></i><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}> </font></font></span>
                                                        </li>
                                                    </ul>
                                                    <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{article.designation}</font></font></a></h4>
                                                    <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Référence 1102</font></font></p>
                                                    <span class="price"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{article.prix}</font></font></span>
                                                    <Link to="#" onClick={()=>addItem(article,article.prix)} href="javascript:void(0)" class="main-btn primary-btn">
                                                    <img src="assets/images/icon-svg/cart-4.svg" alt="" /><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                                    Ajouter au chariot
                                                    </font></font></Link>
                                                </div>
                                            </div>
                                                        )
                                                    }
                                                })
                                            )
                                        }
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        {
                                            produitsFilters.length >= 1 ? (
                                                produitsFilters.map(produitsFilter=>{
                                                    if(produitsFilter.categorie.id === Number(id)){
                                                        return(
                                                            <div class="col-lg-6 col-sm-6">
                                                <div class="product-style-1 mt-30">
                                                    <div class="product-image">
                                                        <div class="product-active slick-initialized slick-slider">
                                                            <div class="slick-list draggable">
                                                                <div class="slick-track" style={{opacity: 1, width: "828px", transform: 'translate3d(0px, 0px, 0px)'}}>
                                                                    <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: "414px"}}>
                                                                    <img src={"https://apptatout.herokuapp.com"+produitsFilter.photo} alt="product" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a class="add-wishlist" href="javascript:void(0)">
                                                            <i class="mdi mdi-heart-outline"></i>
                                                        </a>
                                                    </div>
                                                    <div class="product-content text-center">
                                                        <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{produitsFilter.designation}</font></font></a></h4>
                                                        <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{produitsFilter.boutique_nom}</font></font></p>
                                                        <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                                                        <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                                        {produitsFilter.prix}
                                                        </font></font></a>
                                                    </div>
                                                </div>
                                            </div>
                                                        )
                                                    }
                                                })
                                            ) : (
                                                articles.map(article=>{
                                                    if(article.categorie.id === Number(id)){
                                                        return(
                                                            <div class="col-lg-6 col-sm-6">
                                                <div class="product-style-1 mt-30">
                                                    <div class="product-image">
                                                        <div class="product-active slick-initialized slick-slider">
                                                            <div class="slick-list draggable">
                                                                <div class="slick-track" style={{opacity: 1, width: "828px", transform: 'translate3d(0px, 0px, 0px)'}}>
                                                                    <div class="product-item active slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width: "414px"}}>
                                                                    <img src={"https://apptatout.herokuapp.com"+article.photo} alt="product" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a class="add-wishlist" href="javascript:void(0)">
                                                            <i class="mdi mdi-heart-outline"></i>
                                                        </a>
                                                    </div>
                                                    <div class="product-content text-center">
                                                        <h4 class="title"><a href="product-details-page.html"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{article.designation}</font></font></a></h4>
                                                        <p><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{article.boutique_nom}</font></font></p>
                                                        <a href="javascript:void(0)" class="main-btn secondary-1-btn">
                                                        <img src="assets/images/icon-svg/cart-7.svg" alt="" /><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>
                                                        {article.prix}
                                                        </font></font></a>
                                                    </div>
                                                </div>
                                            </div>
                                                        )
                                                    }
                                                })
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
