import {addnewPayment} from "../controllers/PaymentController";

const PaymentRoute =(app)=>{
    app.route('/Payments')
        .get((req,res,next)=> {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        })
        .post(addnewPayment);
}

export default PaymentRoute;