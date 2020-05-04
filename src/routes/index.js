// rquerimos el método Router del módulo express que ya esta llamado en l idnex.js de la app
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => res.json({message: 'Hello world'}));

module.exports = router; 