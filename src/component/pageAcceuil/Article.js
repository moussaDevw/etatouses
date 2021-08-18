import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Article = () =>{
    const [listProduits,setListProduits] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/produit/'
        })
        .then(response=>{
            setListProduits(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    return(
            <Fragment>
             <section class="product-wrapper pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-50">
                        <h1 class="heading-1 font-weight-700">Featured Items</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                {
                    listProduits.map(listProduit=>(
                        <div class="col-lg-3 col-sm-6 col-6" key={listProduit.id}>
                        <div class="product-style-1 mt-30">
                            <div class="product-image">
                                <span class="icon-text text-style-1">{listProduit.boutique_nom}</span>
                                <div class="product-active">
                                    <div class="product-item active">
                                        <img src={"https://apptatout.herokuapp.com"+listProduit.photo} alt="product" />
                                    </div>
                                </div>
                                <a class="add-wishlist" href="javascript:void(0)">
                                    <i class="mdi mdi-heart-outline"></i>
                                </a>
                            </div>
                            <div class="product-content text-center">
                                <h4 class="title"><a href="product-details-page.html">{listProduit.designation}</a></h4>
                                <p>{listProduit.boutique_nom}</p>
                                <Link to={"/details"+listProduit.id} class="main-btn secondary-1-btn">
                                    <img src="assets/images/icon-svg/cart-7.svg" alt="" />
                                    {listProduit.prix + " FCFA"}
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
            <section className="product-wrapper pt-100 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-50">
                        {/* <h1 className="heading-1 font-weight-700">Recent Items</h1> */}
                    </div>
                </div>
            </div>
            <div className="row">
            {
                            listProduits.map(listProduit=>(
                                <div className="col-lg-6" key={listProduit.id}>
                    <div className="product-style-7 mt-30">
                        <div className="product-image">
                            <div className="product-active">
                                <div className="product-item active">
                                    <Link to="/">
                                        <img src={"https://apptatout.herokuapp.com"+listProduit.photo} alt="product" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <ul className="product-meta">
                                <li>
                                    <a className="add-wishlist" href="javascript:void(0)">
                                        <i className="mdi mdi-heart-outline"></i>
                                        {listProduit.boutique_nom}
                                    </a>
                                </li>
                                <li>
                                    <span><i className="mdi mdi-star"></i></span>
                                </li>
                            </ul>
                            <h4 className="title"><Link to="/">{listProduit.designation}</Link></h4>
                            <p></p>
                            <span className="price">$ 399</span>
                            <a href="javascript:void(0)" className="main-btn primary-btn">
                                <img src="assets/images/icon-svg/cart-4.svg" alt="" />
                                Ajouter Au Chariot
                            </a>
                        </div>
                    </div>
                </div>
                            ))
                        }
            </div>
        </div>
    </section>
        </Fragment>
    )
}