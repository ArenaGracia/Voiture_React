import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { validerAnnonce } from '../../../services/AnnonceService';

function ValiderAnnonce() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchDataAndvaliderAnnonce = async () => {
      try {
        await validerAnnonce(id);
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndvaliderAnnonce();
  }, [id]); 

  return (
    <>
      {redirect && <Navigate to="/marque" />}
    </>
  );
}

export default ValiderAnnonce;
