import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMedi from './CardMedi'
import Form from "./Form";
import Cart from "./cart/Cart";

class Home extends Component{

    render(){
        return(

            <div className="contact">
                <section className="justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">MediSoon.LK</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News Feed</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Medi Stock
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Drugs</a>
                                        <a className="dropdown-item" href="#">Medi Equipment</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Baby Care</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search" id="drugname"/>
                                <button className="btn btn-outline-success mr-4 my-sm-0" type="submit">Search
                                </button>
                                <button className="btn btn-outline-success m-2 my-sm-0" type="submit">Sign in
                                </button>
                            </form>
                            <Form />
                            <Cart/>
                        </div>
                    </nav>
                </section>

            </div>

        )
    }

}

export default Home;