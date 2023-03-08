import { DateTime } from "luxon";
import React from 'react';
import Swal from "sweetalert2";

const Goup = (m) => {
    m.preventDefault();
    let history = [historial,setHistorial]=React.useState([{}]);
    let metros = parseInt(m.target.ingreso.value);
    let propiedad = m.target.propiedad.value;
    let zona =m.target.zona.value;
    let Total=0;    
    let PrecioMetro = 10;
    let Pph=0;let Pc2=0;let Pmn=0;let Plt=0;let Pc3=0;let Pdt=0;let Pcq=0;let Pd3=0;
    let Pzo=0;let Pze=0;let Pbp=0;let Pzs=0;let Pzc=0;let Pmc=0;let Pzr=0;let Pzn=0;

    if (propiedad==="Ph") {Pph = 140;};if (propiedad==="Casa 2 Ambientes") {Pc2 = 200;};if (propiedad==="Mansion") {Pmn = 600;};if (propiedad==="Loft") {Plt = 120;};if (propiedad==="Casa 3 Ambientes") {Pc3 = 2600;};if (propiedad==="Departamento") {Pdt = 180;};if (propiedad==="Casaquinta") {Pcq = 500;};if (propiedad==="Departamento 3 Ambientes") {Pd3 = 260;}
    if (zona==="Zona Oeste") {Pzo = 56;};if (zona==="Zona Este") {Pze = 82;};if (zona==="Barrio Privado") {Pbp = 168;};if (zona==="Zona Sur") {Pzs = 43;};if (zona==="Zona Centro") {Pzc = 87;};if (zona==="Microcentro") {Pmc = 96;};if (zona==="Zona Rural") {Pzr = 153;};if (zona==="Zona Norte") {Pzn = 72;}

    let Pvivienda= Pph+Pc2+Pmn+Plt+Pc3+Pdt+Pcq+Pd3;
    let Pubicacion = Pzo+ Pze+Pbp+Pzs+Pzc+Pmc+Pzr+Pzn;
    let TotalPrecioMetro = PrecioMetro * metros;

    Total= TotalPrecioMetro+Pubicacion+Pvivienda;

    if (metros < 10) {
        Swal.fire({
                icon: 'error',
                title: 'te olvidas de algo!',
                text: 'el minimo son 10 mts2',
            })
        ;
    } if (metros > 500) {
        Swal.fire({
                icon: 'error',
                title: 'te olvidas de algo!',
                text: 'el maximo a cotizar es de  500 mts2',
            })
        ;
    } if (isNaN(metros) === true) {
        Swal.fire({
                icon: 'error',
                title: 'te olvidas de algo!',
                text: 'debes agregar los metros cuadrados',
            })
            ;
    }

    if ((metros > 10 && metros < 601) && isNaN(metros) === false) {

        let fecha = DateTime.now().toLocaleString();
        let hora = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
        let id = Math.trunc(Math.random() * 1000);
            history = {
            'id': id,
            'fecha': fecha + ' ' + hora,
            'propiedad': propiedad,
            'ubicacion': zona,
            'metrosCuadrados': metros,
            'poliza': Total,
        }
        Swal.fire({
        icon: 'success',
        title: 'Cotizacion guardada con exito',
        showConfirmButton: false,
        timer: 1500
        });
    }

    React.useEffect(() =>{
        const data = localStorage.getItem("datos");
        if(data){
        setHistorial(JSON.parse(data));
        }
    })

    React.useEffect(() => {
        localStorage.setItem("datos", JSON.stringify(history));
    })
}
export default Goup;

