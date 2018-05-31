import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'


class NovoAnuncio extends Component {
  constructor(props){
    super(props)
    this.state = {
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    const file = this.foto.files[0]
    const { name, size } = file
    const ref = storage.ref(name)
    ref
      .put(file)
      .then( img => {
        const novoAnuncio = {
          nome: this.nome.value,
          descricao: this.descricao.value,
          preco: this.preco.value,
          vendedor: this.vendedor.value,
          foto: img.metadata.downloadURLs[0],
          telefone: this.telefone.value,
          categoria: this.categoria.value
        }
        base.push('anuncios',{
          data: novoAnuncio
        })
        .then(() => {
          this.setState({ success: true })
        })
      }).catch( e => console.log(e))
      e.preventDefault()
  }
  render(){
    if(this.state.success){
      return <Redirect to='/' />
    }
    return(
      <div>
        <HeaderInterno />
        <div className='container' style={{paddingTop: '120px'}}>
          <h1>Novo Anuncio</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='foto'>Foto</label>
              <input type='file' className='form-control' id='foto' placeholder='foto' ref={(ref) => this.foto = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Nome</label>
              <input type='text' className='form-control' id='nome' placeholder='nome' ref={(ref) => this.nome = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='categoria'>Categorias</label>
              <select ref={(ref) => this.categoria = ref }>
                { 
                  this.props.categorias.map( cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option>)
                }
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='Decricao'>Decricao</label>
              <input type='text' className='form-control' id='Decricao' placeholder='Decricao' ref={(ref) => this.descricao = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='Preco'>Preco</label>
              <input type='text' className='form-control' id='Preco' placeholder='Preco' ref={(ref) => this.preco = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='Telefone'>Telefone</label>
              <input type='text' className='form-control' id='Telefone' placeholder='Telefone' ref={(ref) => this.telefone = ref } />
            </div>
            <div className='form-group'>
              <label htmlFor='Vendedor'>Vendedor</label>
              <input type='text' className='form-control' id='Vendedor' placeholder='Vendedor' ref={(ref) => this.vendedor = ref } />
            </div>
            <button type='submit' className='btn btn-primary'>Salvar anuncio</button>
          </form>
        </div>

      </div>
    )
  }
}
export default NovoAnuncio
