import React,{Component} from 'react';
import axios from "axios";
import DrugTable from "./DrugTable";
import swal from 'sweetalert';

class Drugs extends Component{


    constructor(props) {
        super(props)

        this.state={
            druginfo: [],

        }
        this.getAllDrugDetails();

    }

    getAllDrugDetails() {
        axios.get('http://localhost:3001/Drug').then(res=>{
            console.log(res);
            this.setState({
                druginfo:res.data
            });

        })
    }

    addDrugsDetails = function (event) {
        event.preventDefault();
        const drugName = event.target.elements.drugName.value;
        const drugPrice = event.target.elements.drugPrice.value;
        const quantity = event.target.elements.quantity.value;

        axios.post('http://localhost:3001/Drug/',
            {
                drugName: drugName,
                drugPrice: drugPrice,
                qty: quantity,
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


    render(){
        return(

            <div className="container">
                <div className="drugform">

                </div>
                <form onSubmit={(event) => this.addDrugsDetails(event)}>

                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Drug Name</label>
                        <input type="text" className="form-control" id="drug_id"
                               placeholder="Drug Name" name="drugName" required/>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Drug Price</label>
                        <input type="text" className="form-control" id="drug_prc"
                               placeholder="Drug Price" name="drugPrice" required/>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Quantity</label>
                        <input type="text" className="form-control" id="qty"
                               placeholder="Quantity"
                               name="quantity" required/>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer">

                            <button type="submit" className="btn btn-primary">Add Drugs</button>
                        </div>
                    </div>

                </form>
                <div className="col py-md-5">
                <div className="well" id="from_3_table">
                    <DrugTable druginfo={this.state.druginfo} getAllDrugDetails={()=>this.getAllDrugDetails()}/>
                </div>
                </div>
            </div>

        );
    }

}

export default Drugs;