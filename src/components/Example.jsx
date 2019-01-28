import React,{Component} from 'react';
import $ from "jquery";
import { Link } from "react-router-dom";
class Example extends Component {
  componentDidMount = () =>{
    $(".structure").on("click",function(){
      alert("hgefreg ehrgvy4 jhegfyug")
    })
  }
    render(){
      const arr=[{
        name:"",
      },{
        head:"It's the food you love, delivered",
      },,{
        button:"Find Restaurent",
      }]

      var response=arr.map((index,i)=>{
        return(<div className="lead" key={i}>
        <h1>{index.head}</h1>
 <input type="Search" placeholder="Enter your block area" /><i class="fas fa-location-arrow"></i>
      
<button className="structure"><Link to="/page" >{index.button}</Link></button> 

        </div>)
      })
        return (<div>

            <div className="lead" style={{position:"relative",top:"-100px"}}>         


{response}
               </div>
<div className="position">
<h1>Choose Your Demo</h1>
<p>See our unique collection of beautiful and functional demos</p>
</div>
               </div>
        
        );
    }
}

export default Example;