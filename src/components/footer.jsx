import React, {Component} from 'react';
class Footer extends Component{
    render(){
        return(
    <div>
<div className="footer">
<h1>Subscribe To Our Newsletter</h1>
<p>Join Accessor for weekly inspiration, thoughts and resources sent every Sunday.</p>
<input type="text" placeholder="Enter your Emsil Adress..***" />
<button className="suscribe">Suscribe Now</button>
<p className="para">&copy; All right reserved</p>


<div className="icon"><i class="fab fa-facebook-f"></i>
<i className="fab fa-google"></i>
<i className="fab fa-twitter"></i>
<i className="fab fa-instagram"></i>
<h3>Follow us on facebook </h3>
<h4>Follow us on google </h4>
<h5>Follow us on twitter </h5>
<h6>Follow us on instagram </h6>
</div>
</div>
    </div>)
    }
}
export default Footer;