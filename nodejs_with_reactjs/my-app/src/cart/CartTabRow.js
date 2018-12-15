import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import swal from 'sweetalert';



class CartTabRow extends Component {

    static get propTypes() {
        return {
            DrugsDetailsRequest: PropTypes.object,
            getAllItemDetails: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.DrugsDetailsRequest = this.props.DrugsDetailsRequest;
        this.getAllItemDetails = this.props.getAllItemDetails;

        this.state = {
            textInputValue1: '',
            textInputValue2:'',
            total : [],
            subtot1:''
        };
        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log( this.state.textInputValue2);
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    delete(id) {
        axios.delete('http://localhost:3001/Orders/' + id).then(results => {
            if(results.status === 200) {
               this.getAllItemDetails();
                swal("Item was successfully deleted!", "You clicked the button!", "success");
            }
        })
    }
    publish() {
        console.log( this.state.textInputValue1);
        console.log( this.state.subtot);
    }

    Updateitem(id) {
        var qty=this.state.textInputValue1;

        axios.put('http://localhost:3001/Orders/' + id,

            {
                quantity:qty,
            }
            ).then(results => {

            if(results.status === 200) {

            }
        })
    }

    render(){
        let subtot = this.DrugsDetailsRequest.unitPrice*this.state.textInputValue1;
        // this.setState({
        //     subtot1:this.DrugsDetailsRequest.unitPrice*this.state.textInputValue1
        // })

        console.log(this.subtot1);
        return (

                <tr>
                    <td data-th="Product">
                        <p>{this.DrugsDetailsRequest.item_name}</p>
                    </td>
                    <td> Rs: {this.DrugsDetailsRequest.unitPrice}</td>
                    <td>
                        <input name="textInputValue1" type="number" className="form-control text-center"  onChange={ this.handleChange } />
                    </td>
                    <td className="text-center">
                        <input name="textInputValue2" type="text" className="form-control text-center" value={subtot}/>
                    </td>
                    <td className="actions">
                        <button className="btn btn-danger btn-sm" onChange={ this.Updateitem(this.DrugsDetailsRequest._id)}>Update</button>
                    </td>
                    <td className="actions">
                        <button className="btn btn-danger btn-sm" onClick={(e) => this.delete(this.DrugsDetailsRequest._id)}>Delete</button>
                    </td>
                </tr>

        );
    }
}


export default CartTabRow;
