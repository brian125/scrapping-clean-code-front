import { useEffect } from 'react'
import { getCatalogId, postAgregarPeliculas } from './utils/get'
import { useDispatch, useSelector } from 'react-redux'
import Acordeon from './components/Acordeon'
import { Accordion } from 'react-bootstrap'

function App () {
  const dispatch = useDispatch()
  const {catalogs, isLoading, error} = useSelector(state => state.catalogs)

  useEffect(() => {
    const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'catalogo1')
    socket.onmessage = function (m) {
      const data = JSON.parse(m.data)
      //dispatch(data.type)
      dispatch(getCatalogId('catalogo1'))
      console.log('Got message: ' + data)
    }
  }, [])

  useEffect(() => {
    dispatch(getCatalogId('catalogo1'))
  }, [])

  const cargarPelicula = (e) => {
    e.preventDefault();
    dispatch(postAgregarPeliculas());
    document.querySelector(".btn-container").hidden = true;
  }

  return (
    <div className='App'>
      <div className='nav-bar'>
          <img className='logo' src="/logo.png" alt="Logo del alpinista pescador" />
          <h1 className='title'>EL PESCADOR DE PELICULAS</h1>
      </div>

      {catalogs ?
      <div className='container'>
      <h2 className='catalog-title'>Cartelera de {catalogs.name}</h2>
      {console.log(catalogs)}
      {catalogs && catalogs.pelicula?
        (
          <Accordion>
          {
          Object.keys(catalogs.pelicula).map((identificador, index) => {
                  return(
                    
                      <Accordion.Item key={index} eventKey={index}>
                        <Acordeon pelicula={catalogs.pelicula[identificador]}/>
                      </Accordion.Item>
    
          )})}</Accordion>):(
          <div className='btn-container'>
            {isLoading && <p>hola</p>}
          <button hidden={isLoading} className='btn-agregar-peliculas' onClick={(e) => {
            cargarPelicula(e)
          }}>Trae las mejores peliculas presionando aquí</button></div>)}
      </div>
      : <p className='color-error'>Aún no tienes carteleras creadas</p>}


        {isLoading && <h1> Cargando cartelera </h1>}
        {error && <h1> Error {error} </h1>}
    </div>
  )
}

export default App
