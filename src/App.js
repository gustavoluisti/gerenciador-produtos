import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Produtos from './components/Produtos'
import Sobre from './components/Sobre'
import Busca from './components/Busca'

class App extends Component {
  
  render() {
    return (
      <Router>
          <div>
            <nav className="navbar navbar-inverse">
              <div className="container">
                <div className="navbar-header">
                  <a href="/" className="navbar-brand">Gerenciador </a>
                </div>

                <ul className="nav navbar-nav">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/produtos'>Produtos</Link></li>
                  <li><Link to='/sobre'>Sobre</Link></li>
                  <li><Link to='/busca'>Busca</Link></li>
                  </ul>
              </div>
            </nav>
            <div className="container">
              <Route path='/' exact component={Home} />
              <Route path='/produtos' component={Produtos} />
              <Route path='/sobre' component={Sobre} />
              <Route path='/busca' component={Busca} />
            </div>
          </div>
      </Router>
      
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