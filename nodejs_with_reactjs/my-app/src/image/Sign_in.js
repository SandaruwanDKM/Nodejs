import React,{Component} from 'react';
import axios from 'axios';


class login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            errorEmail: false,
            errorPassword : false,
            StudentBool : false,
            SupervisorBool : false,
            userAuth : true,
            user : [],
            errorForDB:""
        }
    }
    onLogin =  (event)=>{
        event.stopPropagation();
        event.preventDefault();

        if(this.state.email.length === 0 & this.state.password.length === 0){
            this.setState({errorForDB : ''})
            this.setState({errorEmail : true})
            this.setState({errorPassword : true})

        }else if(this.state.email.length === 0 & this.state.password.length > 0){
            this.setState({errorForDB : ''})
            this.setState({errorEmail : true})
            this.setState({errorPassword : false})

        }else if(this.state.email.length > 0 & this.state.password.length === 0){
            this.setState({errorForDB : ''})
            this.setState({errorEmail : false})
            this.setState({errorPassword : true})

        }else{
            this.setState({errorEmail : false})
            this.setState({errorPassword : false})

            this.existMethod()
        }

    }
    onEmail = (event)=>{
        this.email = event.target.value;
        this.setState({email : this.email});
    }

    onPassword = (event)=>{
        this.password = event.target.value;
        this.setState({password : this.password});
    }
    showErrorMessge = () =>{

        if(this.state.errorEmail === true & this.state.errorPassword === true){
            return(<div className="alert alert-danger">
                <span style={{color:"red"}}>Email Field is <b>reaquierd</b></span><br/>
                <span style={{color:"red"}}>Password Field is <b>reaquierd</b></span>
            </div>);
        }else if(this.state.errorEmail === false & this.state.errorPassword === true){
            return(<div className="alert alert-danger">
                <span style={{color:"red"}}>Password Field is <b>reaquierd</b></span>
            </div>);
        }else if(this.state.errorEmail === true & this.state.errorPassword === false){
            return(<div className="alert alert-danger">
                <span style={{color:"red"}}>Email Field is <b>reaquierd</b></span>

            </div>);
        }
    }
    existMethod = () =>{
        var self = this;
        this.ifStudentExist(this.email).then(function(){
            console.log("hello");
            self.DBValidation();
        });
        this.ifSupervisorsExist(this.email).then(function(){
            console.log("exist method")
            self.DBValidation();
        });
    }
    DBValidation(){

        const self = this;
        if(this.state.StudentBool === 'true' && this.state.SupervisorBool === 'true'){

            self.StudentAuth(self.email,self.password).then(function(){

                if(self.state.StudentAuth === 'true'){
                    self.setState({errorForDB : ''});

                    self.Student(self.email).then(function(){
                        self.props.history.push(`/Student_Form_Main?token=${self.state.Supervisor._id}`);
                    })

                }else{
                    self.setState({errorForDB : [<div className="alert alert-danger"><span style={{color:"red"}}>Email or password is <b>Incorect</b></span></div>]});
                }

            });
        }

        // console.log(this.state.SupervisorBool + " super Bool out");

        if(this.state.SupervisorBool === 'true'){
            self.SupervisorAuth(self.email, self.password).then(function(){

                if(self.state.SupervisorAuth === 'true'){

                    self.setState({errorForDB : ''});

                    self.Supervisor(self.email).then(function(){
                        self.props.history.push(`Supervisor_Form_Page/?token=${self.state.Supervisor._id}`);
                    })


                }else{
                    self.setState({errorForDB : [<div className="alert alert-danger"><span style={{color:"red"}}>Email or password is <b>Incorect</b></span></div>]});
                }
                //
            });
        }else{
            // console.log("OUT ELSE StdBool");
            this.setState({errorForDB : [<div className="alert alert-danger"><span style={{color:"red"}}>Email or password is <b>Incorect</b></span></div>]});
        }
    }

    render(){
        return(
            <div className="well login" style={{padding:"30px",marginTop:"20px"}}>
                <center>
                    <h3 style={{fontFamily:"'Marcellus', serif"}}>Sign in</h3>
                    {
                        this.showErrorMessge()
                    }
                    {
                        this.state.errorForDB
                    }
                    <form action="/" className="" onSubmit={(event)=>this.onLogin(event)} >
                        <div class="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                onChange ={(event)=>this.onEmail(event)}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="pwd"
                                placeholder="Password"
                                onChange ={(event)=>this.onPassword(event)}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary logbtn">LOGIN</button>
                    </form>
                </center>
            </div>
        );
    }

    ifUserExist = (email) =>{
        return new Promise ((resolve,reject)=>{
            axios.get('http://localhost:3001/UserDetails'+ email ).then(function(res){
                let StudentBool = res.data.data;
                this.setState({StudentBool : StudentBool});
                resolve();
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        })
    }

    User = (email) =>{
        return new Promise ((resolve , reject)=>{
            axios.get('http://localhost:3001/UserDetails'+ email ).then(function(res){
                let Student = res.data.data;
                this.setState({Student : Student});
                resolve();
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        })
    }

    UserAuth = (email,password) =>{
        return new Promise((resolve, reject)=>{
            axios.get('http://localhost:3001/SPM/ALLstudent/checkAuthStudent/'+ email + '/' + password ).then(function(res){
                let StudentAuth = res.data.data;
                this.setState({StudentAuth : StudentAuth});
                resolve();
            }.bind(this)).catch(function (error) {
                console.log(error);
                reject()
            });
        });
    }
}