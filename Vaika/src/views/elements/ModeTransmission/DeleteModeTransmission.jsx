import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { deleteModeTransmission } from '../../../services/ModeTransmissionService';

function DeleteModeTransmission() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchDataAndDelete = async () => {
      try {
        await deleteModeTransmission(id);
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndDelete();
  }, [id]); 

  return (
    <>
      {redirect && <Navigate to="/modeTransmission" />}
    </>
  );
}

export default DeleteModeTransmission;
