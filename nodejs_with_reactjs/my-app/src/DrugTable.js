import React, { Component } from 'react';
import PropTypes from "prop-types";
import DrugTableRow from './DrugTableRow';

class DrugTable extends Component {

    static get propTypes() {
        return {
            druginfo: PropTypes.array
        }
    }

    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }


    render(){
        this.druginfo = this.props.druginfo;
        return (
            <div className="drugtab">
                <table width="100%" className="table table-striped table-dark table-hover"
                       id="dataTables-example">
                    <thead>
                    <tr>
                        <th>Drug Name</th>
                        <th>Drug Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.druginfo.map(DrugsDetailsRequest => {
                            return <DrugTableRow key={DrugsDetailsRequest._id} DrugsDetailsRequest={DrugsDetailsRequest} getAllDrugDetails={() => this.props.getAllDrugDetails()}/>
                        })
                    }




                    </tbody>
                </table>
            </div>
        );
    }
}

export default DrugTable;
