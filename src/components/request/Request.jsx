import React from 'react';
import PropTypes from 'prop-types';

function Request({ onSubmit, onChange, name, type, characteristic, method }) {

  return (
    <>
      <form onSubmit={onSubmit} >
        <h2>Insert an Animal</h2>
        <input 
          type="text" 
          placeholder="Enter name" 
          name="name"
          value={name}
          onChange={onChange} />
  
        <input 
          type="text" 
          placeholder="Enter type" 
          name="type"
          value={type}
          onChange={onChange} />
  
        <input 
          type="text" 
          placeholder="Enter characteristic" 
          name="characteristic"
          value={characteristic}
          onChange={onChange} />

        <br />
        <input 
          id="get"
          type="radio" 
          name="method" 
          value="get" 
          checked={method === 'get'}
          onChange={onChange} />
        <label htmlFor="get">Get all Animals</label>

        <input 
          id="post"
          type="radio" 
          name="method" 
          value="post"
          checked={method === 'post'}
          onChange={onChange} />
        <label htmlFor="post">Add an Animal</label>

        {/* <input 
          id="put"
          type="radio" 
          name="method" 
          value="put"
          onChange={onChange} />
        <label htmlFor="put">PUT</label> */}

        {/* <input 
          id="delete"
          type="radio" 
          name="method" 
          value="delete"
          checked={method === 'delete'}
          onChange={onChange} />
        <label htmlFor="delete">DELETE</label> */}
  
        <br />
        <button>Submit</button>
  
      </form>
    </>
  );
}

Request.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  characteristic: PropTypes.string.isRequired,
  method: PropTypes.string
};

export default Request;

