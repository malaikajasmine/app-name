import React, { Component } from 'react';
class Service extends Component{
    render(){
        var response=this.props.service.map((i,index)=>{
            return(
        <div className="style" key={index}><img src={i.name} /></div>
            )
            })

        return(
<div>
        <div className="diary">
{response}
           </div>
           <div className="table">
           <h1>Key Features</h1>
           <h2>_____</h2>
           <p>
Accessories Shop theme features fully styled WooCommerce along with some powerful popular addons that let you add products to wishlist and provide advanced viewing experience</p>
           </div>

           <div className="paralex">
           <div className="child">
           <h1>Custom Page Layouts
</h1>
<h2>______</h2>
<p>Unlimited layouts options for pages with on option to create custom presets!</p>
           </div>
           
           </div>
    </div>

    )
    }
}

export default Service;