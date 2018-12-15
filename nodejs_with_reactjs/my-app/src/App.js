 import React,{Component} from 'react';
 import {Robots} from "./Robots";
 import Home from './Home';
 import CardMedi from "./CardMedi";
 import Drugs from './Drugs';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
 import Cardpayment from "./cart/Payment";

 library.add(faStroopwafel)

class App extends Component{
     constructor(){
         super()
         this.state={
             Robots:Robots,
             searchfiled:''
         }
     }

     onSearchChange(event){
         console.log(event)
     }
    render(){
         return(

                 <div>
                     <Home />
                     <CardMedi/>
                     <Drugs/>
                 </div>

         );
     }

}

export default App;