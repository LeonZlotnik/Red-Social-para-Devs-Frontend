import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

const Register = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value}); //[e.target.name] esta tomando como key el name del htm no de la variable del useState({})
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        if(password !== password2){
            console.log('no son iguales los pw');
        }else{
            console.log('Success')


            /*Conectando Express con React usando axios*/
            /*Todo lo comentado va dentro del else*/
           
            /* const newUser = {
                name,
                email,
                password
            }*/

           /* try{
                const config = {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                } 
                
                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users',body,config);

                console.log(res.data)
            }catch (err){
                console.log(err.response.data);
            }*/
        }
    }


    return(
        <Fragment>
        
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user" /> Create Your Account</p>
            <form className="form" onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
                <small className="form-text">This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
                </div>
                <div className="form-group">
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength={6} required/>
                </div>
                <div className="form-group">
                <input type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={e => onChange(e)} minLength={6} required/>
                </div>
                <input type="submit" className="btn btn-primary" defaultValue="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login.html">Sign In</Link>
            </p> 
        </section>
        </Fragment>
    );
}

export default Register;