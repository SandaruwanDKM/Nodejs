import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';


class FormI3TableRows extends Component {

    static get propTypes() {
        return {
            DrugsDetailsRequest: PropTypes.object,
            getAllDrugDetails: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.DrugsDetailsRequest = this.props.DrugsDetailsRequest;
        this.getAllDrugDetails = this.props.getAllDrugDetails;

    }

    delete(id) {
        axios.delete('http://localhost:3001/Drug/' + id).then(results => {
            if(results.status == 200) {
                this.getAllDrugDetails();
                window.location.reload(true);
            }
        })
    }

    render(){
        return (

            <tr className="odd gradeX">
                <td className="center">{this.DrugsDetailsRequest.drugName}</td>
                <td className="center">{this.DrugsDetailsRequest.drugPrice}</td>
                <td className="center">{this.DrugsDetailsRequest.qty}</td>
                <td>
                    <button class="btn btn-primary" onClick={(e) => this.delete(this.DrugsDetailsRequest._id)}>Delete
                    </button>
                </td>

            </tr>

        );
    }
}

export default FormI3TableRows;
