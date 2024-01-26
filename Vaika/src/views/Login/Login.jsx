import '../../assets/scss/login.css'
import voiture from "../../assets/images/bg/bg4.jpg";
import { Button } from 'reactstrap';
import { useState } from 'react';
import { login } from '../../services/AuthService';
import { Navigate } from 'react-router-dom';



function Login() {
    const [mdp,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [redirect,setRedirect]=useState(false);

    function authentifier(e){
        e.preventDefault();
        const admin={email,mdp};
        console.log(admin);
        setPassword('');
        setEmail('');
        login(admin).then((response) => {
            console.log(response.data);
            sessionStorage.setItem('token',response.data);
            setRedirect(true);
        }).catch(error => {
            console.error(error.message);
        })
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }
    
    function handlePassword(e){
        setPassword(e.target.value);
    }

    return (
        <div>
        <section class="ftco-section">
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10">
                        <div class="wrap d-md-flex">
                            <div class="img" style={{backgroundImage: `url(${voiture})`}}></div>
                            <div class="login-wrap p-4 p-md-5">
                                <div class="d-flex">
                                    <div class="w-100">
                                        <h3 class="mb-4">Sign In</h3>
                                    </div>
                                </div>
                                <form action="#" class="signin-form">
                                    <div class="form-group mb-3">
                                        <label class="label" for="password">Email</label>
                                        <input type="email" class="form-control" placeholder="Email" onChange={handleEmail} required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label" for="password">Password</label>
                                        <input type="password" class="form-control" placeholder="Password" onChange={handlePassword} required />
                                    </div>
                                    <div class="form-group">
                                        <Button onClick={authentifier} className="form-control btn btn-primary">Sign In</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { redirect && <Navigate to="/energie" />}
        </div>
    );

}
export default Login;