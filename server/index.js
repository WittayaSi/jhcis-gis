import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import con from './models/dbconnection';
import { get_houses, get_village } from './models/querycommand';
import auth from './routes/auth';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/auth', auth);

// app.post('/api/auth', (req, res) => {
//     res.status(400).json({errors: {global: "Invalid credentials"}});
// })

app.get('/api/homes', (req, res)=>{
    //console.log(req);
    con.query(get_houses, (err, results)=>{
        if(err) throw err
        return res.send({
            error   : false,
            data    : results
        });
    });
});

app.get('/api/village', (req, res)=>{
    //console.log(req);
    con.query(get_village, (err, results)=>{
        if(err) throw err
        return res.send({
            error   : false,
            data    : results
        });
    });
});

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(3001, ()=>{
    console.log('Server Running on localhost:3001');
});