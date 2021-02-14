import React from 'react';
import { useState } from 'react';
import Loading from '../../components/app/loading/Loading';

export default function animals() {
  const [loading, setLoading] = useState(true);
  
  if(loading) return <Loading />;

  return (
    <div>
        Hello from animals component
    </div>
  );
}
