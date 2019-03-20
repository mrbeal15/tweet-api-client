import axios from 'axios';
import Torm from './components/torm';
import React, { Component } from 'react';
import Tweet from './components/tweet';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      data: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/tweets`,
      responseType: 'json'
    }).then(data => {
      this.setState({ data: data, loading: false })
    })
  }

  handleChange(event) {
    this.setState({ loading: true })

    const queryTopic = event.target.value;

    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/tweets/topics?topic=${queryTopic}`,
      responseType: 'json'
    }).then(data => {
      this.setState({ data: data, loading: false, value: queryTopic })
    })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading tweets...</p>
    }

    return (
      <div className="App">
        <Torm />
        <label>Select a Topic:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="nasa">Nasa</option>
            <option value="health care">Health Care</option>
            <option value="open source">Open Source</option>
          </select>
        </label>
        <Tweet { ...this.state.data } />
      </div>
    );
  }
}

export default App;
