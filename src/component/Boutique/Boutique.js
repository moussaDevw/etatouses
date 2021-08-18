import React,{useEffect,useState,Fragment} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Layout } from '../menu/Layout'

export const Boutique = () => {
    const [listProduits,setListProduits] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/produit/'
        })
        .then(response=>{
            setListProduits(response.data)
            console.log(listProduits)
        })
        .catch(e=>console.log(e))
    },[])
    return(
        <Fragment>
            <Layout />
            <section className="product-wrapper pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-50">
                                <h1 className="heading-1 font-weight-700">listes des articles({listProduits.length})</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            listProduits.map(listProduit=>(
                                <div className="col-lg-6">
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