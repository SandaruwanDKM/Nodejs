import React, { Component } from 'react';
import PropTypes from "prop-types";
import CartTabRow from "./CartTabRow";


class CartTab extends Component {

    static get propTypes() {
        return {
            cartItems: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
        //const tot=this.calctot();
        //alert(tot)

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    calctot(){
        // window.location.reload(true);
        let total=0;
        for(let i=0; i<this.props.cartItems.length;i++){
            const tot = this.props.cartItems.map(x=>x.unitPrice*x.quantity);
            total=total+tot[i]
        }
        return total
    }
    render(){
        this.cartItems = this.props.cartItems;
        return (
            <div>
                <table id="cart" className="table table-hover table-dark col-md">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th >Unit Price</th>
                        <th>Quantity</th>
                        <th className="text-center">Sub Total</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.cartItems.map(DrugsDetailsRequest => {
                            return <CartTabRow key={DrugsDetailsRequest._id} DrugsDetailsRequest={DrugsDetailsRequest} getAllItemDetails={() => this.props.getAllItemDetails()}/>
                        })
                    }
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="2" className="hidden-xs"></td>
                        <td className="hidden-xs text-center"><strong>Rs: {this.calctot()}</strong></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default CartTab;