import express from 'express';
import * as historyServices from '../controllers/historyController';
const router = express.Router();

router.get('/', async ( _req, res ) => {
    res.json( await historyServices.getHistory() )
})

router.post('/', async ( req, res ) => {
    res.json( await historyServices.addHistory( req.body ))
})

export default router;