import React, { Fragment,useEffect } from 'react'
import {isAuth,signout} from '../api/apiAuth'
import $ from 'jquery'
import jwt from 'jsonwebtoken'
import {Link, Redirect} from 'react-router-dom'
export const LayoutAdmin = ({history}) => {
  useEffect(()=>{
    (function () {
      "use strict";
    
      var treeviewMenu = $('.app-menu');
    
      // Toggle Sidebar
      $('[data-toggle="sidebar"]').click(function(event) {
        event.preventDefault();
        $('.app').toggleClass('sidenav-toggled');
      });
    
      // Activate sidebar treeview toggle
      $("[data-toggle='treeview']").click(function(event) {
        event.preventDefault();
        if(!$(this).parent().hasClass('is-expanded')) {
          treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
      });
    
      // Set initial active toggle
      $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');
    
      //Activate bootstrip tooltips
      // $("[data-toggle='tooltip']").tooltip();
    
    })();
    
  })
    return(
        <Fragment>
            <header class="app-header">
      <a class="app-header__logo" href="index-2.html">Tatou</a>
     
      <ul class="app-nav">
      <button onClick={()=>(
          signout(()=>{
            <Redirect to="/" />
          })
        )} className="btn btn-danger">
          <Link to="/">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
          </Link>
        </button>
      </ul>
    </header>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <div>
          <h2 class="ml-4 app-sidebar__user-name">{`${jwt.decode(isAuth()).first_name} ${jwt.decode(isAuth()).last_name}`}</h2>
        </div>
      </div>
      <ul class="app-menu">
        <li>
          <Link class={"app-menu__item"} to="/admins/tableau-de-bord"
            ><i class="app-menu__icon fa fa-dashboard"></i
            ><span class="app-menu__label">Tableau de bord</span></Link
          >
        </li>
        <li class="treeview">
          <Link class="app-menu__item" to="/admins/ajouter-categorie"
            ><i class="app-menu__icon fa fa-laptop"></i
            ><span class="app-menu__label">Ajouter une categorie</span></Link>
         </li>
         <li class="treeview">
          <Link class="app-menu__item" to="/admins/list-Categorys"
            ><i class="app-menu__icon fa fa-laptop"></i
            ><span class="app-menu__label">Listes categories</span></Link>
         </li> 
         <li class="treeview">
          <Link class="app-menu__item" to="/admins/list-sous-Categorys"
            ><i class="app-menu__icon fa fa-laptop"></i
            ><span class="app-menu__label">listes sous categories</span></Link>
         </li> 
        <li>
          <Link to="/admins/Gerer-boutique" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Gerer les Clients</span></Link>
        </li>
        <li>
          <Link to="/admins/Ajouter-event" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Ajouter un evenement</span></Link>
        </li>
        <li>
          <Link to="/admins/Gerer-evenement" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Gerer les evenement</span></Link>
        </li>
        <li class="treeview">
          <Link class="app-menu__item" to="/admins/list-event"
            ><i class="app-menu__icon fa fa-th-list"></i
            ><span class="app-menu__label">Listes Evenements</span
            ></Link>
        </li>
        
        <li class="treeview">
          <Link class="app-menu__item" to="/admins/listBoutique"
            ><i class="app-menu__icon fa fa-edit"></i
            ><span class="app-menu__label">Listes boutiques</span></Link>
        </li>
      </ul>
    </aside>
        </Fragment>
    )
}