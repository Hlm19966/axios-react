
import './App.css';
import Weather from './Weather';
import Temperature from './Temperature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Weather city="Paris" />
      <Weather city="New york" />
      <Temperature city="Seoul" />
      </header>
    </div>
  );
}

export default App;
