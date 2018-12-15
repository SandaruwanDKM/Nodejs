import React,{Component} from 'react';
import Test from "./Test";


class Cardmedi extends Component{
    render(){
        return(
            <div className="cardlist">
            <section id="show-item" className="pb-5">
                <div className="container">
                    <h5 className="section-title h3 text-center py-3"></h5>
                    <Test/>
                </div>
            </section>
            </div>
        )
    }
}

export default Cardmedi;