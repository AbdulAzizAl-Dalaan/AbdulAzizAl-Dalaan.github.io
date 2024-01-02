import './App.css';
import { CircularProgress } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='neon-text'>
          Progress Over Perfection
        </p>
        <CircularProgress color="secondary" />
      </header>
    </div>
  );
}

export default App;
