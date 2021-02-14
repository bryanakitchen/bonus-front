import React from 'react';
import PropTypes from 'prop-types';

function Request() {
  return (
    <>
      <form>
        <h2>Insert an Animal</h2>
        <input type="text" placeholder="Enter name" />
  
        <input type="text" placeholder="Enter type" />
  
        <input type="text" placeholder="Enter characteristic" />
  
        <button>Submit</button>
  
      </form>
    </>
  );
}

Request.propTypes = {

};

export default Request

