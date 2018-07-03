import express from 'express';
import con from '../models/dbconnection';

const router = express.Router();

router.post('/', (req, res) => {
    const { villcode } = req.body;
    console.log(villcode);
    con.query(`SELECT h.hcode, h.hno, h.villcode, h.xgis, h.ygis
        FROM house h
        WHERE h.villcode = ${villcode};
    `,
        (err, results) => {
            console.log(results);
            res.json({ house: results });
        }
    );
    
});

export default router;