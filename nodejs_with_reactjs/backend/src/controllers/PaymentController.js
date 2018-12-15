import mongoose from 'mongoose';
import { paymentschema} from "../models/testModels";


const Paymentinfo = mongoose.model('Paymentinfo',paymentschema);

export const addnewPayment = (req,res)=>{
    let newpayment = new Paymentinfo(req.body);

    newpayment.save((err,Paymentinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Paymentinfo);
    });
};