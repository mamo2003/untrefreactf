import '../styles/Form.css'
import '../styles/Footer.css';
import {useNavigate } from "react-router-dom";



export const BtnHistory = () => {
  const link = useNavigate();
  return (
    <>
      <div>
          <button onClick={() => { link("Historial");document.querySelector(".card").style="display:none"}} className="historial-link" >HISTORIAL</button>
      </div>
    </>
  );
}
export default BtnHistory ;

