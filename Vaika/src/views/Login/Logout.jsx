import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deconnect, getAuthToken } from '../../services/AuthService';

function Logout() {
  const [redirect, setRedirect] = useState(false);
  const nav=useNavigate();

  useEffect(() => {
    const token=getAuthToken();
    if(token){
      const fetchDataAndDelete = async () => {
        try {
          await deconnect();
          setRedirect(true);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchDataAndDelete();
    }else{
      nav("/login");
    }
    
  }); 

  return (
    <>
      {redirect && window.location.reload()}
    </>
  );
}

export default Logout;
