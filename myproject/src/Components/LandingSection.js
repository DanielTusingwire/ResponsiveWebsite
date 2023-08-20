import "./LandingSection.css"
import Frame from "../Assets/Frame.svg"

function LandingSection() {
    return (
    <>
 <landing>
    
<div className="WordContent">
    <h1 className="LandTitle">Pre-built Software: Faster Growth</h1>
    <p className="LandP">Explore our software products for marketplace, e-commerce, and digital business solutions to grow your online business. Create and manage online marketplaces with Marketplace Software, sell products with E-commerce Software, and offer digital services with Digital Business Software. Our solutions cater to all business sizes for increased growth.</p>
<button id="landButton"><a className="landButton" href="" >Book Demo Now</a></button>
</div>
<div className="ImageContent">
    <img src={Frame} alt="imge"/>
</div>

 </landing>


   
   </>
   
   
    );
  }
  
  export default LandingSection;
