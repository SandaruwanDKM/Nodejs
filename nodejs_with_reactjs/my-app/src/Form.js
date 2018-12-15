import React,{Component} from 'react';
import axios from 'axios';



class Form extends Component {

    constructor(props) {
        super(props)
    }


    adduserDetails = function (event) {
        event.preventDefault();
        const firstName = event.target.elements.firstName.value;
        const LastName = event.target.elements.LastName.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const password =  event.target.elements.password.value;

        axios.post('http://localhost:3001/UserDetails',
            {
                firstName: firstName,
                LastName: LastName,
                email: email,
                phone: phone,
                password:password
            }
        ).then(result => {
            if (result.status == 200) {
                alert("Successfully Added")
                window.location.reload(true);
            }
        }).catch(err => {
            alert(err);
        })
    }

    render() {
        return (

                <div className="contact">

                    <div>
                        {/* <!-- Trigger the modal with a button --> */}
                        <button type="button" className="btn btn-outline-success" data-toggle="modal"
                                data-target="#super">Sign Up
                        </button>

                        {/* <!-- Modal --> */}
                        <div id="super" className="modal fade" role="dialog">
                            <div className="modal-dialog">

                                {/* <!-- Modal content--> */}
                                <div className="modal-content">
                                    <div className="modal-header align-items-center">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">User Registration</h4>
                                    </div>
                                    <div className="modal-body">

                                        <form onSubmit={(event) => this.adduserDetails(event)}>

                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">First Name:</label>
                                                <input type="text" className="form-control" id="supervisor_Name"
                                                       placeholder="First Name" name="firstName" required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Last Name:</label>
                                                <input type="text" className="form-control" id="employer_name"
                                                       placeholder="Last name" name="LastName" required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address:</label>
                                                <input type="email" className="form-control" id="supervisor_email"
                                                       aria-describedby="emailHelp" placeholder="Enter email"
                                                       name="email" required/>
                                                <small id="emailHelp" className="form-text text-muted">We'll never share
                                                    your email with anyone else.
                                                </small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Mobile Number:</label>
                                                <input type="text" className="form-control" id="phone"
                                                       placeholder="Enter your mobile number" name="phone" required/>

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Password:</label>
                                                <input type="password" className="form-control" id="password"
                                                       placeholder="Enter a password" name="password" required/>
                                            </div>
                                            <div className="modal-footer">

                                                <button type="submit" className="btn btn-primary">Register</button>

                                                <button type="button" className="btn btn-primary"
                                                        data-dismiss="modal"> Close
                                                </button>
                                            </div>
                                        </form>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Form;