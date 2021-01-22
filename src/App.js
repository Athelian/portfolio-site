import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='menu'>
      <div className="title-box" id="title-box">
        <span id="a">Eliot <br/>Austin<br/> Forbes</span>
        <button className='link' id='about'><span>About</span></button>
        <button className='link' id='projects'><span>Projects</span></button>
        <button className='link' id='github'><span>GitHub</span></button>
      </div>
    </div>
  );
}

export default App;