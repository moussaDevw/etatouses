import React,{Fragment,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { Layout } from '../menu/Layout'
import axios from 'axios'

export const Event = () =>{
    const [events,setEvents] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/event/'
        })
        .then(response=>{
            setEvents(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    return(
            <Fragment>
            <Layout />
            <section class="header-style-1">
                <div class="header-big">
                    <div class="header-items-active">
                        <div class="single-header-item bg_cover"
                            style={{backgroundIimage: 'url(assets/images/header-1/header-big-2.jpg)'}}>
                            <div class="header-item-content">
                                <h3 class="title">Evenement</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-min">
                    <div class="header-min-item product-style-25 bg_cover"
                        /*style={{backgroundImage: 'url(assets/images/header-1/header-min-1.jpg)'}}*/>
                        <div class="product-content">
                            <h4 class="title"><a href="product-details-page.html">Metro 38 Date</a></h4>
                            <p>Reference 1102</p>
                            <a href="javascript:void(0)" class="main-btn primary-btn-border"> <img src="assets/images/icon-svg/cart-5.svg" alt=""/>$
                                399</a>
                        </div>
                    </div>
                    <div class="header-min-item product-style-25 bg_cover"
                        /*style={{backgroundImage: 'url(assets/images/header-1/header-min-2.jpg)'}}*/>
                        <div class="product-content">
                            <h4 class="title"><a href="product-details-page.html">Metro 38 Date</a></h4>
                            <p>Reference 1102</p>
                            <a href="javascript:void(0)" class="main-btn primary-btn-border"> <img src="assets/images/icon-svg/cart-5.svg" alt="" />$
                                399</a>
                        </div>
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
                            events.map(event=>(
                                <div className="col-lg-6" key={event.id}>
                    <div className="product-style-7 mt-30">
                        <div className="product-image">
                            <div className="product-active">
                                <div className="product-item active">
                                    <Link to="/">
                                        <img src={"https://apptatout.herokuapp.com"+event.affiche} alt="product" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-content" key={event.id}>
                            <ul className="product-meta">
                                <li>
                                    <a className="add-wishlist" href="javascript:void(0)">
                                        <i className="mdi mdi-heart-outline"></i>
                                        {/* {event.boutique_nom} */}
                                    </a>
                                </li>
                                <li>
                                    <span><i className="mdi mdi-star"></i></span>
                                </li>
                            </ul>
                            <h4 className="title"><Link to="/">{event.titre}</Link></h4>
                            <p></p>
                            <span className="price">$ 399</span>
                            <Link to={"/reservation"+event.id} className="main-btn primary-btn">
                                <img src="assets/images/icon-svg/cart-4.svg" alt="" />
                                Réserver
                            </Link>
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