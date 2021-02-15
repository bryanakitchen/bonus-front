/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

function Request({ onSubmit, onChange, name, type, characteristic, method, id }) {

  return (
    <>
      <form onSubmit={onSubmit} className={ styles.Request }>
        <h1>Animal Form</h1>

        <h3>Please select one</h3>
        <div>
          <input 
            id="post"
            type="radio" 
            name="method" 
            value="post"
            checked={method === 'post'}
            onChange={onChange} />
          <label htmlFor="post">Add an Animal</label>

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
        </div>

        <div>
          <input 
            id="get"
            type="radio" 
            name="method" 
            value="get" 
            checked={method === 'get'}
            onChange={onChange} />
          <label htmlFor="get">Get all Animals</label>
        </div>
        
        <div>
          <input 
            id="find"
            type="radio" 
            name="method" 
            value="find"
            checked={method === 'find'}
            onChange={onChange} />
          <label htmlFor="find">Find Animal by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Animal" 
            name="id"
            value={id}
            onChange={onChange} />
        </div>

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
  name: PropTypes.string,
  type: PropTypes.string,
  characteristic: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string
};

export default Request;

