import React,{Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Layout } from '../menu/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../pageAcceuil/Footer';
export const Reservation = () => {
    let {id} = useParams()
    const [evente,setEvente] = useState([])
    
    useEffect(()=>{
        axios({
            method:'GET',
            url:`https://apptatout.herokuapp.com/event/list/${id}/`
        })
        .then(response=>{
            setEvente(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    // pour reserver
    const [events,setEvents] = useState({
        prenom:'',
        nom:'',
        adresse:'',
        telephone:'',
        nombre:'',
        event:''
    })
    let {prenom,nom,adresse,telephone,nombre,event} = events
    event = evente.id
    console.log(event)
    const handleChange = e =>{
        const {name,value} = e.target
        setEvents({...events,[name]: value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        axios({
            method:'POST',
            url:`https://apptatout.herokuapp.com/event/reservation_add/`,
            data:{prenom,nom,adresse,telephone,nombre,event}
        })
        .then(response=>{
            setEvents({prenom:'',nom:'',adresse:'',telephone:'',nombre:'',event:''})
            toast.success("votre demande")
        })
        .catch(e=>console.log(e))
    }
    return(
        <Fragment>
            <Layout />
            <ToastContainer />
            <section className="login-registration-wrapper pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="login-registration-style-1 registration text-center mt-50">
                            <h1 className="heading-4 font-weight-500 title"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Faire une reservation</font></font></h1>
                            <div className="login-registration-form pt-10">
                            <form className="has-validation-callback" onSubmit={handleSubmit}>
                                <div className="single-form form-default form-border text-left">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <label>Prenom</label>
                                            <input type="text" value={prenom} name="prenom" onChange={handleChange} placeholder="Prénom" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input form">
                                            <label>Nom</label>
                                            <input type="text" value={nom} name="nom" onChange={handleChange} placeholder="Nom" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <label>Adresse</label>
                                            <input type="text" value={adresse} name="adresse" onChange={handleChange} placeholder="Adresse" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input form">
                                            <label>Téléphone</label>
                                            <input type="number" value={telephone} name="telephone" onChange={handleChange} placeholder="770000000" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="single-form form-default form-border text-left">
                                    <label><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Nombre</font></font></label>
                                    <div className="form-input">
                                        <input type="number" value={nombre} name="nombre" onChange={handleChange} placeholder="nombre" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                        <div className="form-input">
                                            {/* <label>Evenement</label> */}
                                            <input value={`${event}`} name="event" onChange={handleChange} type="hidden" />
                                        </div>
                                    </div>
                                <div className="single-form">
                                <button className="main-btn primary-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Reserver</font></font></button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </Fragment>
    )
}