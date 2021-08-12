import logo from './logo.svg';
import './App.css';
import {Reply} from './components/Reply.jsx';
import {data} from './data.js';
function App() {
  return (
    <div className="App">
      <Reply data = {data} />
    </div>
  );
}

export default App;
