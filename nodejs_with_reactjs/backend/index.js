import express from 'express';
import routes from './src/routes/testRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Drugroutes from "./src/routes/drugRoutes";
import OrderRoutes from "./src/routes/OderRoutes";
import CardRoutes from "./src/routes/CardRoute";
import PaymentRoute from "./src/routes/PaymentRoute";
var cors = require ('cors');
var paypal = require('paypal-rest-sdk');


const app = express();
const PORT = 3001;


//mongoos connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testdb',{
    useNewUrlParser:true
});

app.use(cors());

//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);
Drugroutes(app);
OrderRoutes(app);
CardRoutes(app);
PaymentRoute(app);


app.get('/',(req,res)=>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT,()=>
    console.log(`Your server is running on port ${PORT}`)
);