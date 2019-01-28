import React, { Component } from 'react';
import Service from './services';


class Page extends Component {
    
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
    }
    



    render(){
        return (
        <div>
            <h1>this is a page</h1>
            <Service service={this.state.services}/>

            <div className="port">
            
            </div>
        </div>
        );
    }
}
export default Page;