import React from "react";

export default function HolaMundo(){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h1 class="title">Hola Mundo</h1>
                </div>
                <div class="col-sm-6">
                    <h2>Adios Popo</h2>
                </div>
            </div>
        </div>
    );
}

export function AdiosMundo(){
    return(
        <div>   
            <h2>Adios Componente</h2>
        </div>
    );
}

