import "./Footer.css"
import FooterLogo from "./Assets/logofooter.svg"
import twiter from "./Assets/twiter.svg"
import insta from "./Assets/insta.svg"
import fb from "./Assets/fb.svg"
import arrow from "./Assets/Arrow.png"


function Footer(){
    return(
<>
<div id="smallContainer">
    <div className="para">
    <p>Stay updated by subscribing to our newsletter</p>
    </div>

    <div className="textBox">
    <input className="name" type="text" placeholder="Name" />
    <div className="separator"/>
    <input className="email" type="email" placeholder="Email Address" />
    <button className="sendBtn"> Send</button>
    </div>
    
    
</div>

<div id="bigRectangle">
    <div className="content">
    <div className=" section logoSide">
        <img src={FooterLogo} width={300}/>
        <p> TALLEN is a tech enterprise that provides world-class services in UI/UX design, web/app development, and management. .</p>
        
    </div>
    <div className=" section CompanySide">
    <h5> Company</h5>

    <ul >
        <li><a className='active' href=''>Home</a></li>
        <li><a href=''>Shop</a></li>
        <li><a href=''>Blog</a></li>
        <li><a href=''>Blog</a></li>
   
    </ul>

    </div>
    <div className=" section OurServiceSide">
    <h5> Company</h5>

    <ul >
        <li> <a className='active' href=''>Home</a></li>
        <li><a href=''>Shop</a></li>
        <li><a href=''>Blog</a></li>
        <li><a href=''>Blog</a></li>
    </ul>

    </div>
    <div className=" section SocialSide">
    <h5> Company</h5>
    <ul >
        <li> <a className='active' href=''><img src={twiter} /> </a></li>
        <li> <a className='active' href=''><img src={fb} /> </a></li>
        <li> <a className='active' href=''><img src={insta} /> </a></li>
        <li> <a className='active' href=''><img src={twiter} /> </a></li>
    </ul>

    </div>
    </div>
    <div className="line"></div>
    <div><h1>Hi my name </h1></div>

</div>
</>


    )
}

export default Footer;