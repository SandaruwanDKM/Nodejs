import mongoose from 'mongoose';
import {Cardschema} from "../models/testModels";


const Cardinfo = mongoose.model('Cardinfo',Cardschema);

export const addnewCard = (req,res)=>{
    let newCardpayment = new Cardinfo(req.body);

    newCardpayment.save((err,Cardinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Cardinfo);
    });
};

export const getCardinfo = (req,res)=>{
    Cardinfo.find({},(err,Cardinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Cardinfo);
    });
};

export const deleteCard = (req,res)=>{
    Cardinfo.remove({_id: req.params.CardPaymentId},(err,Cardinfo)=>{
        if(err){
            res.send(err);
        }
        res.json({message:'Successfully Deleted'});
    })
};