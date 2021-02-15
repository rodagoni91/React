import React from "react";

export default function Saludar(props){

    const saludar = () => {
        alert("Hola Daniel");
    }

    //DESTRUCTURINGS
    const {userInfo, saludar2} = props;
    const { nombre = "Anonimo", apellido = "Lopez Perez"} = userInfo;
    //

    return(
        <div class="container">
            <div class="justify-text-center">
                <h1>Hola soy {apellido}<br/>
                tengo {props.userInfo.edad} anios</h1>
            </div>
            <div class="text-center">
                <button onClick={() => props.saludar2(nombre)}>Puchale Aqui</button>
            </div>
        </div>
    );
}