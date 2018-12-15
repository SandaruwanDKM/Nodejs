import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import swal from 'sweetalert';


class TestcardEle extends Component {

    static get propTypes() {
        return {
            DrugsDetailsRequest: PropTypes.object,
            getAllDrugDetails: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            items: []

        };
        this.DrugsDetailsRequest = this.props.DrugsDetailsRequest;
        this.getAllDrugDetails = this.props.getAllDrugDetails;

    }


    delete(id) {
        axios.delete('http://localhost:3001/Drug/' + id).then(results => {
            if(results.status === 200) {
                this.getAllDrugDetails();
            }
        })
    }

    AddItems(id,itemName,price) {

        const item_Name= itemName;
        const item_price = price;
        axios.post('http://localhost:3001/Orders/',
            {
                item_name: item_Name,
                unitPrice: item_price,
            }
        ).then(result => {
            if (result.status == 200) {
                window.location.reload(true);
            }
        }).catch(err => {
            alert(err);
        })
        swal("Item was added");
    }


    render(){
        return (
            <div className="row d-inline">
                        <div className="col-xs12 col-sm-6 col-md-4 d-inline-block">
                            <div className="image-flip " onTouchStart="this.classList.toggle('hover');">
                                <div className="mainfilp ">
                                    <div className="backside">
                                        <div className="card m-3 hover-bg-light-green">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">{this.DrugsDetailsRequest.drugName}</h4>
                                                <p className="card-text">Rs:
                                                    {this.DrugsDetailsRequest.drugPrice}
                                                </p>
                                                <a className="btn btn-success" onClick={(e) => this.AddItems(this.DrugsDetailsRequest._id,this.DrugsDetailsRequest.drugName,this.DrugsDetailsRequest.drugPrice)}>Add to cart</a>
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

export default TestcardEle;
