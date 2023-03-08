import '../styles/App.css';
import React from 'react';
import '../styles/Footer.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const PrintHistory = () => {
    const link2 = useNavigate();
    const local = JSON.parse(localStorage.getItem("datos"));
    const limpiar =()=>{localStorage.removeItem("datos")       
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Historial borrado',
            showConfirmButton: false,
            timer: 1500
            })};

    
    if(local === null){
        return( 
            <>
                <button onClick={() => {link2("/");  document.querySelector(".card").style="display:block"}} className="historial-link">VOLVER</button>
                <p>sin cotizaciones</p>
            </>) 
    }else{
        return (
            <>
                <div className="modal-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Fecha de Cotización</th>
                                <th scope="col">Vivienda</th>
                                <th scope="col">Ubicación</th>
                                <th scope="col">Mts2.</th>
                                <th scope="col">Seguro Mensual</th>
                            </tr>
                        </thead>
                        <tbody >
                        {local.map(ver => {
                                return (
                                    <tr key={ver.id}>
                                        <td>{ver.fecha}</td>
                                        <td>{ver.propiedad}</td>
                                        <td>{ver.ubicacion}</td>
                                        <td>{ver.metrosCuadrados}</td>
                                        <td>${ver.poliza}</td>
                                    </tr>
                                );
                                })}   
                        </tbody>   
                    </table>            
                    <div className="modal-footer">
                    <button onClick={() => {link2("/"); document.querySelector(".card").style="display:block"}} className="historial-link">VOLVER</button>
                    <button onClick={limpiar} className="historial-link" >BORRAR</button>
                    </div>  
                </div> 
        </>
    );
}}

