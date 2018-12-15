import mongoose from 'mongoose';
import {UserDetails} from "../models/testModels";

const Userinfo = mongoose.model('Userinfo',UserDetails);

export const addnewuser = (req,res)=>{
    let newContact = new Userinfo(req.body);

    newContact.save((err,Userinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Userinfo);
    });
};

export const getUsers = (req,res)=>{
    Userinfo.find({},(err,Userinfo)=>{
        if(err){
            res.send(err);
        }
        res.json(Userinfo);
    });
};

