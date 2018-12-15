import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserDetails = new Schema({
    firstName:{
        type:String,
        required:'Enter a first name'
    },
    LastName:{
        type:String,
        required:'Enter a last name'
    },
    email:{
        type:String,
        required:'Enter a email'
    },
    phone:{
        type:Number,
        required:'Enter a phone'
    },
    password:{
        type : String
    },
    created_date:{
        type:Date,
        default:Date.now()
    }
})

export const Drug = new Schema ({
    drugName:{
        type:String,
        require:true
    },
    drugPrice:{
        type:Number,
        require:true
    },
    qty:{
        type:Number,
        require:true
    },
    loyaltyPoints:{
        type:Number,
        require:true,
        autoIncrement:1
    }
});


export const Orders = new Schema({
    item_name :{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        default:1
    },
    unitPrice:{
        type:Number,
        require:true
    },
    totalPrice:{
        type:Number,
        require:true,
        default:0
    }
});

export const Cardschema = new Schema({
    Cardnumber:{
        type:String,
        require:true
    },
    CardName:{
        type:String,
        require:true
    },
    ExpMonth:{
        type:String,
        require:true
    },
    ExpDate:{
        type:Number,
        require:true
    },
    Cvcnumber:{
        type:String,
        require:true
    }
});

export const paymentschema = new Schema({
    orderid:
        {
            type:String,
            require:true
        }
    ,
    TotalPrice: {
        type: Number,
        require: true
    },
    cardID:{
        type:String,
        require:true
    }

});



