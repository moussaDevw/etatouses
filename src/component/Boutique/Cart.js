import React,{ Fragment, useEffect, useState } from 'react'
import { getCart } from './cardHelpers'
import {Link} from 'react-router-dom'
import {Layout} from '../menu/Layout'

export const Cart = () =>{
    const [carts,setCarts] = useState([])
    let total = []
    useEffect(()=>{
        setCarts(getCart())
    },[])
    console.log(carts)
    return(
    <Fragment>
        <Layout />
            <section class="checkout-wrapper pt-50">
        <div class="container">
        <div class="row">
        <div class="col-lg-12">
        <div class="checkout-style-1 ">
        <div class="checkout-table table-responsive">
            {
                carts.length <= 0 ? 
                (
                    <p>fghuji</p>
                ) : 
                (
                    <table class="table">
            <thead>
                <tr>
                    <th class="product">
                        <font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Produit</font></font>
                    </th>
                    <th class="quantity">
                        <font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Quantité</font></font>
                    </th>
                    <th class="price">
                        <font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Prix</font></font>
                    </th>
                    <th class="action">
                        <font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>action</font></font>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    carts.map(cart=>(
                        
                <tr>
                <td>
                    <div class="product-cart d-flex">
                        <div class="product-thumb mr-2">
                            <img src={"https://apptatout.herokuapp.com"+cart.photo} alt="product" width="100px" />
                        </div>
                        <div class="product-content media-body">
                            <Link to={"/details"+cart.id} class="title"><a href="product-details-page.html"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{cart.designation}</font></font></a></Link>
                            <span><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}></font></font></span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="product-quantity d-inline-flex">
                        <button type="button" id="sub" class="sub"><i class="mdi mdi-minus"></i></button>
                            <input type="text" value="0" />
                        <button type="button" id="add" class="add"><i class="mdi mdi-plus"></i></button>
                    </div>
                </td>
                <td>
                    <p class="price"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>{cart.prix}</font></font></p>
                </td>
                <td>
                    <ul class="action">
                        <li>
                            <a class="favorite" href="javascript:void(0)"><i class="mdi mdi-heart-outline"></i></a>
                        </li>
                        <li>
                            <a class="delete" href="javascript:void(0)"><i class="mdi mdi-delete"></i></a>
                        </li>
                    </ul>
                </td>
            </tr>
                    ))
                }
            </tbody>
        </table>
                )
            }
        </div>
        <div class="checkout-btn d-sm-flex justify-content-between">
            <div class="single-btn">
                <Link to="/" class="main-btn primary-btn-border"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Continuer vos achats</font></font></Link>
            </div>
            <div class="single-btn">
                <a href="checkout-page.html" class="main-btn primary-btn"><font style={{verticalAlign: "inherit"}}><font style={{verticalAlign: "inherit"}}>Payez maintenant</font></font></a>
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