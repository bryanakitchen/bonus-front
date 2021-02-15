import React, { Component } from 'react';
import Request from '../../components/request/Request';
import Response from '../../components/response/Response';
import { postAnimal } from '../../services/fetchServer';

export default class Animals extends Component {
  state = {
    name: '',
    type: '',
    characteristic: '',
    response: {}
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, characteristic } = this.state;
    // console.log(name, type, characteristic);
    postAnimal(name, type, characteristic)
      .then(res => this.setState({ 
        name: res.name,
        type: res.type,
        characteristic: res.characteristic,
        response: res
      }));
  }

  render() {
    const { name, type, characteristic, response } = this.state;
    return (
      <>
        <Request 
          name={name} 
          type={type} 
          characteristic={characteristic} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />

        <Response response={response} />
      </>
    );

  }
}
