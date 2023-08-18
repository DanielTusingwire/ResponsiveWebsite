import "./Landing.css"
import Frame from "../Assets/Frame.svg"

function LandingPage() {
    return (
    <>
 <landing>
    
<div className="leftContent">
    <h1 className="LandTitle">Pre-built Software: Faster Growth</h1>
    <p className="LandP">Explore our software products for marketplace, e-commerce, and digital business solutions to grow your online business. Create and manage online marketplaces with Marketplace Software, sell products with E-commerce Software, and offer digital services with Digital Business Software. Our solutions cater to all business sizes for increased growth.</p>
</div>
<div className="RightContent">
    <img src={Frame} alt="imge"/>
</div>

 </landing>
   
   </>
   
   
    );
  }
  
  export default LandingPage;