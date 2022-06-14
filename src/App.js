import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://test-dep-app-back.herokuapp.com/api")
      .then((res) => res.json())
      .then((json) => setData(json[0]));
  }, []);
  return (<div className="App">
    <div>value:{data?.title}</div>
  </div>)
  
}

export default App;
