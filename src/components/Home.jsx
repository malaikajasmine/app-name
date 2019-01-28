import React, { Component } from 'react';
// import { Route } from "react-router-dom"
import Example from './Example';
import Service from './services';
import Testimonials from './Testimonials';
import Offer from "./Offer";

class Home extends Component{
    state={
        services:[{
            name:"../img/fiftyone.jpg"
        },{
            name:"../img/fiftytwo.jpg"
        },{
            name:"../img/fiftythree.jpg"
        },{
            name:"../img/fiftyfour.jpg"
        },{
            name:"../img/fiftyfive.jpg"
        },{
            name:"../img/fiftysix.jpg"
        }],

        Testimonials:[{
 heading:"Product Quick View",
heading1:"________",
paragrph:
"With a Product Quick View addon you can optimize viewing experience of your products to attract more purchases*With a Product Quick View addon you can optimize viewing experience of your products to attract more purchases*",
        }],
        text:[{
heading:"hjbhvhv hvjhb jjhgj jhgj ",

        },{
            heading:"hjbhvhv hvjhb jjhgj jhgj ",            
                    },
                    {
                        heading:"hjbhvhv hvjhb jjhgj jhgj ",

 }
   ]
    }
    render(){
        
        return ( 
            <div>
            <Example/>
            <Service service={this.state.services}/>
            <Testimonials test={this.state.Testimonials} />
            <Offer />
            </div>
        )
    }
}

export default Home;