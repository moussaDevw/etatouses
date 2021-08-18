import React, { Fragment } from 'react'
import {Layout} from '../Layout'
export const ListCommande = () => {
    return(
      <div>
      <body class="app sidebar-mini rtl">

    <Layout />
    <main class="app-content">
    <div class="app-title">
      <div>
        <h1><i class="fa fa-dashboard"></i>vos commandes</h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item"><a href="#">vos commandes</a></li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x"></i>
          <div class="info">
            <h4>commandes</h4>
            <p><b>5</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small info coloured-icon">
          <i class="icon fa fa-thumbs-o-up fa-3x"></i>
          <div class="info">
            <h4>livrer</h4>
            <p><b>25</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small info coloured-icon">
          <i class="icon fa fa-thumbs-o-up fa-3x"></i>
          <div class="info">
            <h4>non livrer</h4>
            <p><b>25</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-small warning coloured-icon">
          <i class="icon fa fa-files-o fa-3x"></i>
          <div class="info">
            <h4>Archivez</h4>
            <p><b>10</b></p>
          </div>
        </div>
      </div>
    </div>
    </main>
    </body>
      </div>
    )
}