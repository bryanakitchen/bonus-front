import fetch from 'node-fetch';

const URL = 'https://secret-peak-24272.herokuapp.com/api/v1/animals';

export const postAnimal = (name, type, characteristic) => {
  const data = { name, type, characteristic };
    
  return fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
};

export const getAnimals = () => {
  return fetch(`${URL}`, { method: 'GET' })
    .then(res => res.json());
};
