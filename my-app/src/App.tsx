import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Values")
      .then((response) => {
        this.setState({
          values: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value: any) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </ul>
        </header>
        <h1>Reactivities</h1>
      </div>
    );
  }
}

export default App;
