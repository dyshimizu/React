import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Sorteio = props => {
    const { min, max } = props.numeros
    return (
        <Card title="Sorteio de Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{parseInt(Math.random() * (max - min)) + min}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio)