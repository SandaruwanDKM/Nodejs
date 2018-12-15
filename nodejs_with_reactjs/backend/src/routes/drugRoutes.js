import {addnewDrug, getDrugs,deleteDrug,serachdrug} from "../controllers/DrugController";


const Drugroutes = (app) =>{
    app.route('/Drug')
        .get((req,res,next)=> {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        },getDrugs)
        .post(addnewDrug);

    app.route('/Drug/:DrugId')
        .put((req,res)=>
            res.send('Put request successfull')
        )

        .delete(deleteDrug)
        .get((req,res,next)=> {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        },serachdrug);
}

export default Drugroutes;