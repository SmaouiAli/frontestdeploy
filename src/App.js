import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://deployt-est.herokuapp.com/api/data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (<div className="App">
    <div>value:{data?.results}</div>
  </div>)
  
}

export default App;
