import './App.css';
import editRequest from './apis';

function App() {
const img1 = 'data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7=='
const img2 = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==' 
return (
    <div className="App">
      <img src={img1} alt="test" />
    </div>
  );
}

export default App;
