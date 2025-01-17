import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () =>{
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value}); //[e.target.name] esta tomando como key el name del htm no de la variable del useState({})
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log('Success')
    }

    return(
        <Fragment>
        
        <section className="container">
            <h1 className="large text-primary">Log In</h1>
            <p className="lead"><i className="fas fa-user" /> Log Into Your Account</p>
            <form className="form" onSubmit={e=> onSubmit(e)}>
       
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
                <small className="form-text">This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
                </div>

                <div className="form-group">
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength={6} required/>
                </div>
                
                <input type="submit" className="btn btn-primary" defaultValue="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register.html">Sign Up</Link>
            </p> 
        </section>
        </Fragment>
    );
}

export default Login;