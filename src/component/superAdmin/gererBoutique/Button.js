import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Cart } from '../../Boutique/Cart';
export const Button = (props)=>{
    const [clients,setClients] = useState([])
    const {user_name,first_name,last_name,telephone,email,nom_boutique,adresse_boutique,tel_boutique,is_celler} = clients
    useEffect(()=>{
        axios({
            method:'GET',
            url:`https://apptatout.herokuapp.com/api/users/list/${props.id}/`
        })
        .then(response=>{
            setClients(response.data)
        })
        .catch(e=>console.log(e))
    },[])
    const handleChange = e =>{
        const {value,name} = e.target
        setClients({...clients,[name]:value})
    }
    const handleSubmit = () => {
        axios({
            method:'PUT',
            url:`https://apptatout.herokuapp.com/api/users/list/${props.id}/`,
            data:{user_name,first_name,last_name,telephone,email,nom_boutique,adresse_boutique,tel_boutique,is_celler}
        })
        .then(response=>{
            console.log("ok")
        })
        .catch(e=>{
            console.log('not ok')
        })
    }
    const form = ()=>{
        return(
            <Fragment>
                    <ToastContainer />
                    <form id="myForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value="{user_name}"
                            placeholder="Nom categorie"
                            name='user_name'
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={first_name}
                            name="first_name"
                            onChange={handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={last_name}
                            placeholder="Nom categorie"
                            name='last_name'
                            onChange={handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={telephone}
                            name="telephone"
                            onChange={handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={email}
                            placeholder="Nom categorie"
                            name='email'
                            onChange={handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={nom_boutique}
                            name="nom_boutique"
                            onChange={handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={adresse_boutique}
                            placeholder="Nom categorie"
                            name='adresse_boutique'
                            onChange={handleChange}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="hidden"
                            value={tel_boutique}
                            name="tel_boutique"
                            onChange={handleChange}
                        />
                            <label for={`${"i"+Cart.id}`}>{is_celler ? 'Desactiver' : 'Activer'}</label>
                            <input
                            className="checkbox-control"
                            type="radio"
                            value={is_celler ? false : true}
                            name="is_celler"
                            id={`${"i"+Cart.id}`}
                            onChange={handleChange}
                            
                        />
                        </div>
                        <button className="btn btn-primary">{is_celler ? "Desactiver" : "Activer"}</button>
                    </form>
        </Fragment>
        )
    }
    return(
        <Fragment>
            {form()}
        </Fragment>
    )
}