import React, { Component } from 'react';


import Chero from './Contact_hero';

class Contact extends Component {
    state={
        arr2:[{

            type:"text",
            placeholder:"Email",
            class:"",
 
        },{

            type:"text",
            placeholder:"Name",
 class:"",
        },
        {

            type:"text",
            placeholder:"Enter Your Message",
 class:"ss",
        }]
        
       
    }




    render(){
        return (
        <div>
            <Chero chero={this.state.arr2} />
        </div>
        );
    }
}
export default Contact;