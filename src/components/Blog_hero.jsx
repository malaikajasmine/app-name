import React, { Component } from 'react';


class Bhero extends Component {
    
    render(){
        var res=this.props.Bhero.map((i,index)=>{
            return(
                <div className="measure" key={index}>

                <h2>{i.heading}</h2>
                <p>{i.paragraph1}<br />{i.para}</p>
                <button>{i.button}</button>
               </div>  
          )
        })
        return (
        <div>

            <div className="measure">
{res}
            </div>
                 </div>
        );
    }
}
export default Bhero;