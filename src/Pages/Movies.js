import React from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=adae7c025affeec1ced3ea91c4dc1636&language=en-US&page=1",
});

export default class Movies extends React.Component {
  state = {
    listFilmes: [],
    filterList: [],
  };

  async componentDidMount() {
    const response = await apiFilmes.get();
    //console.log(response.data.results);
    let filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      };
    });
    this.setState({
      listFilmes: filmes,
      filterList: filmes,
    });
  }

  filtro = (event) => {
    let { listFilmes } = this.state;
    const filmesFiltradosConvevertido = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
      return;
    });
    this.setState({
      filterList: filmesFiltradosConvevertido,
    });
  };

  render() {
    return (
      <>
        <h1>
          Filmes{" "}
          <input
            type="text"
            placeholder="Informe Filme..."
            onChange={this.filtro}
          />
        </h1>
        <Carousel>
          {this.state.filterList.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <div>Nota:{item.vote_average}</div>
              <img src={item.poster} alt="Titulo do Filme:{item.title}" />
            </div>
          ))}
        </Carousel>
      </>
    );
  }
}
