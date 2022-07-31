import React from "react";
import Form from "react-bootstrap/Form";

const componente = resp =>{
    console.log(resp)

 return (
    <div >Ubicacion: 
    {' '+resp.city}
    </div>)
}

function Respuesta(props){
    return(
    <div>
    {componente(props.resp)}
    </div>
    );
}
export {Respuesta};


