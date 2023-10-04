import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import NavBar from "./NavBar";

function Crud() {
    return (
        <div>
            <NavBar />
        {/* Renderizar formulário de edição/criação aqui */}
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={handleDelete}>Excluir</button>
        </div>
    )
}
export default Crud;