import { useState, useEffect } from 'react';
import { postAnimal } from '../services/fetchServer';

export const useAnimals = (name, type, characteristic) => {
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    if(!name) return;
    setLoading(true);
    postAnimal(name, type, characteristic)
      .then(res => {
        setLoading(false);
        setAnimals(res);
      });
  }, [name, type, characteristic]);

  return {
    loading,
    animals
  };

};

