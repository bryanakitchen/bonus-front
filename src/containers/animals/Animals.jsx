import React from 'react';
import { useState } from 'react';
import Loading from '../../components/loading/Loading';
import Request from '../../components/request/Request';

export default function Animals() {
  // currently false, but will update later
  const [loading, setLoading] = useState(false);
  
  if(loading) return <Loading />;

  return (
    <>
      <Request />
    </>
  );
}
