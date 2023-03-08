import '../styles/Form.css';
import Petition from './Petition';
import Price from './Price';
import React ,{useRef} from 'react';


function Title () {
  const Look = useRef();
  return (
    <main ref={Look} className='card'>
      <h3 className='subtitulo'>Que deseas cotizar?</h3>
      <div className='container'>
      <Petition />
      <Price />
      </div>
    </main>
  );
}
export default Title;