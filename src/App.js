import React, { Component } from 'react';
import api from './api';

class App extends Component{
  state={
    filmes:[],
  }
  async componentDidMount(){
    const response = await api.get('star%20wars');
    //console.log(response.data);
    this.setState({
      filmes : response.data
    })
  }
  render(){
   const {filmes} = this.state;
    return(
      <div>
        <h1>Listando os Filmes</h1>
        <div className="container">
        {console.log(filmes)}
        {filmes.map(filme => (
          <div className="filme" key={filme.show.id}>
            <h2><strong>Filme: </strong> {filme.show.name}</h2>
            <div className="img">
              <img src={filme.show.image.medium} />
            </div>
            <div className="link">
              <a href={filme.show.url}>Acessar >></a>
            </div>
          </div>
        ))}
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default App;
