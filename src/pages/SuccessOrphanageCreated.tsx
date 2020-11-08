import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/success-orphanage-created.css";

export default function SuccessOrphanageCreated() {
  return (
    <div id="page-success">
      <div className="content-wrapper">
        <h1 className="title">Ebaaa</h1>

        <p className="message">
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </p>

        <Link to="/app">
          <button className="btnBack">
            Voltar para o mapa
          </button>
        </Link>
      </div>
    </div>
  );
}
