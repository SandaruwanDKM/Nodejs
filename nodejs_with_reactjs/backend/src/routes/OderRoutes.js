import {
    addnewOrder,
    getOrder,
    deleteOrder,
    UpdateOrder,
    getOrderItem
} from "../controllers/OrderController";


const OrderRoutes = (app)=>{
    app.route('/Orders')
        .get((req,res,next)=> {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        },getOrder)

        .post(addnewOrder);

    app.route('/Orders/:OrderId')
        .get(getOrderItem)
        .put(UpdateOrder
        )
        .delete(deleteOrder
        );
}

export default OrderRoutes;