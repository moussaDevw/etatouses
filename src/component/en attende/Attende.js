import React,{Component} from 'react'
import jwt from 'jsonwebtoken'
import {isAuth} from '../api/apiAuth'
import {Route, Redirect} from 'react-router-dom'

export const Attende = ({component:Component, ...rest})=>(
    <Route
    {...rest}
    render={props=>
    isAuth() && jwt.decode(isAuth()).is_admin === false && jwt.decode(isAuth()).is_celler === false ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
            pathname:'/connexion',
            state:{from: props.location}
        }} />
    )}></Route>
)