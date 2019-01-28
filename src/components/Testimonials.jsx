import React, { Component } from 'react';
import AOS from "aos";
import { inherits } from 'util';
class Testimonials extends Component {
    render() {

AOS.init();

var item=this.props.test.map((index,i)=>{
    return(
<div className="shop" key={i}>
    <h1>
{index.heading}</h1>
<h2>{index.heading1}</h2>

<p>{index.paragrph}</p>
</div>    )
})    

        return (
            <div>
                <div className="copy">
                {item}
                </div>

            </div>
        );
    }
}

export default Testimonials;