import React, { Component } from 'react';
import Request from '../../components/request/Request';
import { postAnimal } from '../../services/fetchServer';

export default class Animals extends Component {
  state = {
    name: '',
    type: '',
    characteristic: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, type, characteristic } = this.state;

    postAnimal(name, type, characteristic)
      .then(res => this.setState({ 
        name: res.name,
        type: res.type,
        characteristic: res.characteristic
      }));
  }

  render() {
    const { name, type, characteristic } = this.state;
    return (
      <>
        <Request 
          name={name} 
          type={type} 
          characteristic={characteristic} 
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </>
    );

  }
}
