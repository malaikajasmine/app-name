import React, { Component } from 'react';

import Bhero from "./Blog_hero";

class Blog extends Component {
    state={
        res:[{
            
            heading:"Our LookBook",
            paragraph1:"i need help allah pak plz help me", 
            para:" i need help allah pak plz help me",
            button:"Read More",
            
        }]
                }
    render(){
       
        return (
        <div>
            <Bhero Bhero={this.state.res} />
        </div>
        );
    }
}
export default Blog;