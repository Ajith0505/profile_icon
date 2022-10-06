import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function Dummy(){

    let {id}= useParams();
    console.log("--------------------------",useParams());
    return (
    <div>
        <Header />
        <h1>{id}</h1>
    </div>
    );
}

export default Dummy;
