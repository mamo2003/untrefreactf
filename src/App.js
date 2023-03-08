import './styles/App.css';
import Title from './components/Title';
import './styles/Form.css';
import './styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/ChangeHistory';

export default function App() {
  return (
    <div className="container ">
      <h1 className="titulo">
        Asegura tu Hogar <span>🏡</span>
      </h1>
      <div className="Footer">
        <Footer />
      </div>
      <header className="App-header">
        <Title />
        <div></div>
      </header>
    </div>
  );
}


