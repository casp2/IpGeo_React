import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Respuesta} from './Respuesta';
import axios from 'axios';

function App() {
  const APIKEY = "df1701bc528f4f9c9a51780e67cdbb45";
  const  [ip, setIp] = useState(0);
  const [respApi, setApi] = useState('');

  function handleTextIp(event) {
    setIp(event.target.value);

  }


  const  fetchApi = async e => {
    e.preventDefault();
    const api = `https://api.ipgeolocation.io/ipgeo?apiKey=${APIKEY}&ip=${ip}&fields=city`;

     const response = await axios.get(api).then((response) =>  { return response})
    .then(response => 
      setApi(response),
      console.log(respApi))
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={fetchApi}>
          <Form.Label>
            Ip Location:
            <Form.Control type="text" name="ip" onChange={handleTextIp}/>
            <Button name="Submit" type="submit"> Buscar Ubicacion</Button>
          </Form.Label>
          {respApi !== '' ? <Respuesta resp={respApi.data}></Respuesta> : 'test jeje'}
        </Form>
      </header>
    </div>
  );
}

export default App;
