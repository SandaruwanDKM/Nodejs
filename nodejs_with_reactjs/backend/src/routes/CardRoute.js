import {addnewCard,
        getCardinfo,
        deleteCard
} from "../controllers/CardController";


const CardRoutes = (app) =>{

        app.route('/CardPayment')
        .get((req,res,next)=> {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        },getCardinfo)
        .post(addnewCard);

    app.route('/CardPayment/:CardPaymentId')
        .put((req,res)=>
            res.send('Put request successfull')
        )
        .delete(deleteCard);

}

export default CardRoutes;