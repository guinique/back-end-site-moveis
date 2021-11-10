const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/', auth, (req, res) =>{
    console.log(res.locals.auth_data)
    return res.send({message: 'Tudo ok com o GET index'})
})

router.post('/', (req, res) =>{
    return res.send({message: 'Tudo ok com o post index'})
})

module.exports = router;

/*

200 - OK
201 - CREATED
202 - ACCEPTED

400 - BAD REQUEST
401 - UNAUTHORIZED - AUTENTICAÇÃO - TEMPORÁRIO
403 - FORBIDDEN - AUTORIZAÇÃO - PERMANENTE

500 - INTERNAL SERVER ERROR
501 - NOT IMPLEMENTED - API NAO SUPORTA ESSA FUNCIONALIDADE
503 - SERVICE UNAVAILABLE - A API EXECUTA, MAS NAO NO MOMENTO
*/