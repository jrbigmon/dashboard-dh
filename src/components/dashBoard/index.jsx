import { useState, useEffect } from "react";
import mandalorian from "../../assets/images/mandalorian.jpg";
import MoviesApi from '../../services/moviesApi'

export default function DashBoard() {
  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])
  const [actors, setActors] = useState([])
  const [awards, setAwards] = useState([])

  async function loadGenres() {
    const response = await MoviesApi.get('genres')
    setGenres(response.data)
  }
  async function loadMovies() {
    const response = await MoviesApi.get('movies')
    console.log(response.data)
    setMovies(response.data)
  }
  async function loadActors() {
    const response = await MoviesApi.get('actors')
    setActors(response.data)
  }
  async function loadAwards() {
    const response = await MoviesApi.get('movies/awards')
    setAwards(response.data)
  }
  useEffect(() => {
    loadGenres()
    loadMovies()
    loadActors()
    loadAwards()
  }, [])

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Movies in Data Base
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {movies.length}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-film fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    {" "}
                    Total awards
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {awards.awards}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-award fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Actors quantity
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {actors.length}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Last movie in Data Base
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "40rem" }}
                  src={mandalorian}
                  alt=" Star Wars - Mandalorian "
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur explicabo officia inventore libero
                veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                voluptatum non corporis quae dolorem culpa citationem ratione
                aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>
              <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
              >
                View movie detail
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Genres in Data Base
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
              { genres.map((genre, index) =>   
                (
                <div className="col-lg-6 mb-4" key={index}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{genre.name}</div>
                    </div>
                  </div>
                )
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
