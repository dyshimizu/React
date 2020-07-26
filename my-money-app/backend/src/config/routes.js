// ao realizar um require em um modulo, é retornado uma instância SingleTon
// mas caso realize um 'const server = express()' ai eu estarei criando uma nova instância.
const express = require('express')

// Como não quero criar um novo servidor, o jeito Node de recuperar a instancia de outro lugar
// é exportando uma função que recebe através de parâmetro.
module.exports = function(server){

    // Definir URL base para toda as rotas
    const router = express.Router()
    // Para todas as URLs que forem /api, serão direcionado para o midleware 'router'
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    // register é uma função no restfull que registra todos os webservices na url billingCycles
    BillingCycle.register(router, '/billingCycles')
}