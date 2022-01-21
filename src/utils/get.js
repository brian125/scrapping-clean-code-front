import axios from 'axios'
import { CatalogsLoading, CatalogsLoadSucces, CatalogsLoadError } from '../actions/CatalogsActions'

export const getCatalogId = (id) => (dispatch) => {
  dispatch(CatalogsLoading())
  const options = {
    method: 'GET',
    url: `http://localhost:8080/api/peliculas/${id}`
  }

  axios.request(options).then(function (response) {
    dispatch(CatalogsLoadSucces(response.data))
  }).catch(function (error) {
    dispatch(CatalogsLoadError(error))
  })
}

export const postAgregarPeliculas = () => (dispatch) => {
  dispatch(CatalogsLoading())
  const options = {
    method: 'POST',
    url: `http://localhost:8080/api/peliculas/agregarPelicula`,
    headers: {'Content-Type': 'application/json'},
    data: {
      catalogoId : "catalogo1",
      type: "sofka.catalogo.peliculas.agregarpelicula"
    }
  }

  axios.request(options).then(function (response) {
    dispatch(getCatalogId('catalogo1'))
  }).catch(function (error) {
    dispatch(CatalogsLoadError(error))
  })
}

