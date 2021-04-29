
import './App.css';
import ImageSlider from './ImageSlider';
import SliderData from './SliderData';

function App() {
  return (
    <div className="App">
  <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
