import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function Response({ response }) {
  return (
    <div data-testid="response">
      <ReactJson src={response} />
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.array.isRequired
};

export default Response;

