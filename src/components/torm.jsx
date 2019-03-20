import React from 'react';
import axios from 'axios';

export default class Torm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post('/tweets', {
      content: this.state.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tweet Content:
          <textarea type="text" value={this.state.value} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
