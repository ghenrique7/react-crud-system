import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main icon="home" title=" Inicio" 
    subtitle="Segundo Projeto de React">
        <div className="display-4 text-center">
            Bem Vindo!
        </div>
        <hr />
        <p className="mt-0">
            Sistema para exemplificar a construção de um cadastro
            em React.
        </p>
    </Main>