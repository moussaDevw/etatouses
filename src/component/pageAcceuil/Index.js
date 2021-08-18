import React, { Fragment, useEffect,useState } from 'react'
import { Footer } from './Footer'
import { Layout } from '../menu/Layout'
import { Article } from './Article'
export const Index = () =>{
    return(
        <Fragment>
                <Layout />
            <section class="header-style-1">
        <div class="header-big">
            <div class="header-items-active">
                <div class="single-header-item bg_cover"
                    style={{backgroundImage: 'url(assets/images/product-6.jpg)'}}>
                    <div class="header-item-content">
                        <h3 class="title">Text d'illustration</h3>
                        <a href="javascript:void(0)" class="link">TATOU</a>
                    </div>
                </div>
                <div class="single-header-item bg_cover"
                    style={{backgroundIimage: 'url(assets/images/header-1/header-big-2.jpg)'}}>
                    <div class="header-item-content">
                        <h3 class="title">Text d'illustration</h3>
                        <a href="javascript:void(0)" class="link">TATOU</a>
                    </div>
                </div>
                <div class="single-header-item bg_cover"
                    style={{backgroundImage: 'url(assets/images/header-1/header-big-1.jpg)'}}>
                    <div class="header-item-content">
                        <h3 class="title">Text d'illustration</h3>
                        <a href="javascript:void(0)" class="link">TATOU</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-min">
            <div class="header-min-item product-style-25 bg_cover"
                style={{backgroundImage: 'url(assets/images/header-1/header-min-1.jpg)'}}>
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
    <section class="content-card-style-4 pt-70 pb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div class="single-content mt-15 text-center">
                        <div class="content-icon">
                            <i class="mdi mdi-truck-fast"></i>
                        </div>
                        <div class="content-content">
                        <button type="button" class="btn btn-lg btn-blue" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
                            <p>Available in most metros on selected in-stock products</p>
                            <a href="javascript:void(0)" class="more">learn more</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div class="single-content mt-15 text-center">
                        <div class="content-icon">
                            <i class="mdi mdi-message-text"></i>
                        </div>
                        <div class="content-content">
                            <h4 class="title"><a href="javascript:void(0)">Get help buying</a></h4>
                            <p>Have a question? Call a Specialist or chat online for help</p>
                            <a href="contact-page.html" class="more">Contact us</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-7 col-sm-8">
                    <div class="single-content mt-15 text-center">
                        <div class="content-icon">
                            <i class="mdi mdi-ticket-percent"></i>
                        </div>
                        <div class="content-content">
                            <h4 class="title"><a href="javascript:void(0)">Find the card for you</a></h4>
                            <p>Get 3% Daily Cash with special financing offers from us</p>
                            <a href="javascript:void(0)" class="more">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* article */}
   <Article />
    {/* fin article */}
    <section class="features-section pt-100 pb-50 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="features-title text-center mb-50">
                        <h1 class="heading-1 font-weight-700">Awesome Features</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-cog"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Bootstrap 5</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-code"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Clean Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-layers"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Included Business Pages</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-laptop-phone"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Fully Responsive</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-brush"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Completely Customizable</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-feature-wrapper">
                        <div class="feature-icon">
                            <i class="lni lni-rocket"></i>
                        </div>
                        <div class="feature-content">
                            <h5 class="heading-5 font-weight-500 mb-10">Fast and Well-optimized</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quos iste veniam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="clients-logo-section pt-70 pb-70">
        <div class="container">
            <div class="row client-logo-active">
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/uideck-logo.svg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/graygrids-logo.svg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/lineicons-logo.svg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="single-logo-wrapper">
                        <img src="assets/images/client-logo/pagebulb-logo.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="subscribe-section pt-70 pb-70 bg-primary-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <div class="heading text-center">
                        <h1 class="heading-1 font-weight-700 text-white mb-10">You are using free lite version</h1>
                        <p class="gray-3">Please, purchase full version of the template to get all pages, sections, features and permission to remove footer credits.</p>
                        <br />
                        <a href="https://rebrand.ly/estore-gg" rel="nofollow" target="_blank" class="main-btn secondary-1-btn">
                                <img src="assets/images/icon-svg/cart-7.svg" alt="" />
                                PURCHASE NOW
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
        </Fragment>
    )
}