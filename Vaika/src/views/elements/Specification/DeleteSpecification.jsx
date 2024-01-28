import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { deleteSpecification } from '../../../services/SpecificationService';

function DeleteSpecification() {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchDataAndDelete = async () => {
      try {
        await deleteSpecification(id);
        setRedirect(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndDelete();
  }, [id]); 

  return (
    <>
      {redirect && <Navigate to="/specification" />}
    </>
  );
}

export default DeleteSpecification;
