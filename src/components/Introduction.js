import React from "react";

function Introduction(props) {
    return(
        <div>
            <h1>INTRODUCTION</h1>
            <p>Nama Saya Adalah : {props.nama}</p>
        </div>
    );
}

export default Introduction;