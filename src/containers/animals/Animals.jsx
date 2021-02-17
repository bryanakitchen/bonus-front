/* eslint-disable max-len */
import React, { Component } from 'react';
import Request from '../../components/request/Request';
import Response from '../../components/response/Response';
import { postAnimal, getAnimals, findAnimalById, deleteAnimal, updateAnimal } from '../../services/fetchServer';

export default class Animals extends Component {
  state = {
    name: '',
    type: '',
    characteristic: '',
    method: '',
    response: {},
    id: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, characteristic, method, id } = this.state;

    if(method === 'post') {
      postAnimal(name, type, characteristic)
        .then(response => this.setState({ response }));
    }
    else if(method === 'get') {
      getAnimals().then(response => this.setState({ response }));
    } else if(method === 'find') {
      findAnimalById(id).then(response => this.setState({ response }));
    } else if(method === 'delete') {
      deleteAnimal(id).then(response => this.setState({ response }));
    } else if(method === 'put') {
      updateAnimal(id, name, type, characteristic).then(response => this.setState({ response }));
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
