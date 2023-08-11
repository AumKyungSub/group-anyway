import './App.css';
import { BrowserRouter } from 'react-router-dom'
import SpaProgram from './contentComponent/SpaProgram';

function App() {
  return (
    <BrowserRouter>      
      <SpaProgram />
    </BrowserRouter>
  );
}

export default App;
