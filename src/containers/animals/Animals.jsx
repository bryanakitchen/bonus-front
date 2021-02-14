import React from 'react';
import Loading from '../../components/app/loading/Loading';

export default function animals() {
  
  if(loading) return <Loading />;
  
  return (
    <div>
        Hello from animals component
    </div>
  );
}
