import React,{Component} from 'react';
import axios from "axios";
import CartTab from "./CartTab";

class Cart extends Component{

    constructor(props) {
        super(props)

        this.state={
            cartItems: [],

        }
        this.getAllItemDetails();


    }
    addCardDetails = function (event) {
        event.preventDefault();
        const CardName = event.target.element.CCname.value;
        const cardNumber = event.target.elements.cc_number.value;
        const ExpDate = event.target.elements.cc_exp.value;
        const CVC = event.target.element.x_card_code.value;


        axios.post('http://localhost:3001/Cardschema',
            {
                Cardnumber: CardName,
                CardName: cardNumber,
                ExpDate: ExpDate,
                Cvcnumber: CVC,
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

    getAllItemDetails() {
        axios.get('http://localhost:3001/Orders').then(res=>{
            console.log(res);
            this.setState({
                cartItems:res.data
            });

        })
    }

    calctot(){
        let total=0;
        for(let i=0;i<this.state.cartItems.length;i++){
            const tot = this.state.cartItems.map(x=>x.unitPrice*x.quantity);
            total=total+tot[i]
        }
        return total
    }

    render(){
        return(

    <div>
            {/* <!-- Trigger the modal with a button --> */}
            <button id="cartbutton" type="button" className="btn btn-info ml-4" data-toggle="modal"
                    data-target="#cart">
            </button>

        {/* <!-- Modal --> */}
        <div id="cart" className="modal fade" role="dialog">
            <div className="modal-dialog">

                {/* <!-- Modal content--> */}
                <div id="cartmodel" className="modal-content">
                    <div className="modal-header align-items-center">
                        <button className="btn btn-outline-danger" data-dismiss="modal">close</button>
                        <h4 className="modal-title">Cart Items</h4>
                    </div>
                    <div className="modal-body">
                        <section>
                            <div className="container">
                                <CartTab cartItems={this.state.cartItems} getAllItemDetails={()=>this.getAllItemDetails()}/>
                            </div>
                        </section>
                        <td><a data-target="#payment" className="btn btn-success btn-block">Checkout <i className="fa fa-cart-plus "/></a></td>
                    </div>

                </div>
                {/* <!-- payment form --> */}
                <div  id="payment" className="modal-content">
                    <div className="modal-body">
                        <div id="pay-invoice" className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center">Pay Invoice</h3>
                                </div>
                                <hr/>
                                <form method="post" action="https://sandbox.payhere.lk/pay/checkout" className="needs-validation">
                                    <input type="hidden" name="merchant_id" value="1211734"/>
                                    <input type="hidden" name="return_url" value="http://sample.com/return"/>
                                    <input type="hidden" name="cancel_url" value="http://sample.com/cancel"/>
                                    <input type="hidden" name="notify_url" value="http://sample.com/notify"/>
                                    <input type="hidden" name="order_id" value="ItemNo12345"/>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Item Category:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="Item Category" name="items" value="Drugs" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Amount:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="Amount" name="amount" value={this.calctot()} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">First Name:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="First Name" name="first_name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Last Name:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="Last Name" name="last_name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">email:</label>
                                        <input type="email" className="form-control" id="supervisor_Name"
                                               placeholder="email address" name="email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Phone Number:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="Phone Number" name="phone" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Address:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="Address" name="address" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">City:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="City" name="city" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Country:</label>
                                        <input type="text" className="form-control" id="supervisor_Name"
                                               placeholder="Country" name="country" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Select Currency:</label>
                                        <select placeholder="Currency" name="currency" className="form-control" id="sel1">
                                            <option>LKR</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Pay Now</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     </div>
        );
    }

}

export default Cart;