import express from 'express';
import * as historyServices from '../controllers/historyController';
const router = express.Router();

router.get('/', async ( _req, res ) => {
    res.json( await historyServices.getHistory() )
})

router.post('/', async ( req, res ) => {
    res.json( await historyServices.addHistory( req.body ))
})

router.delete('/:id', async ( req, res ) => {
    const { id } = req.params;
    res.json( await historyServices.deleteHistory( id ))
})

export default router;