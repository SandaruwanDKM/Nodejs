import React, { Component } from 'react';
import PropTypes from "prop-types";
import TestcardEle from './TestcardEle';

class Testcard extends Component {

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

                        {
                            this.druginfo.map(DrugsDetailsRequest => {
                                return <TestcardEle key={DrugsDetailsRequest._id} DrugsDetailsRequest={DrugsDetailsRequest} getAllDrugDetails={() => this.props.getAllDrugDetails()}/>
                            })
                        }

            </div>
        );
    }
}

export default Testcard;
