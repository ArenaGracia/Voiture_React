import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { deleteModele } from '../../../services/ModeleService';

function DeleteModele() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchDataAndDelete = async () => {
      try {
        await deleteModele(id);
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndDelete();
  }, [id]); 

  return (
    <>
      {redirect && <Navigate to="/Marque" />}
    </>
  );
}

export default DeleteModele;
