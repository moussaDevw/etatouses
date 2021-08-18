import React, { Fragment,useState,useEffect} from 'react'
import {isAuth,signout} from '../api/apiAuth'
import {itemTotal} from '../Boutique/cardHelpers'
import jwt from 'jsonwebtoken'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const Layout = ({history}) =>{
    const [categories,setCategories] = useState([])
    const [sous_cats,setSous_cats] = useState([])
    useEffect(()=>{
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/categorie/'
        })
        .then(response=>{
            setCategories(response.data)
        })
        .catch(e=>{
            console.log(e)
        })
        axios({
            method:'GET',
            url:'https://apptatout.herokuapp.com/soucat/'
        })
        .then(response=>{
            setSous_cats(response.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])
    return(
        <Fragment>
            <div className="navigation">
        <header className="navbar-style-7 position-relative">
            <div className="container">
                <div className="navbar-mobile d-lg-none">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <div className="navbar-toggle icon-text-btn">
                                <button className="icon-btn primary-icon-text mobile-menu-open-7">
                                    <i className="mdi mdi-menu"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text-center mobile-logo">
                               <h1 style={{Color:'#0190F9'}}><Link to="/">Tatout</Link></h1>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="navbar-cart">
                                <Link to="/list-panier" className="icon-btn primary-icon-text icon-text-btn">
                                    <img src="assets/images/icon-svg/cart-1.svg" alt="Icon" />
                                    <span className="icon-text text-style-1">{itemTotal()}</span>
                                </Link>
    
                                <div className="navbar-cart-dropdown">
                                    <div className="checkout-style-2">
                                        <div className="checkout-header d-flex justify-content-between">
                                        <h1 style={{Color:'#0190F9'}}><Link to="/">Tatout</Link></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-search mt-15 search-style-5">
                        <div className="search-select">
                            <select>
                            </select>
                        </div>
                        <div className="search-input">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="search-btn">
                            <Link to="/search"><button><i className="lni lni-search-alt"></i></button></Link>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="navbar-container navbar-sidebar-7">
                <div className="navbar-close d-lg-none">
                    {/* <Link className="close-mobile-menu-7"><i className="mdi mdi-close"></i></Link> */}
                </div>
                <div className="navbar-top-wrapper">
                    <div className="container-lg">
                        <div className="navbar-top d-lg-flex justify-content-between">
                            <div className="pt-4 navbar-top-left">
                                <ul className="navbar-top-link">
                                    <li><Link to="/a-propos">A propos</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                    <li>
                                        <Link to="javascript:void(0)">
                                            <i className="mdi mdi-phone-in-talk"></i>
                                            +9000000000000
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 navbar-top-right">
                                <ul className="navbar-top-link">
                                <li>
                                    {
                                        isAuth() && jwt.decode(isAuth()).is_celler === true &&(
                                    <li>
                                         <li>
                                            <Link to="/creer-boutique">Creer un boutique</Link>
                                        </li>
                                    </li>
                                        )
                                    }
                                </li>
                                <li>
                                    {
                                        isAuth() && !jwt.decode(isAuth()).is_celler === true &&(
                                    <li>
                                         <li>
                                            
                                        </li>
                                    </li>
                                        )
                                    }
                                </li>
                                <li>
                                    {
                                        !isAuth() &&(
                                    <li>
                                         <li>
                                            <Link to="/creer-boutique"> creer un boutique</Link>
                                        </li>
                                    </li>
                                        )
                                    }
                                </li>
									<li>
                                       <Link to="#">Deposer une annonce</Link>
                                    </li>
                                    <li>
                                    {
                                        isAuth() &&(
                                    <button onClick={()=>{
                                        signout(()=>{
                                            history.pushState('/')
                                        })
                                    }} className="btn btn-danger">
                                        <Link to="/"><i className="mdi mdi-account"></i><i className="fa fa-sign-out" aria-hidden="true"></i></Link>
                                    </button>
                                        )
                                    }
                                    </li>
                                    <li>
                                    {
                                        !isAuth() &&(
                                    <li>
                                        <Link to="/connexion"><i className="mdi mdi-account"></i>Connexion</Link>
                                    </li>
                                        )
                                    }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <div className="container-lg">
                        <nav className="main-navbar d-lg-flex justify-content-between align-items-center">
                            <div className="desktop-logo d-none d-lg-block">
							<h1 style={{Color:'#0190F9'}}><Link to="/">Tatout</Link></h1>
                            </div>
                            <div className="navbar-menu">
                                <ul className="main-menu">
                                <li class="position-static menu-item-has-children">
                                        <a to="#">Categories</a>
                                        <ul class="sub-mega-dropdown">
                                            <li>
                                                <div class="mega-dropdown-menu">
                                                    <ul class="container mega-dropdown d-flex flex-wrap">
                                                        {
                                                            categories.map(categorie=>(
                                                                <li key={categorie.id} class="mega-dropdown-list menu-item-has-children">
                                                                    <Link to={"articles-filtre"+categorie.id} class="heading-6 font-weight-500 mega-title">{categorie.nom_cat}
                                                                    </Link>
                                                                    <ul>
                                                                        {
                                                                            sous_cats.map(sous_cat=>{
                                                                                if(categorie.id === sous_cat.categorie)
                                                                                {
                                                                                 return <li className="ml-3" key={sous_cat.id}><Link to={"/filtre-sous-cat"+sous_cat.id}>{sous_cat.designation}</Link></li>
                                                                                }
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </li>
                                    <li><Link to="/evenement">Evenement</Link></li>
                                    <li><Link to="/page-en-construction">Annonce</Link></li>
                                    <li><Link to="/boutique">Boutique</Link></li>
                                </ul>
                            </div>
                            <div className="navbar-search-cart d-none d-lg-flex">
                                <div className="navbar-search search-style-5">
                                    <div className="search-select">
                                        <select>
                                           
                                        </select>
                                    </div>
                                    <div className="search-input">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <div className="search-btn">
                                    <Link to="/search"><button><i className="lni lni-search-alt"></i></button></Link>
                                    </div>
                                </div>
                                <div className="navbar-cart">
                                    <Link to="/list-panier" className="icon-btn primary-icon-text icon-text-btn">
                                        <img src="assets/images/icon-svg/cart-1.svg" alt="Icon" />
                                        <span className="icon-text text-style-1">{itemTotal()}</span>
                                    </Link>
    
                                    <div className="navbar-cart-dropdown">
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="overlay-7"></div>
        </header>
    </div>
        </Fragment>
    )
}