import "./Landing.css"
import Frame from "../Assets/Frame.svg"
import serviceimg from "../Assets/imageService.svg"

function LandingPage() {
    return (
    <>
 <landing>
    
<div className="leftContent">
    <h1 className="LandTitle">Pre-built Software: Faster Growth</h1>
    <p className="LandP">Explore our software products for marketplace, e-commerce, and digital business solutions to grow your online business. Create and manage online marketplaces with Marketplace Software, sell products with E-commerce Software, and offer digital services with Digital Business Software. Our solutions cater to all business sizes for increased growth.</p>
<button id="landButton"><a className="landButton" href="" >Book Demo Now</a></button>
</div>
<div className="RightContent">
    <img src={Frame} alt="imge"/>
</div>

 </landing>

 <service1>

 <div className="RightContent">
        <img src={serviceimg} alt="imge"/>
    </div>
    
    <div className="leftContent">
        <h1 className="LandTitle">Marketplace software</h1>
        <p className="LandP">Our Marketplace Software simplifies the creation and management of online marketplaces with key features such as product and seller management, payment processing, and customer support. Customizable for online retail stores, freelance services, and real estate sales. Join successful marketplaces like Alibaba, eBay, and Etsy to increase profits.</p>
    <button id="landButton"><a className="landButton" href="" >Book Demo Now</a></button>
    </div>
    
     </service1>
   
   </>
   
   
    );
  }
  
  export default LandingPage;