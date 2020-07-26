// mapeamento do ojeto para como será inserido na base de dados
// estamos criando tipo um 'schema' mas no mongo é nosql e não usa esquema
// porém, esta criação é util para validação dos dados.

const restful = require('node-restful')
// pega referencia do mongoose dentro do restful
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, requires: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO','PEDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number
            , min: 1
            , max: [12, "O mes informado '{VALUE}' é maior que o permitido"]
            , required: true },
    year: { type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)