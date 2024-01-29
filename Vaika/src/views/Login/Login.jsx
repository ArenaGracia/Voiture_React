import voiture from "../../assets/images/bg/voiture.jpg";
import { Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import { isAuthenticated, login } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [mdp,setMdp]=useState('motdepasse');
    const [username,setUsername]=useState('john_doe');
    const [redirect,setRedirect]=useState(false);
    const nav=useNavigate();

    function authentifier(e){
        e.preventDefault();
        const vprofil={username,mdp};

        console.log(vprofil);
        login(vprofil).then((response) => {
            sessionStorage.setItem('token',response.data['access-token']);
            setRedirect(true);
        }).catch(error => {
            console.error(error.message);
        })
    }

    useEffect(() => {
        if(isAuthenticated()){
            nav("/table");
        }
    });

    return (
        <div>
        <section className="ftco-section">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="img" style={{backgroundImage: `url(${voiture})`}}></div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Se Connecter</h3>
                                    </div>
                                </div>
                                <form action="#" className="signin-form">
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Nom d'utilisateur</label>
                                        <input type="Username" className="form-control" placeholder="Utilisateur" value={username} onChange={e => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Mot de passe</label>
                                        <input type="password" className="form-control" placeholder="Mot de passe" value={mdp} onChange={e => setMdp(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <Button onClick={authentifier} className="form-control" style={{backgroundColor:'#2962ff',borderColor:'blue',color:'white'}}> Se Connecter</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        { redirect && window.location.reload() }
        </div>
    );

}
export default Login;