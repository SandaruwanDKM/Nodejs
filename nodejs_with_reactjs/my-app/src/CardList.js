import React,{Component} from 'react';
import Card from "./Card";
import axios from "axios";



const CardList = ({Robots}) =>{
    return(
        <div>
            {
                Robots.map((user,i) =>{
                    return <Card key={i}
                                 id={Robots[i].id}
                                 name={Robots[i].name}
                                 email={Robots[i].email}/>
                })
            }
        </div>
    );
}


export default CardList;