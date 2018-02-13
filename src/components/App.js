import React from 'react'

import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: 'Maracanã',
        data: '24/02/2018 ',
        horario: ' 17h00'
    },
    casa: {
        nome: 'Flamengo'
    },
    visitante: {
        nome: 'Santos'
    }
}

export default class App extends React.Component {
    render(){
        return <PlacarContainer partida={dados.partida}
                                casa={dados.casa}
                                visitante={dados.visitante} />
    }
}