import mongoose from 'mongoose';
import {Drug} from "../models/testModels";

const Druginfo = mongoose.model('Druginfo',Drug);

export const addnewDrug = (req,res)=>{
    let newContact = new Druginfo(req.body);

    newContact.save((err,Druginfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Druginfo);
    });
};
export const getDrugs = (req,res)=>{
    Druginfo.find({},(err,Druginfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Druginfo);
    });
};
export const serachdrug = (req,res)=>{
    Druginfo.find({_id: req.params.DrugId},(err,Druginfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Druginfo);
    });
};

export const deleteDrug = (req,res)=>{
    Druginfo.remove({_id: req.params.DrugId},(err,Druginfo)=>{
        if(err){
            res.send(err);
        }
        res.json({message:'Successfully Deleted'});
    })
};