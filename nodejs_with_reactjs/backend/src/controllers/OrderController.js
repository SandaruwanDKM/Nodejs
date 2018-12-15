import mongoose from 'mongoose';
import {Orders} from "../models/testModels";

const Orderinfo = mongoose.model('Orderinfo',Orders);

export const addnewOrder =(req,res)=>{
    let newOrder = Orderinfo(req.body);

    newOrder.save((err,Orderinfo)=>{
        if(err){
            res.send(err)
        }
        res.json(Orderinfo);
    });
};
export const getOrder = (req,res)=>{
    Orderinfo.find({},(err,Orderinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Orderinfo);
    });
};

export const deleteOrder = (req,res)=>{
    Orderinfo.remove({_id: req.params.OrderId},(err,Orderinfo)=>{
        if(err){
            res.send(err);
        }
        res.json({message:'Successfully Deleted'});
    })
};
export const getOrderItem = (req,res)=>{
    Orderinfo.findOne({_id: req.params.OrderId},(err,Orderinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Orderinfo);
    })
};
export const UpdateOrder = (req,res)=>{
    Orderinfo.findOneAndUpdate({_id: req.params.OrderId},req.body,{new:true},(err,Orderinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Orderinfo);
    })
};