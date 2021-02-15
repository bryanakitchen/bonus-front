import React from 'react';
import PropTypes from 'prop-types';

function Request({ onSubmit, onChange, name, type, characteristic }) {

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
  characteristic: PropTypes.string.isRequired
};

export default Request;

