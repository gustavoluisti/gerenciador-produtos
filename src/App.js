import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
  
      </div>
    );
  }
}

export default App;


{/*
  <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a href="/" className="navbar-brand">Gerenciador </a>
            </div>

            <ul className="nav navbar-nav">
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Produtos</a></li>
              <li><a href='/'>Sobre</a></li>
              </ul>
          </div>
        </nav>
        <div className="container">
          <h1>Gerenciador de Produtos</h1>
        </div>
*/}