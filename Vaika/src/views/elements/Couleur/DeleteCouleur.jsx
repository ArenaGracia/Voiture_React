import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { deleteCouleur } from '../../../services/CouleurService';

function DeleteCouleur() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchDataAndDelete = async () => {
      try {
        await deleteCouleur(id);
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndDelete();
  }, [id]); 

  return (
    <>
      {redirect && <Navigate to="/couleur" />}
    </>
  );
}

export default DeleteCouleur;
