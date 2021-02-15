import React, { Component } from 'react';
import Request from '../../components/request/Request';
import Response from '../../components/response/Response';
import { getAnimals, postAnimal } from '../../services/fetchServer';

export default class Animals extends Component {
  state = {
    name: '',
    type: '',
    characteristic: '',
    method: '',
    response: {}
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, characteristic, method } = this.state;
    // console.log(name, type, characteristic);
    if(method === 'post') {
      postAnimal(name, type, characteristic)
        .then(res => this.setState({ 
          name: res.name,
          type: res.type,
          characteristic: res.characteristic,
          response: res
        }));}
    else if(method === 'get') {
      getAnimals().then(response => this.setState(response));
    }
    
  }

  render() {
    const { name, type, characteristic, response, method } = this.state;
    return (
      <>
        <Request 
          name={name} 
          type={type} 
          characteristic={characteristic} 
          method={method}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <Response response={response} />
      </>
    );

  }
}
