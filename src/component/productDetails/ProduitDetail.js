import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {addItem} from '../Boutique/cardHelpers'
import { Layout } from '../menu/Layout'
export const ProduitDetails = (props) => {
    const [product,setProduct] = useState([])
    const [value,setValue] = useState(1)
    let {id} = useParams()
    useEffect(()=>{
        axios({
            method:'GET',
            url:`https://apptatout.herokuapp.com/produit/list/${id}/`
        })
        .then(response=>{
            setProduct(response.data)
        })
        .catch(e=>console.log(e))
    },[])
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
                                <li className="breadcrumb-item"><Link to="/">Acceuil</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">détails du produit</li>
                            </ol>
                        </div>
                        <div className="breadcrumb-right">
                            <h5 className="heading-5 font-weight-500">détails du produit</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="product-details-wrapper pt-50 pb-100 mb-4">
        <div className="container">
            <div className="product-details-style-1">
                <div className="row flex-lg-row-reverse align-items-center">
                    <div className="col-lg-6">
                        <div className="product-details-image mt-50">
                            <div className="product-image">
                                <div className="product-image-active-1">
                                    <div className="single-image">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo} alt="product" />
                                    </div>
                                    <div className="single-image">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo2} alt="product" />
                                    </div>
                                    <div className="single-image">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo3} alt="product" />
                                    </div>
                                    <div className="single-image">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo4} alt="product" />
                                    </div>
                                    <div className="single-image">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo5} alt="product" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-thumb-image">
                                <div className="product-thumb-image-active-1">
                                    <div className="single-thumb">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo} alt="product" />
                                    </div>
                                    <div className="single-thumb">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo2} alt="product" />
                                    </div>
                                    <div className="single-thumb">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo3} alt="product" />
                                    </div>
                                    <div className="single-thumb">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo4} alt="product" />
                                    </div>
                                    <div className="single-thumb">
                                        <img src={"https://apptatout.herokuapp.com"+product.photo5} alt="product" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-details-content mt-45">
                            <h2 className="title">{product.designation}</h2>
    
                            <div className="product-items flex-wrap">
                                <h6 className="item-title"> </h6>
                                <div className="items-wrapper">
                                    <div className="single-item active">
                                        <div className="items-image">
                                            <img src={"https://apptatout.herokuapp.com"+product.photo} alt="product" />
                                        </div>
                                        <p className="text"></p>
                                    </div>
                                    <div className="single-item">
                                        <div className="items-image">
                                            <img src={"https://apptatout.herokuapp.com"+product.photo2} alt="product" />
                                        </div>
                                        <p className="text"></p>
                                    </div>
                                    <div className="single-item">
                                        <div className="items-image">
                                            <img src={"https://apptatout.herokuapp.com"+product.photo3} alt="product" />
                                        </div>
                                        <p className="text"></p>
                                    </div>
                                </div>
                            </div>
    
                            <div className="product-select-wrapper flex-wrap">
                                <div className="select-item">
                                    <h6 className="select-title">Sélectionnez la quantité: </h6>
        
                                    <div className="select-quantity">
                                        <button onClick={()=>setValue(value <=1 ? 1 : value - 1)} type="button"><i className="mdi mdi-minus"></i></button>
                                        <input type="text" value={value} />
                                        <button onClick={()=>setValue(value + 1)} type="button"><i className="mdi mdi-plus"></i></button>
                                    </div>
                                    <h1 className="text-center">{value * product.prix} FCFA </h1>
                                </div>
                            </div>
                            <div className="product-btn">
                                <Link to="#" onClick={()=>addItem(product,value,product.prix)} className="main-btn primary-btn">
                                    <img src="assets/images/icon-svg/cart-4.svg" alt="" />
                                    AJOUTER AU PANIER
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
        </Fragment>
    )
}