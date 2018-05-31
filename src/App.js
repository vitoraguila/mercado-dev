import React, { Component } from 'react'
import logo from './logo.svg'

import FooterHome from './FooterHome'
import Home from './Home'
import LinkCategoria from './LinkCategoria'
import base from './base'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NovoAnuncio from './NovoAnuncio'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
    base.bindToState('categorias', {
      context: this,
      state: 'categorias'
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categorias={this.state.categorias} /> } />
          <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias} />} />
          <FooterHome />
        </div>
      </Router>
    );
  }
}

export default App
