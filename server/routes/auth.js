import express from 'express';
import con from '../models/dbconnection';

import { toAuthJSON } from '../models/User';

const router = express.Router();

router.post('/', (req, res) => {
    const { credentials } = req.body;
    console.log(credentials);
    con.query("SELECT username, password FROM user WHERE username = '"
         + credentials.username + 
         "' AND password = '" 
         +  credentials.password + "'",
        (err, results) => {
            console.log(results);
            if(Object.keys(results).length !== 0){
                res.json({user: toAuthJSON(results[0]) });
            }else{
                res.status(400).json({ errors: { global: "Invalid credentials" } });
            }
        });
    
});

export default router;