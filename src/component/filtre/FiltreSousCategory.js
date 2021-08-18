import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Layout} from '../menu/Layout'
import axios from 'axios'
import {Footer} from '../pageAcceuil/Footer'
export const FiltreSousCategory = () =>{
    let { id } = useParams()
    const [produits,setProduits] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/list_produit/'
        })
        .then(response=>{
            setProduits(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    // console.log(produits.map(produit=>(console.log(produit))))
    return(
        <Fragment>
            <Layout />
            <section class="product-wrapper pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-50">
                        
                        
                        <h1 class="heading-1 font-weight-700"></h1>
                          
                    </div>
                </div>
            </div>
                        <div class="row">
                            <div className="col-lg-3">
                                <p>fgyu</p>
                            </div>
                {
                    produits.map(produit=>{
                        if(produit.sous_categorie.id === Number(id))
                        {
                            return(
                        <div class="col-lg-3 col-sm-6 col-6" key={produit.id}>
                        <div class="product-style-1 mt-30">
                            <div class="product-image">
                                <span class="icon-text text-style-1">{produit.boutique_nom}</span>
                                <div class="product-active">
                                    <div class="product-item active">
                                        <img src={"https://apptatout.herokuapp.com"+produit.photo} alt="product" />
                                    </div>
                                </div>
                                <a class="add-wishlist" href="javascript:void(0)">
                                    <i class="mdi mdi-heart-outline"></i>
                                </a>
                            </div>
                            <div class="product-content text-center">
                                <h4 class="title"><a href="product-details-page.html">{produit.designation}</a></h4>
                                <p>{produit.boutique_nom}</p>
                                <Link to={"/details"+produit.id} class="main-btn secondary-1-btn">
                                    <img src="assets/images/icon-svg/cart-7.svg" alt="" />
                                    {produit.prix + " FCFA"}
                                </Link>
                            </div>
                        </div>
                    </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    </section>
            <Footer />
        </Fragment>
    )
}
