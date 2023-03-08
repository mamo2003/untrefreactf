import { useState, useEffect } from 'react';
import '../styles/Form.css';
import useReceive from './useReceive';


const  Petition = () => {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    fetch('datos.json')
      .then((response) => {
        return response.json()
      })
      .then((datos) => {
        setDatos(datos);
      })
  }, [])

  const [metrosIngresados, setMetrosIngresados] = useState('')
  const MIngresados = (m) => {
    setMetrosIngresados(m.target.value);
  }

  const [propiedad, setPropiedad] = useState('seleccione');
  const TipoPropiedad = (p) => {
    setPropiedad(p.target.value)
  }

  const [ubicacion, setUbicacion] = useState('seleccione');
  const TipoZona = (z) => {
    setUbicacion(z.target.value)
  }

  return (
    <form id="formulario" className="Recibir" onSubmit={useReceive}>
      <label className="label">como es tu vivienda: </label>
      <select className="formulario-elemento" name="propiedad" onChange={TipoPropiedad} value={propiedad}>
        {datos.map(d => {
          return (
            <option key={d.id} className="option">{d.propiedad}</option>
          );
        })}
      </select>

      <label className="label">donde se ubica:</label>
      <select value={ubicacion} name="zona" onChange={TipoZona} className="formulario-elemento">
        {datos.map(z => {
          return (
            <option key={z.id} className="option">{z.ubicacion}</option>
          );
        })}
      </select>
      <label className="label">Cuantos mts.cuadrados deseas cotizar:</label>
      <input tpye="number" onChange={MIngresados} name="ingreso" value={metrosIngresados.ingreso} className="formulario-elemento"></input>

      <button type="submit" className="btn-enviar" value="Enviar">COTIZAR</button>

    </form>
  );
}
export default Petition;