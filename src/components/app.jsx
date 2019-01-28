import React, { Component } from 'react';
import Nav from "./Nav";
import Home from './Home';
import About from "./About";
import Blog from './Blog';
import Contact from './Contact_us';
import Footer from './footer';
import { Route } from "react-router-dom";
import Page from './page';


class App extends Component {
 
    render()
    {
        return (
        <div>
            <Nav/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/Blog" component={Blog}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/page" component={Page}/>
            <Footer />

            
        </div>
        );



        
    }
}

export default App;