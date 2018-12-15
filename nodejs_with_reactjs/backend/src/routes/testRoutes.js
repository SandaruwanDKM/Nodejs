import {addnewuser,
        getUsers
        } from "../controllers/testController";

const  routes = (app) => {
    app.route('/UserDetails')
        .get((req,res,next)=> {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        },getUsers)

        .post(addnewuser);

    app.route('/UserDetails/:UserDetailsId')
        .put((req,res)=>
            res.send('Put request successfull')
        )

        .delete((req,res)=>
            res.send('Delete request successfull')
        );
}

export default routes;