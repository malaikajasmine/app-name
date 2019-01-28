import React, { Component } from 'react';



class Chero extends Component {
    render()
    {
         var arr2=this.props.chero.map((i,index)=>{
             return(
        <div key={index}>
        <input type={i.type} placeholder={i.placeholder} className={i.class} />
        </div>
        )
    })
        return (
        <div>
            
            <div className="wm">
            <h2>CONTACT ME</h2>
            <div className="tags">
            <h2>Say something</h2>
            {arr2}
            
            </div>
            </div>
        </div>
        );
    }q 
}
export default Chero;