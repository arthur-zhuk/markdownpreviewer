import React, { Component } from 'react';
import MarkdownInput from './components/markdown_input';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
        </div>
        <div className="container">
          <div className="row">
            <MarkdownInput />
          </div>
        </div>
        <h4><a className="text-center" href="https://www.github.com/ug02fast">ug02fast</a></h4>
      </div>
    );
  }
}

export default App;
