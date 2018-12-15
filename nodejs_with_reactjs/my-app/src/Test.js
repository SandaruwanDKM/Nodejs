import React,{Component} from 'react';
import axios from "axios";
import Testcard from "./Testcard";


class Test extends Component{


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

    render(){
        return(


                <section id="show-item" className="pb-5">
                    <div className="container">
                        <h5 className="section-title h3 text-center py-3">Recommended For You</h5>
                            <Testcard druginfo={this.state.druginfo} getAllDrugDetails={()=>this.getAllDrugDetails()}/>
                    </div>
                </section>


        );
    }

}

export default Test;