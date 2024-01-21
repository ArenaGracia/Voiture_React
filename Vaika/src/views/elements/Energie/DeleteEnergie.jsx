import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { deleteEnergie } from '../../../services/EnergieService';

function DeleteEnergie() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchDataAndDelete = async () => {
      try {
        await deleteEnergie(id);
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndDelete();
  }, [id]); 

  return (
    <>
      {redirect && <Navigate to="/energie" />}
    </>
  );
}

export default DeleteEnergie;
